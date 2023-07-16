import React, { useEffect, useState } from 'react';
import { Checkbox } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../store/store';
import { setFeedback } from '../store/reducers/listSlice';

interface CheckboxProps {
  grade: number | undefined;
  label: string;
}

const CheckBox = ({ grade, label }: CheckboxProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const feedback = useAppSelector((state) => state.list.feedback);

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(false);
  }, [grade]);

  const handleCauses = () => {
    setChecked(!checked);
    if (!checked) {
      dispatch(setFeedback(label));
    }
    console.log(feedback);
  };

  return (
    <Checkbox.Item
      status={checked ? 'checked' : 'unchecked'}
      label={label}
      onPress={handleCauses}
    />
  );
};

export default CheckBox;
