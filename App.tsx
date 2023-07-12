import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderEvaluation from './src/pages/OrderEvaluation';
import OrderList from './src/pages/OrdersList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={OrderList}
          // options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={OrderEvaluation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
