import React, { useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../store/store';
import { getList } from '../store/reducers/listSlice';
import CheckBox from './checkBox';
import { Criteria } from '../api/api';

export type listProps = {
  grade: number | undefined;
};

const List = ({ grade }: listProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const list = useAppSelector((state) => state.list.list);
  const isLoading = useAppSelector((state) => state.list.isLoading);
  const error = useAppSelector((state) => state.list.error);

  useEffect(() => {
    dispatch(getList());
  }, []);

  const renderItem = ({ item }: { item: Criteria }) => (
    <View>
      <CheckBox grade={grade} label={grade! < 4 ? `${item.noLiked.text}` : `${item.liked.text}`} />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <>
        {isLoading && <Text>Loading...</Text>}
        {error && <Text>{error}</Text>}
      </>
      <FlatList
        style={{ flex: 1 }}
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default List;
