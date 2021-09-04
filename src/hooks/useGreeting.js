import { useRef } from "react";
import { useEffect } from "react";

export const useGreeting = (message, name) => {
  const refContainer = useRef(name);
  const componentName = refContainer.current.name;

  useEffect(() => {
    console.log(`${message} ${componentName}`);
  }, []);
};
