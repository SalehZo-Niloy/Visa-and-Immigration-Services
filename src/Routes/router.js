import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import ReviewUpdate from "../Pages/ReviewUpdate/ReviewUpdate";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/home', element: <Home></Home>
            },
            {
                path: '/services', element: <Services></Services>,
                loader: async () => fetch('http://localhost:5000/allServices')
            },
            {
                path: '/services/:id', element: <ServiceDetails></ServiceDetails>,
                loader: async ({ params }) => fetch(`http://localhost:5000/serviceDetails/${params.id}`)
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            },
            {
                path: '/myReviews', element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addService', element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/updateReview/:id', element: <PrivateRoute><ReviewUpdate></ReviewUpdate></PrivateRoute>,
                loader: async ({ params }) => fetch(`http://localhost:5000/review/${params.id}`)
            },
        ]
    }
]);