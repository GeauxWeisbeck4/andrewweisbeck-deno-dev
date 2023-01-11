import { Head, Link } from "aleph/react"

export default function Portfolio() {
    return (
        <div
      className="w-screen flex flex-col items-center justify-center"
      style={{
        height: "calc(100vh - 2 * 80px)",
      }}
    >
        <Head>
            <title>AndrewWeisbeck.deno.dev | Portfolio Page</title>
            <meta name="description" content="This is my portfolio page" />
        </Head>
        <h1 className="text-3xl font-bold mb-4">Check out all of my coolest projects on this page!</h1>
        <p className="mb-6 text-lg">I will list all of my favorite projects on this page.</p>
        <Link to="https://geauxweisbeck4.dev">
            <img src="./assets/geauxweisbeck4dev.png" width="800" height="550" alt="my other home site" />
        </Link>
    </div>
    )
}
