import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Criteria, criteriaUrl } from '../api/api';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../store/store';
import { getList } from '../store/reducers/listSlice';

type Props = {
  grade: number | undefined;
};

const List = ({ grade }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const list = useAppSelector(state => state.list.list);

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  // const [result, setResult] = useState<Criteria>();
  // const [isSelected, setSelection] = useState(false);

  useEffect(() => {
    dispatch(getList());
  }, []);
  return (
    <View>
      <ul>
        {list.map((item) => (
          grade! < 4 ?
            // <View>
            //   <CheckBox
            //     key={item.id}
            //     disabled={false}
            //     value={toggleCheckBox}
            //     onValueChange={(newValue) => setToggleCheckBox(newValue)} 
            //   />
            //   <Text>{item.noLiked.text}</Text>
            // </View>
          <li key={item.id}>{item.noLiked.text}</li>
          :
          <li key={item.id}>{item.liked.text}</li>
        ))}
      </ul>
    </View>
  )
};

export default List;
