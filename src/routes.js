import App from "./Components/App";
import Home from "./Components/Home";
import AdoptPage from "./Components/AdoptPage";
import MyDogs from "./Components/MyDogs";
import ErrorPage from "./Components/ErrorPage";

const routes = [
   {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
    
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/adoptpage",
                element: <AdoptPage />
            },
            {
                path: "/mydogs",
                element: <MyDogs />
            },
        ]
    }
];

export default routes;