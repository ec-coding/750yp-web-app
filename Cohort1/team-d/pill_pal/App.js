import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';
import { Modal, Portal, Provider, FAB } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { QueryClient, QueryClientProvider } from 'react-query';

import FabModal from './src/components/FabModal';
import { UserAuth } from './src/context/UserAuthContext';
import { UserMedication } from './src/context/UserMedicationContext';
import { useUserAuth } from './src/hooks/useUserAuth';
import AuthScreen from './src/screens/AuthScreen';
import GuideScreen from './src/screens/GuideScreen';
import HomeScreen from './src/screens/HomeScreen';
import MedicationScreen from './src/screens/MedicationScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const queryClient = new QueryClient();

const Tab = createBottomTabNavigator();

const homeIcon = ({ color, size }) => (
  <MaterialCommunityIcons name="home" color={color} size={size} />
);

const chatIcon = ({ color, size }) => (
  <MaterialCommunityIcons name="chat" color={color} size={size} />
);
const pillIcon = ({ color, size }) => (
  <MaterialCommunityIcons name="pill" color={color} size={size} />
);

const accountIcon = ({ color, size }) => (
  <MaterialCommunityIcons name="account" color={color} size={size} />
);

const MainApp = () => {
  const { session } = useUserAuth();

  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20, flex: 1 };

  if (session && session.user) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="black" translucent />
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <FabModal hideModal={hideModal} />
          </Modal>
        </Portal>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
              tabBarActiveTintColor: 'purple',
              headerShown: false,
            }}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: homeIcon,
              }}
            />
            <Tab.Screen
              name="Chat"
              component={GuideScreen}
              options={{
                tabBarLabel: 'Guide',
                tabBarItemStyle: { marginRight: 50 },
                tabBarIcon: chatIcon,
              }}
            />
            <Tab.Screen
              name="Add Medication"
              component={MedicationScreen}
              options={{
                tabBarLabel: 'Medication',
                tabBarItemStyle: { marginLeft: 50 },
                tabBarIcon: pillIcon,
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: accountIcon,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
        <FAB style={styles.fab} icon="plus" onPress={showModal} />
      </SafeAreaView>
    );
  }

  return <AuthScreen />;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserAuth>
        <UserMedication>
          <Provider>
            <MainApp />
          </Provider>
        </UserMedication>
      </UserAuth>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingTop: 60,
  },
  fab: {
    ...Platform.select({
      android: {
        position: 'absolute',
        bottom: 10,
        left: '50%',
        marginLeft: -28,
      },
      ios: {
        position: 'absolute',
        bottom: 70,
        left: '50%',
        marginLeft: -28,
      },
      default: {
        position: 'absolute',
        bottom: 40,
        left: '50%',
        marginLeft: -28,
      },
    }),
  },
});

export default App;
