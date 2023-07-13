import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
  gradeHandler: (item: number) => void;
  grade: number | undefined;
};

const Stars =({gradeHandler, grade }: Props) => {
  const numberStars = [1, 2, 3, 4, 5];

  const colorHendler = (item: number) => {
    let color;
    if (grade) {
      return item <= grade ? color = '#ffba00' : color = '#bababa';
    } else {
      return color = '#bababa';
    }
  }
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {numberStars.map((item, i) => (
        <TouchableOpacity key={i} onPress={() => gradeHandler(item)}>
          <Ionicons name="star" size={50} color={colorHendler(item)} />
        </TouchableOpacity>
      ))}
    </View>
  )
};

export default Stars;
