import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';

const CheckBox = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <Checkbox
      disabled={false}
      value={toggleCheckBox}
      onValueChange={(newValue) => setToggleCheckBox(newValue)}
    />
  );
};

export default CheckBox;
