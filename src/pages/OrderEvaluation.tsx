import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Stars from '../components/stars';
import { AppDispatch, useAppSelector } from '../store/store';
import List from '../components/list';
import { RootStackParamList } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getOrders, putFeedback } from '../store/reducers/orderSlice';
import { useDispatch } from 'react-redux';
import { clearFeedback } from '../store/reducers/listSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'OrderEvaluation', 'MyStack'>;

const OrderEvaluation = ({ navigation, route }: Props) => {
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
    dispatch(
      putFeedback({
        id: orderId,
        body: {
          grade: grade,
          feedback: feedback,
        },
      })
    );
    dispatch(clearFeedback());
    dispatch(getOrders());
    navigation.navigate('OrderList');
  };

  const gradeHandle = (item: number) => {
    setGrade(item);
  };

  return (
    <View style={styles.view}>
      <Text style={styles.text}> {title} </Text>
      <Stars gradeHandler={gradeHandle} grade={grade} size={50} />
      {grade && (
        <View style={{ flex: 1 }}>
          <List grade={grade} />
          <Button onPress={buttonPut} title={'Отправить'} color="#ffba00" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    padding: 15,
    flex: 1,
  },
  text: {
    ontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default OrderEvaluation;
