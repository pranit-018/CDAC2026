import { createBrowserRouter } from "react-router-dom";
import MyImages from "../component/MyImagesCom";
import MyListComp from "../component/MyListComp";
import MyFormComp from "../component/MyFormComp";
import ReactHookComp from "../component/Hooks/ReactHookComp";
import UseStateHookComp from "../component/Hooks/UseStateHookComp";
import UseEffectHookComp from "../component/Hooks/UseEffectHookComp";
import PageNotFoundComp from "../layout/PageNotFoundComp";
import DashboardCom from "../layout/DashboardCom";
import CarosoleComp from "../component/CarosoleComp";
import ProductDashComp from "../CRUD/ProductDashComp";
import ProductAddComp from "../CRUD/ProductAddComp";
import ProductUpdateCom from "../CRUD/ProductUpdateCom";
import UserListComp from "../component/UserListComp";



const router = createBrowserRouter([

     {path:"dashboard", element:<DashboardCom/>,children:[
        
        {path:"carosole",element:<CarosoleComp/>},
        //2. naming routing
        {path:"myform",element:<MyFormComp/>},
        //3. parameterize routing
        {path:"myimages",element:<MyImages />},

        {path:"list", element:<MyListComp />},

        //4.child routing
        {path:"hooks",element:<ReactHookComp />,
            children: [
                {path:"usestate", element:<UseStateHookComp />},
                {path:"useeffect", element:<UseEffectHookComp />}
            ]
        },

        {path:"productdash", element:<ProductDashComp/>},
        {path:"productadd", element:<ProductAddComp/>},
        {path:"productupdate/:id", element:<ProductUpdateCom/>},
        {path:"userlist", element:<UserListComp />},

    ],
},

  

    {path:"*",element:<PageNotFoundComp/>}
   

    
]);


export default router;