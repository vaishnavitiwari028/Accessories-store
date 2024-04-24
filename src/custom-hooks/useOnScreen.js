import { useEffect, useRef, useState } from "react";

const useOnScreen = (options = {}, once = true) => {
  const [visible, setVisible] = useState(null);
  const elRef = useRef();
  useEffect(() => {
    let intersectionObserver = new IntersectionObserver((entry) => {
      if (once) {
        if (entry[0].isIntersecting) {
          setVisible(true);
          intersectionObserver.unobserve(elRef.current);
        }
      } else setVisible(entry[0].isIntersecting);
    }, options);

    if (!!elRef.current) {
      intersectionObserver.observe(elRef.current);
    }
    return () => {
      if (elRef.current) {
        intersectionObserver.unobserve(elRef.current);
      }
    };
  }, [elRef.current, options]);

  return [visible, elRef];
};

export default useOnScreen;
