import { Head, Link } from "aleph/react";

export default function Blog() {
    return (
        <div className="ml-20 mt-30">
            <Head>
                <title>AndrewWeisbeck.deno.dev | Blog Page</title>
                <meta name="description" content="My blog all about web dev and Deno." />
            </Head>
            <h1 className="text-3xl font-bold mt-8">Welcome to my Blog Page</h1>
            <p className="text-lg">You can read all of my posts here!</p>
            <Link className="text-rose-600 hover:text-teal-500 font-semibold" to="https://geauxweiseck4.deno.dev">Here is my other Deno Blog</Link>
        </div>
    )
}
