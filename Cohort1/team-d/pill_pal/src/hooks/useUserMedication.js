import { useContext } from 'react';

import { UserMedicationContext } from '../context/UserMedicationContext';

export const useUserMedication = () => {
  const userMedication = useContext(UserMedicationContext);

  return userMedication;
};
