import React from "react";

const useLocalStorage = (key) => {
  const [value, setValue] = React.useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  });
  React.useEffect(() => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.removeItem(key);
    }
  }, [key, value]);

  const setItem = (newValue) => {
    setValue(newValue);
  };

  const removeItem = () => {
    setValue(null);
  };

  return [value, { setItem, removeItem }];
};

export default useLocalStorage;
