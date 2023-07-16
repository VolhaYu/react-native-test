import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import Stars from '../components/stars';
import { AppDispatch, useAppSelector } from '../store/store';
import List from '../components/list';
import { updateOrder } from '../api/api';
import { RootStackParamList } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getOrders } from '../store/reducers/orderSlice';
import { useDispatch } from 'react-redux';
import { clearFeedback } from '../store/reducers/listSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'OrderEvaluation', 'MyStack'>;

const OrderEvaluation = ({ route }: Props) => {
  const orderId = +route.params.orderId;
  const dispatch = useDispatch<AppDispatch>();
  const feedback = useAppSelector((state) => state.list.feedback);
  const orders = useAppSelector((state) => state.orders.orders);

  const [grade, setGrade] = useState<number | undefined>(orders[orderId - 1].grade);

  let title = 'Поставьте оценку!';
  if (grade) {
    grade < 4 ? (title = 'Что случилось?') : (title = 'Что понравилось?');
  }

  const buttonPut = async () => {
    await updateOrder(orderId, {
      grade: grade,
      feedback: feedback,
    });
    dispatch(getOrders());
    dispatch(clearFeedback());
  };

  const gradeHandle = (item: number) => {
    setGrade(item);
  };

  return (
    <View style={{ alignItems: 'center', padding: 15 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 15 }}> {title} </Text>
      <Stars gradeHandler={gradeHandle} grade={grade} size={50} />
      {grade && (
        <>
          <List grade={grade} />
          <Button onPress={buttonPut} title="Отправить" color="#ffba00" />
        </>
      )}
    </View>
  );
};

export default OrderEvaluation;
