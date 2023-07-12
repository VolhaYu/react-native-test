import React from 'react';
import { Text, View, Image } from 'react-native';
import { Data } from '../api/api';

const Card = ({avatar, order, info, id}: Data) =>{
  return (
    <View key={id} 
      style={{flexDirection: 'row'}}
    >
      <Image
        style={{width: 150,height: 150, marginRight: 10}}
        source={{
          uri: `${avatar}`,
        }}/>
      <View style={{flexDirection: 'column'}}>
        <Text>{order}</Text>
        <Text>{info}</Text>
      </View>
    </View>
  )
};

export default Card;
