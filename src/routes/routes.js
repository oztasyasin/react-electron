import Home from "../pages/Home";
import Launch from "../pages/Launch";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const routes = [
    {
        path: '/',
        component: Home,
        permissions: ['anyallow'],
        errorTxt: ""
    },
    {
        path: '/login',
        component: Login,
        permissions: ['anyallow'],
        errorTxt: ""
    },
    {
        path: '/register',
        component: Register,
        permissions: ['admin','superadmin'],
        errorTxt: "this page for only admins"
    },
    {
        path: '/launch',
        component: Launch,
        permissions: ['dsadasd','asdasdasd'],
        errorTxt: ""
    }
]