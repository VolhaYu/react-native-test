import React, { useEffect } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import Card from '../components/card';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, setOrders } from '../store/reducers/orderSlice';
import { AppDispatch, useAppSelector } from '../store/store';
import { updateOrder } from '../api/api';

type Props = NativeStackScreenProps<RootStackParamList, "OrderList", "MyStack">;

const OrderList = ({ navigation}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const orders = useAppSelector(state => state.orders.orders);
  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <View>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          {orders &&
            orders.map((data) => (
              <TouchableOpacity 
                key={data.id}
                onPress={() => {navigation.navigate('OrderEvaluation', {orderId: data.id})}}
                style={{
                  padding: 10,
                  margin: 10,
                  borderColor: 'black',
                  borderRadius: 10,
                  borderWidth: 1,
                }}
              >
                <Card 
                  avatar={data.avatar}
                  order={data.order}
                  info={data.info}
                  id={data.id}
                  grade={data.grade}
                />
              </TouchableOpacity>
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default OrderList;
