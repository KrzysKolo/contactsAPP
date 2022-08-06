import { useState } from "react";

function useStateStorage(key: string, defaultValue: string) {

  const [state, setState] = useState<string>(() => {
    const storageValue = window.localStorage.getItem(key);
    return storageValue ? JSON.parse(storageValue) : defaultValue;
  });

  const setValue = (val: string) => {
    setState(val);
    window.localStorage.setItem(key, JSON.stringify(val));
  };
  return [state, setValue]
};

export default useStateStorage;