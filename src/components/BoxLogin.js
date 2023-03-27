import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goToLogin, goToSignup } from "../router/coordinator";

const Container = styled.main`
  height: 320px;
  width: 280px;
  border: none;
  background: #FFF;
  box-shadow: 0px 4px 8px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  @media screen and (max-width: 428px){
    height: 220px;
    padding: 20px;
    /* max-width: 150px; */
  }

  img{
    width: 84px;
    @media screen and (max-width: 428px){
      width: 50px;
    }
  }

  p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #423D51;
    text-align: center;
    @media screen and (max-width: 428px){
      font-size: 12px;
    }
  }

  button{
    border: 2px solid rgba(47, 145, 224, 1);
    color: rgba(47, 145, 224, 1);
    border-radius: 8px;
    background: #FFF;
    height: 56px;
    width: 184px;
    font-size: 16px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    cursor: pointer;
    z-index: 2;

    @media screen and (max-width: 428px){
      height: 36px;
      width: 88px;
      font-size: 12px;
    }
  }

  .text3{
    font-weight: 500;
  }
`

export const BoxLogin = (props) => {
  const navigate = useNavigate()

  return(
    <Container>
      <img src={props.img}/>
      <p>{props.text}</p>
      <p>{props.text2}</p>
      {props.login ? <button onClick={() => goToLogin(navigate)}>{props.button}</button> : null}
      {props.signup ? <button onClick={() => goToSignup(navigate)}>{props.button}</button> : null}
      {props.propostas ? <p className="text3">{props.text3}</p> : null}
    </Container>
  )
}

