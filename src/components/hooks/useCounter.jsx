import { useState } from "react";

export const useCounter = (min, max) => {
  const [count, setCount] = useState(min);

  const addCount = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const subtstractCount = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };
  return { count, addCount, subtstractCount };
};
