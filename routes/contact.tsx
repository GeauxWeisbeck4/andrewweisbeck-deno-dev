import { Head, Link } from "aleph/react";

export default function Contact() {
    return (
        <div>
            <Head>
                <title>AndrewWeisbeck.deno.dev | Contact Page</title>
                <meta name="description" content="The contact page on my site" />
            </Head>
            <h1>Contact me here by going there:</h1>
            <input width="200" height="50"></input>
            <button>Submit</button>
            <Link to="/">Or just go home</Link>
        </div>
    )
}
