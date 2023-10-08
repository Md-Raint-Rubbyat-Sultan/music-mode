import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    return (
        <div id="error-page" className="h-screen flex flex-col items-center justify-center gap-2">
            <h1 className="text-5xl font-bold">Oops!</h1>
            <h3 className="text-3xl text-red-500 font-semibold">404</h3>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default Error;