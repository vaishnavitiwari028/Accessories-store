import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Carousal from "../../components/Carousal/Carousal";
import Directory from "../../components/Directory/Directory";
import RevealCard from "../../components/RevealCard/RevealCard";
import "./Homepage.scss";
import images from "./images";

const HomePage = () => {
  const homePageRef = useRef();
  const { homePart } = useParams();
  useEffect(() => {
    if (homePart === "products") {
      homePageRef.current.children[0].scrollIntoView();
    } else if (homePart === "vision") {
      homePageRef.current.children[1].scrollIntoView();
    }
  }, []);

  return (
    <div className="homepage reveal">
      <Carousal allImages={images} autoplay={5} active={0} />
      <div className="global-container" ref={homePageRef}>
        <Directory />
        <div className="stories_container">
          <div className="story story1">
            <RevealCard options={{ threshold: 0.2 }}>
              <img
                src="https://res.cloudinary.com/vaishnavitiwari028/image/upload/v1613214143/images/level_home_launch_3_udcqzu.jpg"
                alt=""
                loading="lazy"
              />
              <h1> Superior sound that's made to move </h1>
              <p>
                Enjoy an immersive listening experience throughout where you go,
                what you listen to, and the discoveries you make along the way.
                Simple, seamless, stunning.
              </p>
            </RevealCard>
          </div>
          <div className="story story2">
            <RevealCard options={{ threshold: 0.4 }}>
              <img
                src="https://res.cloudinary.com/vaishnavitiwari028/image/upload/v1613217049/images/c240_201202_BEO_HSS_DAY293490_4_v03_small_2_rdvogu.jpg"
                alt=""
                loading="lazy"
              />
              <h1> Speakers, simply connected </h1>
              <p>
                Five powerful drivers meets adaptive sound technology. Move with
                your music in new ways at home.
              </p>
            </RevealCard>
          </div>
          <div className="story story3">
            <RevealCard options={{ threshold: 0.2 }}>
              <img
                src="https://res.cloudinary.com/vaishnavitiwari028/image/upload/v1613214470/images/BL20s_bqdrx5.jpg"
                alt=""
                loading="lazy"
              />
              <h1>Music Matters</h1>
              <p>
                We believe in simplicity. Headphones should enable a great
                listening experience — no matter who is listening, or what is
                being listened to.
              </p>
            </RevealCard>
          </div>
          <div className="story story4">
            <RevealCard options={{ threshold: 0.3 }}>
              <img
                src="https://res.cloudinary.com/vaishnavitiwari028/image/upload/v1607403889/images/home-speaker-system-balance-hero_fvkeeh.jpg"
                alt=""
                loading="lazy"
              />
              <h1>Create your own Sound environment </h1>
              <p>
                Your possibilities are endless, and the experience is guaranteed
                to bring a smile on your face.
              </p>
            </RevealCard>
          </div>
          <div className="story story5">
            <RevealCard options={{ threshold: 0.2 }}>
              <img
                src="https://res.cloudinary.com/vaishnavitiwari028/image/upload/v1613214424/images/Natale_portrait_ksxplm.jpg"
                alt=""
                loading="lazy"
              />
              <div>
                <h1>Crafting moments</h1>
                <p>
                  Made with every listener in mind. Purpose-built, boldly simple
                  headphones.
                </p>
              </div>
            </RevealCard>
          </div>
          <div className="story story6">
            <RevealCard options={{ threshold: 0.2 }}>
              <img
                src="https://res.cloudinary.com/vaishnavitiwari028/image/upload/v1613214660/images/BL90_square_new_olzgaw.jpg"
                alt=""
                loading="lazy"
              />
              <h1> The Sound of Home</h1>
              <p>
                Five powerful drivers meets adaptive sound technology. Move with
                your music in new ways at home.
              </p>
            </RevealCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
