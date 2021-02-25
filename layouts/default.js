import Head from "next/head";
import Link from "next/link";
import Navigation from "../components/nav";
import Footer from "../components/footer";

const DefaultLayout = (props) => {
    return (
        <>
            <Head>
                <title>Default</title>
                <meta charSet="utf-8" />
            </Head>
            <div>
                <Navigation/>
            <header className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-lg leading-6 font-semibold text-gray-900">
                            Brian Ketelsen - Notes from the Edge
                    </h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        {props.children}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default DefaultLayout;
