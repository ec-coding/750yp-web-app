import capitalize from 'lodash/capitalize';
import { useState, useMemo } from 'react';
import { StyleSheet, View, Image, FlatList, TouchableOpacity } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import {
  Avatar,
  Card,
  Text,
  Searchbar,
  ActivityIndicator,
  Modal,
  Portal,
} from 'react-native-paper';
import WheelPicker from 'react-native-wheely';
import { useUserAuth } from '../../src/hooks/useUserAuth';
import { useUserMedication } from '../../src/hooks/useUserMedication';
import { statusEnum } from '../enums/StatusEnum';
const Item = ({ title, status, amount, icon, onPress, id }) => (
  <TouchableOpacity onPress={() => onPress(id)}>
    <View style={styles.item}>
      <Card disabled style={styles.card}>
        <Card.Content>
          <Card.Title
            title={title}
            titleNumberOfLines={2}
            subtitle={`Status: ${statusEnum[status]} - Amount: ${amount} pills`}
            subtitleNumberOfLines={6}
            left={(props) => <Avatar.Icon {...props} icon={icon} />}
          />
        </Card.Content>
      </Card>
    </View>
  </TouchableOpacity>
);
const HomeScreen = () => {
  const [selectedReminder, setSelectedReminder] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const { profile } = useUserAuth();
  const {
    medicationReminders,
    updateMedicationReminder,
    completedMedications,
    totalMedicationReminders,
    filterMedicationRemindersByDay,
  } = useUserMedication();
  const onChangeSearch = (query) => {
    setSearchQuery(query);
    const filteredData = filterMedicationRemindersByDay(medicationReminders);
    setFilteredData(filteredData);
  };
  const DATA = useMemo(() =>
    medicationReminders.map(
      (medication) => ({
        id: medication.id,
        title: medication.name,
        amount: medication.amount,
        status: medication.status,
        completedAt: medication.completedAt,
      }),
      [medicationReminders]
    )
  );
  const handleReminderPress = (itemId) => {
    setSelectedReminder(medicationReminders.filter((item) => item.id === itemId)[0]);
  };
  const handleReminderStatusChange = (statusIndex) => {
    setShowConfetti(false);
    updateMedicationReminder({ ...selectedReminder, status: statusIndex });
    setSelectedReminder(null);
    if (statusIndex === 1) {
      setShowConfetti(true);
    }
    setTimeout(() => {
      setShowConfetti(false);
    }, 8000);
  };
  if (profile) {
    return (
      <>
        {showConfetti && <ConfettiCannon count={200} autoStart origin={{ x: -10, y: 0 }} />}
        <Portal>
          <Modal
            visible={selectedReminder !== null}
            onDismiss={() => setSelectedReminder(null)}
            contentContainerStyle={{
              backgroundColor: 'white',
              padding: 20,
              position: 'absolute',
              right: 0,
              left: 0,
              bottom: 0,
            }}>
            <Text>{selectedReminder?.name}</Text>
            <WheelPicker
              selectedIndex={0}
              options={Object.values(statusEnum)}
              onChange={handleReminderStatusChange}
              selectedIndicatorStyle={{
                backgroundColor: '#CBC3E3',
              }}
              itemTextStyle={{ fontSize: 25, fontWeight: 500 }}
              itemHeight={50}
            />
          </Modal>
        </Portal>
        <FlatList
          style={styles.container}
          ListHeaderComponent={
            <>
              <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.searchbar}
              />
              <Text style={styles.titleHello}>Hello,</Text>
              <Text style={styles.titleName}>{capitalize(profile.username)}</Text>
              <View style={styles.banner}>
                <View style={styles.bannerLeft}>
                  <Text style={styles.plan}>Your plan for today</Text>
                  <Text style={styles.number}>
                    {completedMedications} out of {totalMedicationReminders} completed
                  </Text>
                </View>
                <View style={styles.bannerRight}>
                  <Image source={require('../../assets/images/jah-lifter.png')} />
                </View>
              </View>
              <Text style={styles.titleReview}>Daily Review</Text>
            </>
          }
          data={searchQuery ? filteredData : DATA}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              title={item.title}
              status={item.status}
              time={item.time}
              amount={item.amount}
              completedAt={item.completedAt}
              icon="pill"
              onPress={handleReminderPress}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </>
    );
  }
  return (
    <View style={styles.activityIndicator}>
      <ActivityIndicator animating size="large" />
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  searchbar: {
    margin: 30,
    borderRadius: 15,
    backgroundColor: '#efeaef',
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30,
    backgroundColor: '#CBC3E3',
    borderRadius: 28,
    padding: 20,
  },
  bannerLeft: {
    flex: 2,
  },
  plan: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  number: {
    fontSize: 12,
    color: '#666A71',
    marginTop: 5,
  },
  showMore: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#EC7669',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  titleHello: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  titleName: {
    fontSize: 30,
    marginLeft: 30,
    marginTop: 5,
  },
  titleReview: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  bannerRight: {
    flex: 3,
    marginTop: -120,
    marginLeft: 50,
  },
  card: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    borderRadius: 24,
  },
});
