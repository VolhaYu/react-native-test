import React, { Component, useState } from 'react';
import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const OrderEvaluation = () => {
  const [grade, setGrade] = useState();

  return (
    <View style={{alignItems: 'center', padding: 15}}>
      <Text> OrderEvaluation </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Ionicons name="star" size={50} color="grey" />
        <Ionicons name="star" size={50} color="grey" />
        <Ionicons name="star" size={50} color="grey" />
        <Ionicons name="star" size={50} color="grey" />
        <Ionicons name="star" size={50} color="grey" />
      </View>
    </View>
  )
}

export default OrderEvaluation;
