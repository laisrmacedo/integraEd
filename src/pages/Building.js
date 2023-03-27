import styled from "styled-components";
import building from "../assets/building.png"
import { useNavigate } from "react-router-dom";
import { goToHome } from "../router/coordinator";

const Container = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .color{
    height: 40%;
    width: 100%;
    background: linear-gradient(101.47deg, #FFBF46 -65.39%, rgba(224, 82, 99, 0.87) 99.77%);
    @media screen and (max-width: 428px){
      width: 100%;
    }
  }
  
  .img{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 25%;
    width: 80%;
    max-width: 1200px;

    @media screen and (max-width: 428px){
      width: 100%;
    }

    img{
      width: 50%;
      @media screen and (max-width: 428px){
        width: 100%;
      }
    }

    p{
      color: rgb(0, 0, 0, 0.2);
      font-family: 'Archivo', sans-serif;
      font-size: 70px;
      font-variant: all-small-caps;
      text-align: center;
      @media screen and (max-width: 428px){
        font-size: 50px;
      }
    }

    button{
      border: 2px solid #FFA8A8;
      border-radius: 8px;
      background: transparent;
      height: 56px;
      width: 140px;
      font-size: 16px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 900;
      color: #FFA8A8;
      margin-top: 40px;
      cursor: pointer;
    }
  }
`

export const Building = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <div className="color"></div>
      <div className="img">
        <img src={building} />
        <p>Página em construção</p>
        <button onClick={() => goToHome(navigate)}>Voltar</button>
      </div>
    </Container>
  )
}