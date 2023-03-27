import styled from "styled-components";
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { BoxLogin } from "../components/BoxLogin";
import { AreaReplay } from "../components/AreaReplay";
import { BoxCourse } from "../components/BoxCourse";
import { HeaderHeight, FooterHeight, MaxWidth } from "../utils/constants"
import line from "../assets/line.png"
import imgLogin from "../assets/img-login.png"
import imgSignup from "../assets/img-signup.png"
import books from "../assets/books.png"
import conection from "../assets/conection.png"
import ideias from "../assets/ideias.png"
import course1 from "../assets/course1.jpeg"
import course2 from "../assets/course2.jpg"
import course3 from "../assets/course3.jpeg"
import textNotice from "../assets/text-notice.png"
import imgNotice from "../assets/img-notice.png"
import subscribeSection from "../assets/subscribe_section.png"
import { useNavigate } from "react-router-dom";
import { goToBuilding } from "../router/coordinator";
import { useState } from "react";

const Body = styled.div`
  height: 3800px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media screen and (max-width: 428px){
    height: 4300px;
  }
`

const Container = styled.main`
  height: calc(100% - ${FooterHeight}px - ${HeaderHeight}px);
  min-height: 2000px;
  max-width: ${MaxWidth}px;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 428px){
    height: calc(100% - 12% - ${HeaderHeight}px);
  }

  >div{
    height: 22%;
    min-height: 600px;
    @media screen and (max-width: 428px){
      height: 0%;
    }
  }
  
  .inicio{
    max-height: 750px;
    display: flex;
    padding: 60px 0;
    @media screen and (max-width: 428px){
      flex-direction: column;
      align-items: center;
      padding: 30px 0;
      height: 20%;
    }
    
    .left{
      width: 50%;
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      @media screen and (max-width: 428px){
        align-items: center;
        width: 90%;
        height: 60%;
      }
      img{
        max-width: 310px;
        top: -40px;
        position: relative;
        @media screen and (max-width: 428px){
          top: -25px;
          max-width: 150px;
        }
      }

      >button{
        border: 2px solid #FFF;
        border-radius: 8px;
        background: transparent;
        height: 56px;
        width: 184px;
        font-size: 16px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        color: #FFF;
        cursor: pointer;
      }
    }
    
    .rigth{
      width: 50%;
      padding-bottom: 20px;
      display: flex;
      justify-content: space-around;
      align-items: end;
      @media screen and (max-width: 428px){
        width: 90%;
        padding-bottom: 0;
        gap: 16px;
      }
    }
  }

  .style-1{
    color: #FFF;
    font-family: 'Archivo', sans-serif;
    font-size: 20px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 8px;
    @media screen and (max-width: 428px){
      font-size: 12px;
      text-align: center;
    }
  }

  .style-2{
    color: #FFF;
    font-family: 'Archivo', sans-serif;
    font-size: 42px;
    font-weight: 700;
    max-width: 700px;
    @media screen and (max-width: 428px){
      font-size: 24px;
      text-align: center;
    }
    
    span{
      color: rgba(255, 230, 0, 1);
    }
  }
  .style-3{
    color: #FFF;
    font-family: 'Archivo', sans-serif;
    font-size: 16px;
    font-weight: 300;
    width: 90%;
    max-width: 600px;
    letter-spacing: 2px;
    @media screen and (max-width: 428px){
      font-size: 12px;
      text-align: center;
    }
  }

  .noticias{
    display: flex;
    align-items: center;
    @media screen and (max-width: 428px){
      height: 20%;
      flex-direction: column;
    }
    >span{
      display: flex;
      flex-direction: column;
      gap: 50px;
      height: 80%;
      width: 50%;
    @media screen and (max-width: 428px){
      width: 90%;
      height: 70%;

    }
      >h2{
        color: #423D51;
        font-family: 'Volkhov', serif;
        font-size: 50px;
        @media screen and (max-width: 428px){
          font-size: 36px;
          text-align: center;
    }
      }
    }
  }
  
  .imgNotice{
    img{
      margin: 0 auto;
      width: 90%;
      @media screen and (max-width: 428px){
        width: 100%;
        object-fit: cover;
      }
    }
  }

  .propostas{
    @media screen and (max-width: 428px){
      height: 25%;
      section{
        div{
          flex-direction: column;
          gap: 8px;
        }
      }
      p{
        font-size: 16px;
      }
    }
  }
  .cursos{
    @media screen and (max-width: 428px){
      height: 35%;
      section{
        div{
          flex-direction: column;
          gap: 8px;
        }
      }
      p{
        font-size: 16px;
      }
    }
  }


  .inscricao{
    height: 15%;
    overflow-y: hidden;
    img{
      position: relative;
      left: -80px;
    }
    @media screen and (max-width: 428px){
      display: none;
    }

  }
`

const Background = styled.div`
  position: absolute;
  z-index: 0;
  height: 30%;
  max-height: 810px;
  width: 100%;

  div{
    background: linear-gradient(101.47deg, #FFBF46 -65.39%, rgba(224, 82, 99, 0.87) 99.77%);
    object-fit: cover;
      height: 100%;
  }
  
  span{
    position: absolute;
    right:0;
    bottom: -1px;
    border-top: 270px solid transparent;
    border-right: 100vw solid #FFF;
    object-fit: cover;
    @media screen and (max-width: 428px){
      border-top: 130px solid transparent;
    }
  }
`
export const Home = () => {
  const navigate = useNavigate()

  return (
    <Body>
      <Background>
        <div></div>
        <span></span>
      </Background>
      <Header />
      <Container>
        <div className="inicio">
          <span className="left">
            <p className="style-1">informação perto de você</p>
            <p className="style-2">A maior plataforma sobre EduTechs e incubadoras do <br/> <span>Rio de Janeiro.</span></p>
            <img src={line} />
            <p className="style-3">Nosso site também tem como objetivo facilitar a interação entre todos os atores do setor de educação, incluindo academia, setor público, Terceiro Setor, Edutechs e incubadoras.</p>
            <button onClick={() => goToBuilding(navigate)}>Saiba Mais</button>
          </span>
          <span className="rigth">
            <BoxLogin 
              login={true} 
              signup={false} 
              img={imgLogin} 
              text={"Já faz parte da IntegraEd?"} 
              text2={"Acesse sua conta."}
              button={"Entrar"}>
            </BoxLogin>
            <BoxLogin 
              login={false} 
              signup={true} 
              img={imgSignup} 
              text={"Ainda não faz? "} 
              text2={"Comece já!"}
              button={"Começar"}>
            </BoxLogin>
          </span>
        </div>
        <div className="propostas">
          <AreaReplay
            text1={"Propostas"}          
            text2={"Conheça os nossos objetivos"}
            button={"Saiba Mais"}
            widthBtn={184} 

          >
            <BoxLogin propostas={true} img={books} text={"Educar"} text3={"Estamos qualificando os futuros profissionais do Rio de Janeiro com cursos ministrados por profissionais de excelência."} ></BoxLogin>
            <BoxLogin propostas={true} img={conection} text={"Conectar"} text3={"Através de comunidades e fóruns, conectamos diversos setores."} ></BoxLogin>
            <BoxLogin propostas={true} img={ideias} text={"Compartilhar"} text3={"Divulgação de eventos, editais de aceleração e cursos."} ></BoxLogin>

          </AreaReplay>
        </div>
        <div className="cursos">
        <AreaReplay
            text1={"Impulsionando carreiras no Rio de Janeiro"}          
            text2={"Cursos"}
            button={"Conheça nossos cursos"}
            widthBtn={270} 
          >
            <BoxCourse img={course1} text={"Desenvolvimento com Python"}></BoxCourse>
            <BoxCourse img={course2} text={"Aplicações com Excel"}></BoxCourse>
            <BoxCourse img={course3} text={"Edição com pacote Adobe"}></BoxCourse>
          </AreaReplay>
        </div>
        <div className="noticias">
          <span>
            <h2>Notícias</h2>
            <img src={textNotice}/>
          </span>
          <span className="imgNotice">
            <img src={imgNotice}/>
          </span>
        </div>
        <span className="inscricao">
          <img src={subscribeSection}/>
        </span>
      </Container>
      <Footer />
    </Body>
  )
}