import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderEvaluation from './src/pages/OrderEvaluation';
import OrderList from './src/pages/OrdersList';

export type RootStackParamList = {
  OrderList: undefined;
  OrderEvaluation: {
    orderId: string
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OrderList"
          component={OrderList}
        />
        <Stack.Screen name="OrderEvaluation" component={OrderEvaluation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
