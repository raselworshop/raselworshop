import { createBrowserRouter, } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../component/Error/ErrorPage";
import Home from "../page/Home/Home";
import About from "../page/About/About";
import MyResume from "../page/MyResume/MyResume";
import MySkills from "../page/MySkill/MySkills";
import Contact from "../page/ContactMe/Contact";
import Projects from "../page/Projects/Projects";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children:[
        {
          path:"home",
          element: <Home/>
        },
        {
          path:"about", 
          element:<About />
        },
        {
          path:"resume",
          element: <MyResume/>
        },
        {
          path:"skills",
          element:<MySkills />
        },
        {
          path:"projects" ,
          element:<Projects />
        },
        {
          path:"contact",
           element:<Contact />
        }
      ]
    },
  ]);
  export default router;