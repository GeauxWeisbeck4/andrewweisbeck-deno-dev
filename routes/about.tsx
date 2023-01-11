import { Head, Link } from "aleph/react";


export default function About() {
    return (
        <div
            className="w-screen flex flex-col items-center justify-center"
            style={{
              height: "calc(100vh - 2 * 80px)",
        }}
        >
            <Head>
                <title>AndrewWeisbeck4.dev | Andrew Home Page</title>
                <meta name="description" content="This is the about page" />
            </Head>
            <h1>About Me</h1>
            <p>I'm Andrew and I'm a full stack Web Developer. Learn more about me!</p>
            <Link className="text-rose-600 hover:text-teal-500" to="https://geauxweisbeck4.dev">You can visit my other personal site here.</Link>
        </div>
    );
}
