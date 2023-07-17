import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View, Text } from 'react-native';
import Card from '../components/card';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useDispatch } from 'react-redux';
import { getOrders } from '../store/reducers/orderSlice';
import { AppDispatch, useAppSelector } from '../store/store';

type Props = NativeStackScreenProps<RootStackParamList, 'OrderList', 'MyStack'>;

const OrderList = ({ navigation }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const orders = useAppSelector((state) => state.orders.orders);
  const isLoading = useAppSelector((state) => state.orders.isLoading);
  const error = useAppSelector((state) => state.orders.error);
  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <>
            {isLoading && <Text>Loading...</Text>}
            {error && <Text>{error}</Text>}
          </>
          {orders &&
            orders.map((data) => (
              <TouchableOpacity
                style={styles.order}
                key={data.id}
                onPress={() => {
                  navigation.navigate('OrderEvaluation', { orderId: data.id });
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
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  order: {
    padding: 10,
    margin: 10,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    width: '90%',
  },
});

export default OrderList;
