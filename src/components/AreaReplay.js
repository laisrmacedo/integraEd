import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goToBuilding } from "../router/coordinator";

const Container = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  @media screen and (max-width: 428px){
      justify-content: center;
      gap: 36px;
      padding: 0;
    }

    >p{
      color: #5E6282;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      text-align: center;
    }

    >h2{
      color: #423D51;
      font-family: 'Volkhov', serif;
      font-size: 50px;
      @media screen and (max-width: 428px){
        font-size: 32px;
        text-align: center;
      }
    }
  

  div{
    height: 70%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 428px){
      gap: 20px;
    }
  }

  >button{
    background: #201F30;
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    height: 56px;
    width: ${(props) => props.width}px;
    font-size: 16px;
    color: #FFF;
    z-index: 2;
    cursor: pointer;
  }
`
export const AreaReplay = (props) => {
  const navigate = useNavigate()

  return(
    <Container width={props.widthBtn}>
      <p>{props.text1}</p>
      <h2>{props.text2}</h2>
      <div>
        {props.children}
      </div>
      <button onClick={() => goToBuilding(navigate)}>{props.button}</button>
    </Container>
  )
}