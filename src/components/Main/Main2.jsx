import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useAxios from "../../hooks/useAxios";

const Main2 = () => {

    const [listItems, setlistItems] = useState([]);
    const {data } = useAxios('https://acnhapi.com/v1a/fish/');

    
  return (
    <>
      <button>Left</button>
      <Link to="/Fish" className="desplegable--left" >
        <img src="https://acnhapi.com/v1/icons/fish/1" alt="Fish" />
      </Link>

      <Link to="/Sea" className="desplegable--left" >
        <img src="https://acnhapi.com/v1/icons/fish/1" alt="Sea" />
      </Link>

      <Link to="/Bugs" className="desplegable--left" >
        <img src="https://acnhapi.com/v1/icons/fish/1" alt="Bugs" />
      </Link>

      <Link to="/Fossils" className="desplegable--left" >
        <img src="https://acnhapi.com/v1/icons/fish/1" alt="Fossils" />
      </Link>
      <img
        src="https://dodo.ac/np/images/c/c7/Timmy_and_Tommy_NH_Line_Artwork.svg"
        alt="Timmy tommy Animal Crossing New Horizonts"
      />
      <button>Right</button>
    </>
  );
};

const MainDecored = styled.main``;
export default Main2;
