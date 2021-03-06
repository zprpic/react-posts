import { useRef } from "react";
import { useEffect } from "react";

export const useGreetUserFromComponent = (message, name) => {
  const componentName = useRef(name).current.name;

  useEffect(() => {
    console.log(`${message} ${componentName}`);
  }, []);
};
