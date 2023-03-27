import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import coin from "../assets/coin.png"
import { goToBuilding } from "../router/coordinator";


const Container = styled.main`
  height: 380px;
  width: 320px;
  border-radius: 24px;
  position:relative;
  border: none;
  background: #FFF;
  box-shadow: 0px 4px 8px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  @media screen and (max-width: 428px){
      height: 300px;
      /* justify-content: space-between; */
    }

  >div{
    position:absolute;
    height:75%;
    width: 100%;
    overflow-y: hidden;
    @media screen and (max-width: 428px){
      height: 65%;
    }
    img{
      object-fit: cover;
      width: 100%;
    }
  }

  >p{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 124.5%;
    color: #5E6282;
    margin: 0 auto;
    position:absolute;
    bottom: 55px;
  }

  span{
    width: 100%;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid red; */

    position:absolute;
    bottom: 20px;
    >p{
      display: flex;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #5E6282;

   }
  }
`

export const BoxCourse = (props) => {
  const navigate = useNavigate()

  return(
    <Container onClick={() => goToBuilding(navigate)}>
      <div>
        <img src={props.img}/>
      </div>
      <p>{props.text}</p>
      <span>
        <p><img src={coin}/> &nbsp; Gratuito</p>
        <p>30h</p>
      </span>
    </Container>
  )
}

