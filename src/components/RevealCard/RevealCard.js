import React, { useEffect, useState } from "react";
import useOnSreen from "../../custom-hooks/useOnScreen";
import "./RevealCard.scss";

const RevealCard = ({ options = { rootMargin: "-80px" }, children }) => {
  const [active, setActive] = useState(false);
  const [visible, setRef] = useOnSreen(options);
  useEffect(() => {
    setActive(visible);
  }, [visible]);

  return (
    <div ref={setRef} className={`slide-in${active ? " active" : ""}`}>
      {children}
    </div>
  );
};

export default RevealCard;
