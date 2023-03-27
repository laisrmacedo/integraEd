import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Building } from "../pages/Building"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Signup } from "../pages/Signup"

export const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path={`/signup`} element={<Signup/>}/>
        <Route path={`/login`} element={<Login/>}/>
        <Route path={`/manutencao`} element={<Building/>}/>
      </Routes>
    </BrowserRouter>
  )
}