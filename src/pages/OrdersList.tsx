import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { Data, baseUrl } from '../api/api';
import Card from '../components/card';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
export { baseUrl } from '../api/api';

type Props = NativeStackScreenProps<RootStackParamList, "OrderList", "MyStack">;

const OrderList = ({ navigation}: Props) => {
  const [result, setResult] = useState<[Data]>();
  useEffect(() => {
    fetch(`${baseUrl}`)
      .then((res) => {
        if (!res.ok) {
          throw Error('Сould not fetch the data for that resours');
        }
        return res.json();
      })
      .then((data) => {
        if (!result) {
          console.log(data);
          setResult(data);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [baseUrl, result]);

  return (
    <View>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          {result &&
            result.map((data) => (
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
