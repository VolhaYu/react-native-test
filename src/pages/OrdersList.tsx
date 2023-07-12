import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { Data, baseUrl } from '../api/api';
import Card from '../components/card';
export { baseUrl } from '../api/api';

const OrderList = () => {
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
    <SafeAreaView style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      <ScrollView>
            <FlatList 
              data={result}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {}}
                  style={{padding: 10, margin: 10, borderColor: 'black', borderRadius: 10, borderWidth: 1, width: 150, flexDirection: 'row'}}
                >
                  <Card 
                    avatar={item.avatar} order={item.order} info={item.info} key={item.id} id={item.id} />
                </TouchableOpacity>
              )}
              // horizontal
            >
            </FlatList>
      </ScrollView>
    </SafeAreaView>
  )
}

export default OrderList;
