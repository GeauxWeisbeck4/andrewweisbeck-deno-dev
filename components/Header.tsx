import { Link } from "aleph/react";
import React from "react";



export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        height: 100,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          maxWidth: 900,
          height: "100%",
          margin: "0 auto",
        }}
      >
        <h1>
          <Link
            style={{ fontSize: 20, color: "#333" }}
            to="/"
          >
            <h1 className="font-bold hover:text-teal-400">AndrewWeisbeck.dev</h1>
          </Link>
        </h1>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Link className="hover:text-teal-500" to="/">Home</Link>
          <Link className="hover:text-teal-500" to="/about">About</Link>
          <Link className="hover:text-teal-500" to="/portfolio">Portfolio</Link>
          <Link className="hover:text-teal-500" to="/blog">Blog</Link>
          <Link className="hover:text-teal-500 mr-4" to="/docs">Docs</Link>
          <Link className="text-3xl hover:text-teal-500" to="https://deno.land/x/aleph">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "1em", height: "1em" }}
              viewBox="0 0 512 512"
            >
              <title>Deno Land</title>
              <mask id="deno-logo-mask">
                <circle fill="white" cx="256" cy="256" r="230" />
              </mask>
              <circle fill="currentColor" cx="256" cy="256" r="256" />
              <path
                mask="url(#deno-logo-mask)"
                stroke="white"
                strokeWidth="25"
                strokeLinecap="round"
                d="M71 319l17-63M107.964 161.095l17-63M36.93 221l17-63M125.964 385l17-63M160.372 486.829l17-63M230 456.329l17-63M206.257 92.587l17-63M326.395 173.004l17-63M452.182 304.693l17-63M409.124 221l17-63M299.027 54.558l17-63M400.624 86.058l17-63"
              />
              <path
                mask="url(#deno-logo-mask)"
                fill="white"
                stroke="currentColor"
                strokeWidth="12"
                d="M252.225 344.418c-86.65 2.61-144.576-34.5-144.576-94.363 0-61.494 60.33-111.145 138.351-111.145 37.683 0 69.532 10.65 94.392 30.092 21.882 17.113 37.521 40.526 45.519 66.312 2.574 8.301 22.863 83.767 61.112 227.295l1.295 4.86-159.793 74.443-1.101-8.063c-8.85-64.778-16.546-113.338-23.076-145.634-3.237-16.004-6.178-27.96-8.79-35.794-1.227-3.682-2.355-6.361-3.303-7.952a12.56 12.56 0 00-.03-.05z"
              />
              <circle mask="url(#deno-logo-mask)" cx="262" cy="203" r="16" />
            </svg>
          </Link>
          <Link className="text-3xl hover:text-teal-500" to="https://github.com/geauxweisbeck4/geauxweisbeck4.dev-version2.1">
            <svg
              viewBox="0 0 1024 1024"
              style={{ width: "1em", height: "1em" }}
              fill="currentColor"
            >
              <title>Github</title>
              <path d="M512-0.001c-282.778 0-512.001 229.581-512.001 512.871 0 226.56 146.688 418.816 350.157 486.606 25.6 4.71 34.919-11.111 34.919-24.73 0-12.134-0.409-44.442-0.666-87.193-142.439 30.976-172.493-68.761-172.493-68.761-23.245-59.29-56.832-75.059-56.832-75.059-46.489-31.744 3.533-31.129 3.533-31.129 51.354 3.584 78.388 52.838 78.388 52.838 45.671 78.336 119.86 55.705 148.992 42.599 4.71-33.126 17.92-55.705 32.563-68.506-113.664-12.954-233.217-56.986-233.217-253.492 0-55.962 19.968-101.785 52.685-137.626-5.274-12.954-22.835-65.126 5.017-135.681 0 0 43.008-13.824 140.8 52.531 38.411-10.894 82.534-17.188 128.116-17.255h0.038c43.52 0.205 87.297 5.888 128.205 17.255 97.741-66.355 140.646-52.583 140.646-52.583 27.955 70.605 10.343 122.778 5.12 135.731 32.768 35.84 52.633 81.664 52.633 137.626 0 197.018-119.757 240.384-233.78 253.082 18.38 15.821 34.714 47.104 34.714 94.977 0 68.506-0.614 123.853-0.614 140.646 0 13.722 9.216 29.696 35.226 24.678 205.067-70.281 349.85-261.406 349.85-486.346 0-0.073 0-0.146 0-0.22v0.012c0-283.29-229.274-512.871-512.001-512.871z" />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}
