import { addDays, eachDayOfInterval } from 'date-fns';
import { createContext, useState, useMemo, useEffect } from 'react';
import { useQuery } from 'react-query';

import { supabase } from '../../config/supabase';
import { statusEnum } from '../enums/StatusEnum';
import { useUserAuth } from '../hooks/useUserAuth';

const UserMedicationContext = createContext(null);

function UserMedication({ children }) {
  const { session } = useUserAuth();
  const userId = session?.user.id;

  const [loading, setLoading] = useState(false);

  const {
    data: medicationList,
    isFetching: isFetchingMedications,
    isLoading: isLoadingMedications,
    isError: isErrorMedications,
    refetch: refetchMedications,
  } = useQuery(
    'medicationList',
    async () => {
      const { data } = await supabase
        .from('user_prescription')
        .select('*')
        .filter('profile_id', 'eq', userId);
      return data;
    },
    { enabled: Boolean(session?.user.id) }
  );

  const {
    data: medicationReminders,
    isFetching: isFetchingReminders,
    isLoading: isLoadingReminders,
    isError: isErrorReminders,
    refetch: refetchReminders,
  } = useQuery(
    'medicationReminders',
    async () => {
      const today = new Date().toISOString().slice(0, 10);
      const { data } = await supabase
        .from('reminders')
        .select('*')
        .eq('profile_id', userId)
        .eq('due_date', today)
        .neq('status', 1);
      return data;
    },
    {
      enabled: Boolean(session?.user.id),
    }
  );

  useEffect(() => {
    // create a notification to reminder to user to take their medications every hour (if there's any)
    // notification should have the upcoming medication info
  }, [medicationReminders]);

  const addToMedicationList = async (medication, callBack = () => {}) => {
    setLoading(true);
    const { name, frequency, amount, strength, duration, takeWithMeal } = medication;
    try {
      const { data } = await supabase
        .from('user_prescription')
        .insert({
          name,
          profile_id: session?.user.id,
          frequency,
          amount,
          strength,
          duration,
          takeWithMeal,
          startDate: new Date(),
        })
        .select();
      await addToMedicationReminders(data[0], callBack);
      refetchMedications();
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const addToMedicationReminders = async (medication, callBack = () => {}) => {
    const dates = medicationReminderDays(medication);

    try {
      for (const date of dates) {
        const { id, ...medicationWithoutId } = medication;
        const { error } = await supabase.from('reminders').insert({
          ...medicationWithoutId,
          status: 0,
          due_date: new Date(date).toISOString().slice(0, 10),
        });
        console.log('reminder error', error);
      }

      setLoading(false);
      callBack();
      refetchReminders();
    } catch (error) {
      console.log('catch error', error);
      setLoading(false);
    }
  };

  const updateMedicationReminder = async (medication) => {
    try {
      const { error } = await supabase.from('reminders').upsert({
        ...medication,
      });
      console.log(error);
      refetchReminders();
    } catch (error) {
      console.log(error);
    }
  };

  function medicationReminderDays(medication) {
    const startDate = new Date(medication.startDate); // Get the start date of the medication reminder
    const endDate = addDays(startDate, medication.duration - 1); // Calculate the end date of the medication reminder
    const interval = { start: startDate, end: endDate }; // Create an interval object for the medication reminder
    return eachDayOfInterval(interval);
  }

  const values = useMemo(
    () => ({
      medicationList: medicationList || [],
      addToMedicationList,
      medicationReminders:
        medicationReminders?.filter((item) => item.status !== statusEnum[1]) || [],
      addToMedicationReminders,
      updateMedicationReminder,
      completedMedications:
        medicationReminders?.filter((item) => item.status === statusEnum[1]).length || 0,
      totalMedicationReminders: medicationReminders?.length || 0,
      loading:
        isLoadingMedications ||
        isLoadingReminders ||
        isFetchingMedications ||
        isFetchingReminders ||
        loading,
      isError: isErrorMedications || isErrorReminders,
    }),
    [medicationList, medicationReminders]
  );
  return <UserMedicationContext.Provider value={values}>{children}</UserMedicationContext.Provider>;
}

export { UserMedicationContext, UserMedication };
