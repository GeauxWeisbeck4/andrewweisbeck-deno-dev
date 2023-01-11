import { Head, Link } from "aleph/react";

export default function Blog() {
    return (
        <div className="ml-20 mt-30">
            <Head>
                <title>AndrewWeisbeck.deno.dev | Blog Page</title>
                <meta name="description" content="My blog all about web dev and Deno." />
            </Head>
            <h1 className="text-3xl font-bold mt-8">Welcome to my Documentation Page</h1>
            <p className="text-lg">I will list all of my documentation here!</p>
            <Link className="text-rose-600 hover:text-teal-500 font-semibold" to="https://geaux-docs.netlify.app/">Here is another site of docs!</Link>
        </div>
    )
}
