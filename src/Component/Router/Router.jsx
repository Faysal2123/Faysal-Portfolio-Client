import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Page/Home/Home";
import ProjectDetails from "../Page/ProjectDetails/ProjectDetails";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/details/:id',
                element:<ProjectDetails></ProjectDetails>
            }
        ]
    }
])
export default router