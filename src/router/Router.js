import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"

export const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        {/* <Route path={`/users/signup`} element={<SignupPage/>}/>
        <Route path={`/posts`} element={<PostsPage/>}/>
        <Route path={`/posts/:id`} element={<CommentsPage/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}