import React, {useState} from "react";
import jacket from "../../img/jacket.jpg"
import tankTop from "../../img/tank-top.jpg"
import classicJacket from "../../img/classic-jacket.jpg"
import classicTankTop from "../../img/classic-tank-top.jpg"
import noir from "../../img/noir.jpg"
import military from "../../img/military.jpg"
import elzaWalker from "../../img/elza-walker.jpg"
import styled from "styled-components";

const CostumeChanger = () => {
  const [costume, changeCostume] = useState(jacket);
  return (
    <MainContainer>
      <section>
        <ul>
          <li onMouseOver={()=> changeCostume(jacket)}>Jacket</li>
          <li onMouseOver={()=> changeCostume(tankTop)}>Tank Top</li>
          <li onMouseOver={()=> changeCostume(classicJacket)}>Classic Jacket</li>
          <li onMouseOver={()=> changeCostume(classicTankTop)}>Classic Tank Top</li>
          <li onMouseOver={()=> changeCostume(noir)}>Noir</li>
          <li onMouseOver={()=> changeCostume(military)}>Military</li>
          <li onMouseOver={()=> changeCostume(elzaWalker)}>Elza Walker</li>
        </ul>
        <img src={costume} alt="Costume"/>
      </section>
    </MainContainer>
  );
};

export default CostumeChanger;

//MainContainer
const MainContainer = styled.div`
  section {
    display: flex;
    justify-content: space-between;
  }

  ul {
    width: 50%;
    padding: 0;
  }

  li {
    list-style: none;
    font-size: 1.5rem;
    margin: 0 0 20px 0;
    color: #757575;
    cursor: pointer;
    padding: 5px 0 5px 20px;
    border: 1px solid #000;
  }

  li:hover {
    color: #bfbfbf;
    background: #191919;
    border: 1px solid #585858;
  }

  @media(max-width:850px) {
    section {
      flex-direction: column;
    }
    ul {
      width: 100%;
      display: flex;
      flex-direction: space-between;
    }
    li {
      font-size: .85rem;
    }
    img {
      height: 540px;
    }
  }
`;
