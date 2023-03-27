import styled from "styled-components";
import imgSignupPage from "../assets/img-signup-page.png"
import logo from "../assets/logo.png"
import buttonSignup from "../assets/button-signup.png"
import { goToBuilding, goToHome, goToSignup } from "../router/coordinator";
import { useNavigate } from "react-router-dom";


const Container = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: #201F30;
  display: flex;

  .box{
    height: 100%;
    width: 80%;
    background: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 428px){
      width: 60%;
    }

    >span{
      height: 80%;
      max-height: 740px;
      width: 60%;
      max-width: 600px;
      box-shadow: 0px 19px 40px rgba(0, 0, 0, 0.05);
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      padding: 0 40px;
      gap: 16px;

      >div{
        /* border: 1px solid red; */
        position: relative;
        height: 25%;
      }

      >h2{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 53px;
      }

      >img{
        width: 150px;
        margin: 40px auto 0 auto;
        cursor: pointer;
      }

      >p{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
    }

    h4{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      margin: 30px 0;
      text-align: center;
      z-index: 2;
      span{
        color: rgba(244, 116, 88, 1);
        cursor: pointer;
      }
    }

      @media screen and (max-width: 428px){
        background-color: #FFF;
        width: 80%;
        height: 70%;
        position: absolute;
        top: 12%;
        bottom: 12%;
        left: 10%;
        right: 10%;
        gap: 8px;

        >h2{
        font-size: 28px;

        }
      }
    }

    input{
      height: 45px;
      background: #FFF6F4;
      border: none;
      border-radius: 4px;
    }
  }
  
  .color{
    height: 100%;
    width: 20%;
    background: #FFA8A8;
    @media screen and (max-width: 428px){
      width: 40%;
    }
  }
  
  .img{
    display: flex;
    align-items: center;
    position: absolute;
    top: 12%;
    bottom: 12%;
    right: 10%;
    @media screen and (max-width: 428px){
      overflow-y: hidden;
      width: 100%;
      top: 70%;
      bottom: 0;
      left: auto;
      right: auto;
    }
    img{
      object-fit: cover;
      width: 100%;

      @media screen and (max-width: 428px){
        width: 70%;
        margin: 0 auto;
      }
    }
  }
`


const Logo = styled.span`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  cursor: pointer;

  img{
    object-fit: cover;
    height: 25%;
    min-height: 70px;
  }

  p{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    color: #F47458;
    @media screen and (max-width: 428px){
      font-size: 24px;
    }
  }
`

export const Login = () => {
  const navigate = useNavigate()
  
  return (
    <Container>
      <div className="box">
        <span>
          <div>
            <Logo onClick={() => goToHome(navigate)}>
              <img src={logo} />
              <p>IntegraEd</p>
            </Logo>
          </div>
          <h2>Faça Login</h2>
          <p>Qual o seu email?</p>
          <input></input>
          <p>Senha</p>
          <input></input>
          <img src={buttonSignup} onClick={() => goToBuilding(navigate)}/>
          <h4>Ainda não tem uma conta? <span onClick={() => goToSignup(navigate)}>Cadastre-se</span></h4>
        </span>
      </div>
      <div className="color"></div>
      <div className="img">
        <img src={imgSignupPage} />
      </div>
    </Container>
  )
}