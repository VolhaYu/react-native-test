import React from 'react';
import { Text, View, Image } from 'react-native';
import { Data } from '../api/api';
import Stars from './stars';

const Card = ({ avatar, order, info, id, grade }: Data) => {
  return (
    <View key={id} style={{ flexDirection: 'row', width: 270 }}>
      <Image
        style={{ width: 150, height: 150, marginRight: 10 }}
        source={{
          uri: `${avatar}`,
        }}
      />
      <View style={{ flexDirection: 'column' }}>
        <Text>{order}</Text>
        <Text>{info}</Text>
        {grade && <Stars grade={grade} size={20} />}
      </View>
    </View>
  );
};

export default Card;
