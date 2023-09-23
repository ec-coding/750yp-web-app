import axios from 'axios';
import { Formik } from 'formik';
import React, { useCallback, useRef, useState } from 'react';
import { View, StyleSheet, Image, Platform, ScrollView } from 'react-native';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import { Text, TextInput, Button, Appbar, ActivityIndicator } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

import { useUserMedication } from '../hooks';
import prescriptionSchema from '../schemas';

Feather.loadFont();

const FORM_STATE_INITIAL = {
  name: '',
  strength: '',
  frequency: '',
  amount: null,
  duration: null,
  takeWithMeal: null,
  startDate: Date.now(),
};

const beforeMealIcon = () => (
  <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
    <Image source={require('../../assets/images/before_meal_icon.png')} style={styles.mealImage} />
  </View>
);

const duringMealIcon = () => (
  <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
    <Image source={require('../../assets/images/during_meal_icon.png')} style={styles.mealImage} />
  </View>
);

const afterMealIcon = () => (
  <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
    <Image source={require('../../assets/images/after_meal_icon.png')} style={styles.mealImage} />
  </View>
);

const FabModal = ({ hideModal }) => {
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([]);
  const [frequency, setFrequency] = useState([]);
  const [loading, setLoading] = useState(false);
  const [suggestionsList, setSuggestionsList] = useState(null);
  const [strengthOpen, setStrengthOpen] = useState(false);
  const [frequencyOpen, setFrequencyOpen] = useState(false);
  const dropdownController = useRef(null);
  const searchRef = useRef(null);
  // context global state
  const { addToMedicationList, loading: addToMedicationListLoading } = useUserMedication();
  // Meal button state
  const [beforeButtonToggled, setBeforeButtonToggled] = useState(false);
  const [duringButtonToggled, setDuringButtonToggled] = useState(false);
  const [afterButtonToggled, setAfterButtonToggled] = useState(false);
  const [showError, setShowError] = useState(false);

  DropDownPicker.setListMode('SCROLLVIEW');

  const onStrengthOpen = useCallback(() => {
    setFrequencyOpen(false);
    setStrengthOpen((strengthOpen) => !strengthOpen);
  }, []);

  const onFrequencyOpen = useCallback(() => {
    setStrengthOpen(false);
    setFrequencyOpen((frequencyOpen) => !frequencyOpen);
  }, []);

  const getSuggestions = useCallback(async (q) => {
    const filterToken = q.toLowerCase();

    if (typeof q !== 'string' || q.length < 3) {
      setSuggestionsList(null);
      return;
    }
    setLoading(true);

    try {
      const response = await axios.get(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search`, {
        params: {
          terms: q,
          ef: 'STRENGTHS_AND_FORMS',
        },
      });
      const items = response.data;

      const suggestions = items[1]
        .filter((item) => item.toLowerCase().includes(filterToken))
        .map((item, index) => ({
          id: index + 1,
          title: item,
        }));
      setSuggestionsList(suggestions);
      setItems(
        items[2]['STRENGTHS_AND_FORMS'][0].map((item) => ({
          label: item,
          value: item,
        }))
      );
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, []);

  const onClearPress = useCallback(() => {
    setSuggestionsList(null);
  }, []);

  const handleFormSubmit = (medications) => {
    addToMedicationList(medications, hideModal);
  };

  return (
    <ScrollView style={styles.container}>
      {addToMedicationListLoading ? <ActivityIndicator /> : null}
      <Appbar.Header mode="small" style={styles.appBarHeader}>
        <Appbar.BackAction onPress={hideModal} />
        <Appbar.Content title="Add Medication" />
      </Appbar.Header>
      {/* *****Input Title for Pills Name***** */}
      <Text style={styles.subtitle}>Pill name</Text>
      {/* *****Input for Pills Name***** */}
      <Formik
        initialValues={FORM_STATE_INITIAL}
        onSubmit={handleFormSubmit}
        validateOnMount
        validateOnChange
        validationSchema={prescriptionSchema}>
        {({
          handleChange,
          handleSubmit,
          setFieldValue,
          handleBlur,
          errors,
          touched,
          values,
          isValid,
          isSubmitting,
        }) => (
          <>
            <View style={{ zIndex: 3 }}>
              <AutocompleteDropdown
                ref={searchRef}
                controller={(controller) => {
                  dropdownController.current = controller;
                }}
                direction={Platform.select({ ios: 'down' })}
                dataSet={suggestionsList}
                onChangeText={getSuggestions}
                onSelectItem={(item) => {
                  if (item) {
                    setFieldValue('name', item.title);
                    handleChange('name');
                  }
                }}
                onClearPress={onClearPress}
                loading={loading}
                useFilter={false} // set false to prevent rerender twice
                textInputProps={{
                  placeholder: 'Type pill name',
                  placeholderTextColor: '#000',
                  autoCorrect: false,
                  autoCapitalize: 'none',
                  style: {
                    borderRadius: 15,
                    backgroundColor: '#CBC3E3',
                    color: '#000',
                    paddingLeft: 18,
                  },
                }}
                rightButtonsContainerStyle={{
                  right: 8,
                  height: 30,
                  alignSelf: 'center',
                }}
                inputContainerStyle={{
                  backgroundColor: '#CBC3E3',
                  borderRadius: 10,
                }}
                suggestionsListContainerStyle={{
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  borderWidth: 0.2,
                  borderColor: '#000',
                }}
                renderItem={(item, text) => (
                  <Text style={{ color: '#000', padding: 15 }}>{item.title}</Text>
                )}
                ChevronIconComponent={<Feather name="chevron-down" size={20} color="#000" />}
                ClearIconComponent={<Feather name="x-circle" size={18} color="#000" />}
                inputHeight={50}
                showChevron
                closeOnBlur={false}
              />
              {errors.name && touched.name && <Text style={styles.error}>{errors.name}</Text>}
            </View>
            <Text style={styles.subtitle}>Strength List</Text>
            <View style={{ position: 'relative', zIndex: 2 }}>
              <DropDownPicker
                style={{
                  backgroundColor: '#CBC3E3',
                  borderRadius: 10,
                  borderWidth: 0,
                }}
                dropDownContainerStyle={{
                  borderWidth: 0.2,
                  borderColor: '#000',
                }}
                placeholder="Select strength"
                open={strengthOpen}
                setOpen={onStrengthOpen}
                value={value}
                setValue={setValue}
                onSelectItem={(value) => {
                  setFieldValue('strength', value.value);
                  handleChange('strength');
                }}
                items={items}
                setItems={(t) => console.log(t)}
              />
            </View>
            {errors.strength && touched.strength && (
              <Text style={styles.error}>{errors.strength}</Text>
            )}
            <Text style={styles.subtitle}>Frequency</Text>
            <View style={{ position: 'relative', zIndex: 1 }}>
              <DropDownPicker
                style={{
                  backgroundColor: '#CBC3E3',
                  borderRadius: 10,
                  borderWidth: 0,
                }}
                dropDownContainerStyle={{
                  borderWidth: 0.2,
                  borderColor: '#000',
                }}
                placeholder="Select frequency"
                open={frequencyOpen}
                setOpen={onFrequencyOpen}
                value={frequency}
                setValue={setFrequency}
                items={[
                  { label: 'once a day', value: '1' },
                  { label: 'twice a day', value: '2' },
                  { label: 'three times a day', value: '3' },
                  { label: 'four times a day', value: '4' },
                ]}
                setItems={setItems}
                onSelectItem={(value) => {
                  setFieldValue('frequency', value.value);
                  handleChange('frequency');
                }}
                zIndex={999}
              />
            </View>
            {errors.frequency && touched.frequency && (
              <Text style={styles.error}>{errors.frequency}</Text>
            )}
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 15 }}>
              <Text style={styles.subtitle}>Quantity</Text>
              <View
                style={{
                  ...styles.input,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <TextInput
                  style={{ backgroundColor: 'transparent' }}
                  underlineColor="transparent"
                  activeUnderlineColor="transparent"
                  outlineColor="transparent"
                  inputMode="numeric"
                  onBlur={handleBlur('amount')}
                  left={<TextInput.Icon icon="pill" />}
                  error={!!(touched.amount && errors.amount)}
                  onChangeText={(value) => {
                    setFieldValue('amount', value);
                    handleChange('amount');
                  }}
                />
                <Text style={{ marginRight: 10 }}>Pills</Text>
              </View>
            </View>
            {errors.amount && touched.amount && <Text style={styles.error}>{errors.amount}</Text>}
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 15 }}>
              <Text style={styles.subtitle}>Duration</Text>
              <View
                style={{
                  ...styles.input,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <TextInput
                  style={{ backgroundColor: 'transparent' }}
                  underlineColor="transparent"
                  activeUnderlineColor="transparent"
                  outlineColor="transparent"
                  inputMode="numeric"
                  onBlur={handleBlur('duration')}
                  left={<TextInput.Icon icon="calendar" />}
                  error={!!(touched.duration && errors.duration)}
                  onChangeText={(value) => {
                    setFieldValue('duration', value);
                    handleChange('duration');
                  }}
                />
                <Text style={{ marginRight: 10 }}>Days</Text>
              </View>
            </View>
            {errors.duration && touched.duration && (
              <Text style={styles.error}>{errors.duration}</Text>
            )}

            <Text style={styles.subtitle}>Food & Pills</Text>
            <View style={styles.rowContainer}>
              <Button
                style={beforeButtonToggled === true ? styles.mealButtonPressed : styles.mealButton}
                mode="contained"
                onPress={() => {
                  setBeforeButtonToggled(!beforeButtonToggled);
                  setDuringButtonToggled(false);
                  setAfterButtonToggled(false);
                  setFieldValue('takeWithMeal', values.takeWithMeal === 0 ? null : 0);
                  handleChange('takeWithMeal');
                  setShowError(true);
                }}
                icon={beforeMealIcon}
              />

              <Button
                style={duringButtonToggled === true ? styles.mealButtonPressed : styles.mealButton}
                mode="contained"
                onPress={() => {
                  setBeforeButtonToggled(false);
                  setDuringButtonToggled(!duringButtonToggled);
                  setAfterButtonToggled(false);
                  setFieldValue('takeWithMeal', values.takeWithMeal === 1 ? null : 1);
                  handleChange('takeWithMeal');
                  setShowError(true);
                }}
                icon={duringMealIcon}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
              />

              <Button
                style={afterButtonToggled === true ? styles.mealButtonPressed : styles.mealButton}
                mode="contained"
                onPress={() => {
                  setBeforeButtonToggled(false);
                  setDuringButtonToggled(false);
                  setAfterButtonToggled(!afterButtonToggled);
                  setFieldValue('takeWithMeal', values.takeWithMeal === 2 ? null : 2);
                  handleChange('takeWithMeal');
                  setShowError(true);
                }}
                icon={afterMealIcon}
              />
            </View>
            {/* real-error validation error message */}
            {showError && <Text style={styles.error}>{errors.takeWithMeal}</Text>}
            <View style={styles.buttonContainer}>
              <Button
                mode="contained-tonal"
                style={styles.button}
                disabled={isSubmitting || !isValid}
                onPress={handleSubmit}>
                Add Medication
              </Button>
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default FabModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBarHeader: {
    backgroundColor: '#fff',
    paddingTop: 0,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  mealButton: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#F8F8F6',
  },
  mealButtonPressed: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#F8F8F6',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#A99ED2',
    shadowColor: '#A99ED2',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 4,
  },
  mealImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  frequencyInput: {
    backgroundColor: '#CBC3E3',
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 5,
    borderWidth: 1,
  },
  input: {
    backgroundColor: '#CBC3E3',
    marginLeft: 50,
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CBC3E3',
  },
  error: {
    color: 'red',
    marginLeft: 20,
    marginTop: 5,
  },
});
