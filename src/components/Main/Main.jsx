import React, { useState, useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ACContext } from "../../context/context";
import "./Main.css";
import styled, { keyframes } from "styled-components";
import gStyles from "../../styles/gStyles";

let used = 0;
let isUsedLeft = false;
let isUsedRight = false;

const Main = () => {
  const [dialogue, setDialogue] = useState("");
  const [isBackActivate, setIsBackActivate] = useState("");
  const [isTendo, setIsTendo] = useState("");
  const [isNamerActivate, setIsNamerActivate] = useState("");
  const [isAnimate, setIsAnimate] = useState("invisible");

  // const [ isUsedLeft, setIsUsedLeft ] = useState(false);
  // console.log( mainURL.split('/') );

  // Left
  const fishButton = useRef(null);
  const seaButton = useRef(null);
  const bugsButton = useRef(null);
  const fossilsButton = useRef(null);

  // Right
  const villagersButton = useRef(null);
  const itemsButton = useRef(null);
  const songsButton = useRef(null);
  const artButton = useRef(null);

  const visiblizer = () => {
    setIsBackActivate("back-activate");
    setIsNamerActivate("namer-activate");
  };

  const invisiblizer = () => {
    setIsBackActivate("");
    setIsNamerActivate("");
    setIsAnimate("invisible");
    setDialogue("");
    setIsTendo("");
  };

  const leftIsUsed = () => {

    if (isUsedLeft) {
      setDialogue("Click me again to close the menu");
      visiblizer();
      setIsTendo("Tendo");
    }
  };

  const rightIsUsed = () => {
    if (isUsedRight) {
      setDialogue("Click me again to close the menu");
      visiblizer();
      setIsTendo("Nendo");
    }
  };

  const write = (text, bool) => {
    let element = "";
    let index = 0;
    used = false;

    const nooky = setInterval(() => {
      if (bool === true && used === false && isUsedLeft === false) {
        isUsedLeft && leftIsUsed();
        isUsedRight && rightIsUsed();

        visiblizer();

        text.split(" ").includes("consumables")
          ? setIsTendo("Tendo")
          : setIsTendo("Nendo");

        element += text.split("")[index];
        index++;
        setDialogue(element);

        element.length === text.length &&
          clearInterval(nooky) & setIsAnimate("animate");
      } else {
        clearInterval(nooky);
        used = true;

        // console.log( '4: ' + isUsedLeft );

        isUsedLeft ? leftIsUsed() : invisiblizer();
        isUsedRight ? rightIsUsed() : invisiblizer();
      }
    }, 40);
  };

  const deployButtonsLeft = () => {
    // console.log('1: ' + isUsedLeft);

    if (isUsedLeft) {
      // -> sin pulsar
      isUsedLeft = false;
      // setIsUsedLeft(false);
      write("", false);

      fishButton.current.className = "desplegable--left";
      seaButton.current.className = "desplegable--left";
      bugsButton.current.className = "desplegable--left";
      fossilsButton.current.className = "desplegable--left";
    } else {
      // -> Pulsado
      isUsedLeft = true;
      // setIsUsedLeft(true);
      // console.log('2: ' + isUsedLeft);
      write("", false);
      leftIsUsed();

      fishButton.current.className = "fish--button";
      seaButton.current.className = "sea--button";
      bugsButton.current.className = "bugs--button";
      fossilsButton.current.className = "fossils--button";
    }
    // console.log('3: ' + isUsedLeft);
  };

  const deployButtonsRight = () => {
    if (isUsedRight) {
      // -> sin pulsar
      isUsedRight = false;
      write("", false);

      villagersButton.current.className = "desplegable--right";
      itemsButton.current.className = "desplegable--right";
      songsButton.current.className = "desplegable--right";
      artButton.current.className = "desplegable--right";
    } else {
      // -> Pulsado
      isUsedRight = true;

      write("", false);
      rightIsUsed();

      villagersButton.current.className = "villagers--button";
      itemsButton.current.className = "items--button";
      songsButton.current.className = "songs--button";
      artButton.current.className = "art--button";
    }
  };

  //* Fin funcion desplegar botones right (onClick)

  return (
    <MainDecored className="main">
      {/* <button
        className="button--left"
        onClick={deployButtonsLeft}
        onMouseMove={leftIsUsed}
        onMouseOver={() =>
          write("Click me if you need more info about consumables", true)
        }
        onMouseOut={() => write("", false)}
      ></button>

      <Link to="/Fish" ref={fishButton} className="desplegable--left" />

      <Link to="/Sea" ref={seaButton} className="desplegable--left" />

      <Link to="/Bugs" ref={bugsButton} className="desplegable--left" />

      <Link to="/Fossils" ref={fossilsButton} className="desplegable--left" /> */}

      <img
        src="https://dodo.ac/np/images/c/c7/Timmy_and_Tommy_NH_Line_Artwork.svg"
        alt="Timmy tommy Animal Crossing New Horizonts"
      />
{/* 
      <button
        className="button--right"
        onClick={deployButtonsRight}
        onMouseMove={rightIsUsed}
        onMouseOver={() =>
          write("Click me if you need more info about living beings.", true)
        }
        onMouseOut={() => write("", false)}
      />

      <Link
        to="/Villagers"
        ref={villagersButton}
        className="desplegable--right"
      />

      <Link to="/Items" ref={itemsButton} className="desplegable--right" />

      <Link to="/Songs" ref={songsButton} className="desplegable--right" />

      <Link to="/Art" ref={artButton} className="desplegable--right" />

      <div className={"dialogue " + isBackActivate}>
        <div className={"namer " + isNamerActivate}>{isTendo}</div>
        <p>{dialogue}</p>
        <div className={"back " + isBackActivate}></div>

        <img className={isAnimate} src="../../../public/sort-down.png" alt="" />
      </div> */}
    </MainDecored>
  );
};


const finisText = keyframes`
  0%, 100% {
    transform: translate(200px, 17px);
  }
  50% {
    transform: translate(200px, 19px);
  }
`;


const MainDecored = styled.article`
  .main {
    height: ${gStyles.sizes.mainHeight};
    display: flex;
    justify-content: center;
    z-index: 0;
  }

  .main .dialogue {
    position: absolute;
    bottom: 20vh;
    height: 105px;
    width: 450px;
    border-radius: 13% 18% 20% 15% / 64% 71% 89% 94%;
  }

  .main .dialogue .back {
    position: absolute;

    height: 75px;
    width: 435px;
    border-radius: 15% 18% 23% 12% / 100% 100% 78% 62%;

    left: 5px;
    top: 3.3rem;
    z-index: -1;
  }

  .main .dialogue p {
    font-family: "Source Sans Pro";
    font-weight: bold;
    font-size: 1.5rem;
    color: ${gStyles.colours.text};
    margin: -0.5rem 1.5rem 1rem 1.5rem;
  }

  .main .dialogue .namer {
    font-family: "Source Sans Pro";
    position: relative;
    height: 1.7rem;
    width: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    transform: rotate(-10deg) translate(1rem, -1rem);
  }

  .invisible {
    visibility: hidden;
  }

  .main .dialogue .animate {
    height: 10px;
    position: absolute;
    transform: translate(200px, 17px);
    bottom: 0px;
    visibility: visible;
    transition: all 0s ease-in-out;
    animation: ${finisText} infinite 1s ease-in-out;
  }

  .back-activate {
    background-color: ${gStyles.colours.dialogues};
  }

  .namer-activate {
    background-color: ${gStyles.colours.normal};
  }

  .main img {
    height: 60%;
    margin-top: 2vh;
    transform: translateX(-4vw);
    z-index: 1;
  }

  /* BOTONES */

  .button--left {
    border: none;
    position: absolute;
    top: 23vh;
    right: 52.6%;
    border-radius: 46% 50% 42% 27% / 58% 60% 40% 38%;
    height: 160px;
    width: 180px;
    background-color: transparent;
    cursor: pointer;
    z-index: 100;
    box-shadow: none;
    transition: box-shadow 0.7s;
  }

  .button--left:hover {
    box-shadow: inset 0 0 2rem #ecae1e88;
  }

  .button--right {
    border: none;
    position: absolute;
    top: 23vh;
    left: 50.7%;
    border-radius: 48% 50% 27% 60% / 60% 60% 39% 38%;
    height: 160px;
    width: 183px;
    background-color: transparent;
    box-shadow: none;
    cursor: pointer;
    z-index: 100;
    transition: box-shadow 0.7s;
  }

  .button--right:hover {
    box-shadow: inset 0 0 2rem #ecae1e88;
  }

  /* BOTONES - Menú desplegable izquierda */

  .desplegable--left {
    position: absolute;
    height: 50px;
    width: 50px;
    translate: 0 600%;
    border-radius: 50%;
    visibility: hidden;
    transition: all 0.8s ease-out, visibility 0.3s ease-in;
  }

  .fish--button,
  .sea--button,
  .bugs--button,
  .fossils--button,
  .villagers--button,
  .items--button,
  .songs--button,
  .art--button {
    position: absolute;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    visibility: visible;
    transition: visibility 0.8s;
    background-color: #fff6;
    z-index: 100;

    transition: background-color 0.2s;
  }

  .fish--button {
    content: url(https://acnhapi.com/v1/icons/fish/1);

    translate: -460% 70%;
    transition: all 0.8s ease-out, visibility 0.8s 0.3s;
  }

  .sea--button {
    content: url(https://acnhapi.com/v1/icons/sea/1);
    translate: -575% 120%;
    transition: all 0.8s ease-out, visibility 0.8s 0.3s;
  }
  .bugs--button {
    content: url(https://acnhapi.com/v1/icons/bugs/1);
    translate: -660% 210%;
    transition: all 0.8s ease-out, visibility 0.8s 0.3s;
  }
  .fossils--button {
    content: url(https://dodo.ac/np/images/thumb/b/b0/Fossil_NH_Icon.png/120px-Fossil_NH_Icon.png);
    translate: -715% 310%;
    transition: all 0.8s ease-out, visibility 0.8s 0.3s;
  }

  /* BOTONES - Menú desplegable derecha */

  .desplegable--right {
    position: absolute;
    height: 50px;
    width: 50px;
    translate: 0 600%;
    border-radius: 50%;
    visibility: hidden;
    transition: all 0.8s ease-out, visibility 0.3s ease-in;
  }

  /*! SOLO QUEDA CAMBIAR ESTO */
  .villagers--button {
    content: url(https://acnhapi.com/v1/icons/villagers/1);
    translate: 440% 470%;
    transition: all 0.8s ease-out, visibility 0.8s 0.3s;
  }

  .items--button {
    content: url(https://dodo.ac/np/images/thumb/8/82/Furniture_NH_Inv_Icon.png/120px-Furniture_NH_Inv_Icon.png);
    translate: 555% 420%;
    transition: all 0.8s ease-out, visibility 0.8s 0.3s;
  }

  .songs--button {
    content: url(https://acnhapi.com/v1/images/songs/1);
    translate: 640% 330%;
    transition: all 0.8s ease-out, visibility 0.8s 0.3s;
  }

  .art--button {
    content: url(https://acnhapi.com/v1/images/art/academic_painting);
    translate: 695% 230%;
    transition: all 0.8s ease-out, visibility 0.8s 0.3s;
  }

  :is(
      .fish--button,
      .sea--button,
      .bugs--button,
      .fossils--button,
      .villagers--button,
      .items--button,
      .songs--button,
      .art--button
    ):hover {
    background-color: ${gStyles.colours.normal};
  }
`;

export default Main;
