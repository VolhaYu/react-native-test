import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Criteria, criteriaUrl } from '../api/api';

const List = () => {
  const [result, setResult] = useState<Criteria>();
  const [isSelected, setSelection] = useState(false);

  useEffect(() => {
    fetch(`${criteriaUrl}`)
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
  }, [criteriaUrl, result]);

  return (

    <View>
      <Text> textInComponent </Text>
    </View>
  )
};

export default List;
