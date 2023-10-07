import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root";
import Error from "../../components/shared/Error/Error";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import UpcomingEvent from "../../pages/UpcomingEvent/UpcomingEvent";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => await fetch('../../../public/fakeData.json'),
            },
            {
                path: '/upcoming',
                element: <UpcomingEvent />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ],
    }
])