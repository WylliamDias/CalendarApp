import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, defaultValue?: T): readonly [ T, Dispatch<SetStateAction<T>> ] {
  const [ localItems, setLocalItems ] = useState<T>(() => {
    const hasItems = localStorage.getItem(`calendar.app.${key}`);

    try {
      if (!hasItems) return defaultValue;
      const storedItems = JSON.parse(hasItems);
      return storedItems;
    } catch (error) {
      return defaultValue;
    }

  });

  useEffect(() => {

    if (localItems) {
      try {
        localStorage.setItem(`calendar.app.${key}`, JSON.stringify(localItems));
      } catch (error) {
        throw error;
      }
    }

  }, [ localItems, key ]);

  return [ localItems, setLocalItems ] as const;
}
