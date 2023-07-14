import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
  grade: number | undefined;
  size: number;
  gradeHandler?: (item: number) => void;
};

const Stars = ({ gradeHandler, grade, size }: Props) => {
  const numberStars = [1, 2, 3, 4, 5];

  const colorHendler = (item: number) => {
    let color;
    if (grade) {
      item <= grade ? (color = '#ffba00') : (color = '#bababa');
    } else {
      color = '#bababa';
    }
    return color;
  };
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {numberStars.map((item, i) => (
        <TouchableOpacity key={i} onPress={() => gradeHandler!(item)}>
          <Ionicons name="star" size={size} color={colorHendler(item)} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Stars;
