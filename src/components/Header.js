import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png"
import { goToBuilding, goToSignup } from "../router/coordinator";
import { HeaderHeight, MaxWidth } from "../utils/constants"

const Container = styled.header`
  width: 100%;
  max-width: ${MaxWidth}px;
  height: ${HeaderHeight}px;
  display: flex;
  justify-content: center;
  z-index: 1;
  
  div{
    display:flex;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 428px){
      width: 90%;
    }
  }

  span{
    display: flex;
    align-items: center;
    height: 45%;
  }

  .logo{
    width: 50%;
    position: relative;
    @media screen and (max-width: 428px){
      width: 90%;
    }

    >div{
      height:100%;
      width: 30%;
      position: absolute;
    }

    img{
      object-fit: cover;
      height: 100%;
    }
    
    p{
      font-family: 'Archivo', sans-serif;
      color: #FFF;
      font-size: 24px;
      margin-left: 110px;
    }
  }

  .titles{
    width: 50%;
    display: flex;
    justify-content: space-between;
    p{
      font-family: 'Inter', sans-serif;
      color: #FFF;
      font-size: 20px;
      cursor: pointer;
    }
    @media screen and (max-width: 428px){
      display: none;
    }
  }

  .divs{    
    display: none;
    flex-direction: column;
    justify-content: space-between;
    height: 24px;

    div{
      height: 3px;
      width: 32px;
      background-color: #FFF;
      border-radius: 3px;
    }

    @media screen and (max-width: 428px){
      display: flex;
    }
  }

`

export const Header = () => {
  const navigate = useNavigate()

  return(
    <Container>
      <div>
        <span className="logo">
          <div>
            <img src={logo}/>
          </div>
          <p>INTEGRAED</p>
        </span>
        <span className="titles">
          <p onClick={() => goToBuilding(navigate)}>Sobre nós</p>
          <p onClick={() => goToBuilding(navigate)}>Cursos</p>
          <p onClick={() => goToBuilding(navigate)}>Notícias</p>
          <p onClick={() => goToSignup(navigate)}>Cadastro</p>
        </span>
        <span className="divs">
          <div></div>
          <div></div>
          <div></div>
        </span>
      </div>
    </Container>
  )
}
