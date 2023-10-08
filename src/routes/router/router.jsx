import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root";
import Home from "../../pages/Home/Home";
import Spinner from "../../components/Spinner/Spinner";
import PrivetRoute from "../privetRoute/PrivetRoute";
const Error = lazy(() => import("../../components/shared/Error/Error"));
const Login = lazy(() => import("../../pages/Login/Login"));
const Register = lazy(() => import("../../pages/Register/Register"));
const UpcomingEvent = lazy(() => import("../../pages/UpcomingEvent/UpcomingEvent"));
const Query = lazy(() => import("../../pages/QueryPage/Query"));
// import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
const ServiceDetails = lazy(() => import("../../pages/ServiceDetails/ServiceDetails"));


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Suspense fallback={<Spinner />}><Error /></Suspense>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => await fetch('../../../public/fakeData.json'),
            },
            {
                path: '/service/:id',
                element: <Suspense fallback={<Spinner />}><PrivetRoute><ServiceDetails /></PrivetRoute></Suspense>,
                loader: async ({ params }) => {
                    const res = await fetch('../../../public/fakeData.json');
                    const data = await res.json();

                    const singleData = data.find(single => single?.id === params.id)
                    return singleData;
                }
            },
            {
                path: '/upcoming',
                element: <Suspense fallback={<Spinner />}><PrivetRoute><UpcomingEvent /></PrivetRoute></Suspense>,
            },
            {
                path: '/query',
                element: <Suspense fallback={<Spinner />}><PrivetRoute><Query /></PrivetRoute></Suspense>,
            },
            {
                path: '/login',
                element: <Suspense fallback={<Spinner />}><Login /></Suspense>,
            },
            {
                path: '/register',
                element: <Suspense fallback={<Spinner />}><Register /></Suspense>,
            },
        ],
    },
])