import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <div className="flex items-center justify-center w-screen h-screen">
                <div className="px-4 lg:py-12">
                    <div className="lg:gap-4 lg:flex">
                        <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
                            <h1 className="font-bold text-red-600 text-9xl">404</h1>
                            <p className="mb-2 text-2xl font-bold text-center text-red-500 md:text-3xl">
                                <span className="text-red-500">Oops!</span> Page{" "}
                                {error.statusText}
                            </p>
                            <p className="mb-8 text-center text-gray-500 md:text-lg">
                                The page you’re looking for doesn’t exist.
                            </p>
                            <Link to="/"
                                class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-cyan-600 transition duration-300 ease-out rounded-lg shadow-xl group hover:ring-1 hover:via-emerald-500">
                                <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-500 via-emerald-600 to-green-700"></span>
                                <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-green-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                                <span class="relative text-white">Go to home</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}