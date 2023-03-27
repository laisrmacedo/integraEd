import styled from "styled-components";
import { FooterHeight, MaxWidth } from "../utils/constants"

const Container = styled.footer`
  height: ${FooterHeight}px;
  width: 100%;
  max-width: ${MaxWidth}px;
  padding: 40px 102px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  @media screen and (max-width: 428px){
    height: 15%;
    padding: 0;
    justify-content: center;
    align-items: center;
    gap: 30px;

  }
  
  p, h3, h4, span{
    font-family: 'Poppins', sans-serif;
    color: black;
  }

  span{
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 428px){
      flex-direction: column;
      align-items: center;
      width: 90%;
      gap: 16px;
      text-align: center;
    }

    >p{
      margin: 0 auto;
      font-size: 14px;
      font-weight: 300;
      @media screen and (max-width: 428px){
        font-size: 12px;
      }
    }
  }

  .title{
    margin-right: 10%;
    width: 28%;
    @media screen and (max-width: 428px){
      width: 100%;
      margin-right: 0;
      text-align: center;
    }
  }

  div{
    display: flex;
    flex-direction: column;

    h3{
      font-size: 44px;
      font-weight: 500;
      @media screen and (max-width: 428px){
        font-size: 32px;
      }
    }

    h4{
      font-size: 21px;
      font-weight: 700;
      @media screen and (max-width: 428px){
        font-size: 18px;
      }
    }

    p{
      font-weight: 300;
    }
  }
`

export const Footer = () => {
  return (
    <Container>
      <span>
        <div className="title">
          <h3>IntegraEd</h3>
          <p>Informações e oportunidades perto de você.</p>
        </div>
        <div>
          <h4>Cadastro</h4>
          <p>Universidades</p>
          <p>Estudantes</p>
          <p>EduTechs</p>
        </div>
        <div>
          <h4>Cursos</h4>
          <p>Python</p>
          <p>Pacote Adobe</p>
          <p>Word</p>
        </div>
        <div>
          <h4>Mais</h4>
          <p>Sobre nós</p>
          <p>Notícias</p>
          {/* <p>EduTechs</p> */}
        </div>
      </span>
      <span>
        <p>Todos os diretos reservados @IntegraEd</p>
      </span>
    </Container>
  )
}