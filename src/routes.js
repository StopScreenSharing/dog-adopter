import Home from "./Components/Home";
import AdoptPage from "./Components/AdoptPage";
import MyDogs from "./Components/MyDogs";
// import ErrorPage

const routes = [
    {
        path: "/",
        element: <Home />,
        
    },
    {
        path: "/adoptpage",
        element: <AdoptPage />,
        
    },
    {
        path: "/mydogs",
        element: <MyDogs />,
        
    },
];

export default routes;