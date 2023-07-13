import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import Stars from '../components/stars';
import { useAppSelector } from '../store/store';
import List from '../components/list';
import { Data, baseUrl, createGrade } from '../api/api';
import { RootStackParamList } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, "OrderEvaluation", "MyStack">;

const OrderEvaluation = ({ route }: Props) => {
  console.log(route.params.orderId);

  const [grade, setGrade] = useState<number>();
  
  let title = 'Поставьте оценку!'
  if (grade) {
    grade < 4 ? title = 'Что случилось?' : title = 'Что понравилось?';
  }

  const buttonPut = async () => {
    console.log('click');
    await createGrade({
      grade: grade,
    });
  }

  const gradeHandle = (item: number) => {
    setGrade(item);
  }

  return (
    <View style={{alignItems: 'center', padding: 15}}>
      <Text> {title} </Text>
      <Stars gradeHandler={gradeHandle} grade={grade}/>
      <List />
      <Button
        onPress={buttonPut}
        title="Отправить"
        color="#ffba00"
      />
    </View>
  )
}

export default OrderEvaluation;
