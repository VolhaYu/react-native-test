import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import Stars from '../components/stars';
import { AppDispatch, useAppSelector } from '../store/store';
import List from '../components/list';
import { updateOrder } from '../api/api';
import { RootStackParamList } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { getOrders, setOrders } from '../store/reducers/orderSlice';

type Props = NativeStackScreenProps<RootStackParamList, "OrderEvaluation", "MyStack">;

const OrderEvaluation = ({ route }: Props) => {
  const orderId = +route.params.orderId;
  const dispatch = useDispatch<AppDispatch>();
  const orders = useAppSelector(state => state.orders.orders);

  const [grade, setGrade] = useState<number | undefined>(orders[orderId-1].grade);
  
  let title = 'Поставьте оценку!'
  if (grade) {
    grade < 4 ? title = 'Что случилось?' : title = 'Что понравилось?';
  }

  const buttonPut = async () => {
    console.log('click');
    await updateOrder(orderId, {
      grade: grade,
    });
  }

  const gradeHandle = (item: number) => {
    setGrade(item);
  }

  return (
    <View style={{alignItems: 'center', padding: 15}}>
      <Text> {title} </Text>
      <Stars gradeHandler={gradeHandle} grade={grade} size={50}/>
      {grade && <List grade={grade} />}
      <Button
        onPress={buttonPut}
        title="Отправить"
        color="#ffba00"
      />
    </View>
  )
}

export default OrderEvaluation;
