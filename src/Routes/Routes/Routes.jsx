import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/Category/Category";
import News from "../../pages/News/News";
import Home from "../../pages/Home/Home";
import Login from "../../pages/login/Login";
import Registeration from "../../pages/Registeration/Registeration";
import Private from "../Private";
import Profile from "../../pages/Profile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home>, loader: () => fetch(`https://news-server-zeta.vercel.app/news`) },
            {
                path: '/category/:id', element: <Category></Category>,
                loader: ({ params }) => fetch(`https://news-server-zeta.vercel.app/categories/${params.id}`)
            },
            {
                path: '/news/:id', element: <Private> <News></News></Private>,
                loader: ({ params }) => fetch(`https://news-server-zeta.vercel.app/news/${params.id}`)
            },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Registeration></Registeration> },
            { path: '/profile', element: <Private><Profile></Profile></Private> }


        ]
    },

])