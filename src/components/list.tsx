import React, { useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../store/store';
import { getList } from '../store/reducers/listSlice';
import CheckBox from './checkBox';
import { Criteria } from '../api/api';

export type Props = {
  grade: number | undefined;
};

const List = ({ grade }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const list = useAppSelector((state) => state.list.list);

  useEffect(() => {
    dispatch(getList());
  }, []);

  const renderItem = ({ item }: { item: Criteria }) => (
    <View style={{ flexDirection: 'row' }}>
      <CheckBox />
      <Text>{grade! < 4 ? `${item.noLiked.text}` : `${item.liked.text}`}</Text>
    </View>
  );

  return (
    <View>
      <FlatList data={list} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default List;
