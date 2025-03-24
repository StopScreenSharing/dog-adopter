import { useRouteError } from "react-router-dom";

function ErrorPage () {
    
    const error = useRouteError();
    console.log(error);

    return (
        <>
            <main style={{ textalign: 'center', marginTop: '20px'}}>
                <h1 style= {{color: 'red', fontSize: '2em'}}>Whoops! Something went wrong!</h1>
            </main>
        </>
    );
}

export default ErrorPage;