import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../custom-hooks/useOnScreen";
import "./Carousal.scss";
import Slider from "./Slider";

const getPrev = (current, total) => {
  return (current - 1 + total) % total;
};
const getNext = (current, total) => {
  return (current + 1) % total;
};

const Carousal = ({
  allImages,
  active = 0,
  autoplay = false,
  slidingSpeed = 1,
}) => {
  const [activeIndex, setActiveIndex] = useState(active);
  const [transform, setTransform] = useState({
    translateX: -100,
    transition: 0,
  });

  const [visible, elRef] = useOnScreen({}, false);
  const btnLeft = useRef();
  const btnRight = useRef();

  const switchBtns = (boolean) => {
    if (btnLeft.current) {
      btnLeft.current.disabled = boolean;
    }
    if (btnRight.current) {
      btnRight.current.disabled = boolean;
    }
  };
  const neededImages = () => {
    let prev = getPrev(activeIndex, allImages.length);
    let next = getNext(activeIndex, allImages.length);
    return [allImages[prev], allImages[activeIndex], allImages[next]];
  };

  const handleLeft = (e) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    if (btnLeft.current.disabled) return;
    setTransform({ translateX: 0, transition: slidingSpeed });
    switchBtns(true);
    setTimeout(() => {
      setActiveIndex(getPrev(activeIndex, allImages.length));
    }, slidingSpeed * 1000);
  };

  const handleRight = (e) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    if (btnRight.current.disabled) return;
    setTransform({ translateX: -200, transition: slidingSpeed });
    switchBtns(true);
    setTimeout(() => {
      setActiveIndex(getNext(activeIndex, allImages.length));
    }, slidingSpeed * 1000);
  };

  useEffect(() => {
    btnLeft.current?.style.setProperty("--sliding-speed", slidingSpeed);
  }, []);

  useEffect(() => {
    setTransform({ translateX: -100, transition: 0 });
    switchBtns(false);
  }, [activeIndex]);

  useEffect(() => {
    let timer;
    if (autoplay) {
      timer = setInterval(() => {
        if (visible) requestAnimationFrame(handleRight);
      }, autoplay * 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [activeIndex, visible]);

  return (
    <div className="carousal_wrapper" ref={elRef}>
      <div
        className="carousal_container"
        style={{
          transform: `translateX(${transform.translateX}vw)`,
          transition: `${transform.transition * 1000}ms ease all`,
        }}
      >
        {neededImages().map((item, index) => (
          <Slider {...item} key={index + "slider"} />
        ))}
      </div>
      <>
        <button
          className="controller controller-left"
          ref={btnLeft}
          onClick={handleLeft}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="controller controller-right"
          ref={btnRight}
          onClick={handleRight}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </>
    </div>
  );
};

export default Carousal;
