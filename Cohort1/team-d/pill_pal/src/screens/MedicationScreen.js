import { useState } from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import { Avatar, Card, Text, Searchbar, ActivityIndicator } from 'react-native-paper';

import { useUserAuth } from '../../src/hooks/useUserAuth';
import { useUserMedication } from '../../src/hooks/useUserMedication';
import { takeWithMealEnum } from '../enums/TakeWithMealEnum';

const Item = ({ title, status, duration, frequency, amount, icon }) => (
  <View style={styles.item}>
    <Card style={styles.card}>
      <Card.Content>
        <Card.Title
          title={title}
          titleNumberOfLines={2}
          subtitle={`Take with meal: ${status} - Amount: ${amount} pills  - Duration: ${duration} days - Frequency: ${frequency} pill/day`}
          subtitleNumberOfLines={5}
          left={(props) => <Avatar.Icon {...props} icon={icon} />}
        />
      </Card.Content>
    </Card>
  </View>
);

const MedicationScreen = () => {
  const { profile } = useUserAuth();
  const { medicationList } = useUserMedication();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const DATA = medicationList.map((medication, i) => ({
    id: i,
    title: medication.name,
    amount: medication.amount,
    duration: medication.duration,
    frequency: medication.frequency,
    status: takeWithMealEnum[medication.takeWithMeal] || 'N/A',
  }));

  const onChangeSearch = (query) => {
    setSearchQuery(query);

    const filteredData = medicationList.filter((medication) =>
      medication.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filteredData);
  };

  if (profile) {
    return (
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
            <Text style={styles.titleHello}>{}</Text>
            <View style={styles.banner}>
              <View style={styles.bannerLeft}>
                <Text style={styles.bannerTitle}>Your list of medications</Text>
                <Text style={styles.bannerSubtitle}>
                  Total number of medications: {medicationList.length}
                </Text>
              </View>
              <View style={styles.bannerRight}>
                <Image source={require('../../assets/images/skipping.png')} />
              </View>
            </View>
            <Text style={styles.flatlistTitle}>Medications</Text>
          </>
        }
        data={searchQuery ? filteredData : DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            status={item.status}
            amount={item.amount}
            duration={item.duration}
            frequency={item.frequency}
            icon="pill"
          />
        )}
        keyExtractor={(item) => item.id}
      />
    );
  }

  return (
    <View style={styles.activityIndicator}>
      <ActivityIndicator animating size="large" />
    </View>
  );
};

export default MedicationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchbar: {
    margin: 30,
    borderRadius: 15,
    backgroundColor: "#efeaef",
  },
  titleHello: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 10,
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
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#6E7191',
  },
  flatlistTitle: {
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
