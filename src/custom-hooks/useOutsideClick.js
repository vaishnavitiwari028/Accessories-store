import { useEffect, useRef } from "react";

const useOutsideClick = (callBack) => {
  const callBackRef = useRef(callBack);
  const elRef = useRef();

  useEffect(() => {
    if (elRef.current) {
      const addEvent = (e) => {
        if (!elRef.current.contains(e.target)) callBackRef.current();
      };
      document.body.addEventListener("click", addEvent, true);
      return () => {
        document.body.removeEventListener("click", addEvent);
      };
    }
  }, []);
  return elRef;
};

export default useOutsideClick;
