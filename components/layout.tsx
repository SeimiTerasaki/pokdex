import Head from "next/head";
import { capitalize } from "@/lib/pokemon.utils";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  const Title = capitalize(title);
  return (
    <div className="sm:px-20 md:px-24 lg:px-56 antialiased font-sans p-6 bg-gradient-to-r from-gray-700 via-gray-900 to-black min-h-screen">
      <Head>
        <title className="capitalize">{Title}</title>
        <meta
          name="description"
          content="Pokedex app with Pokemon API, NextJS and TailwindCSS"
        />
        <meta
          name="keywords"
          content="Pokedex, Pokemon API, NextJS, React, TailwindCSS"
        />
        <meta name="author" content="Seimi Terasaki" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="robots" content="index, nofollow" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/iconx32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicons/iconx48.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/iconx96.png" />
        <meta name="theme-color" content="#fff" />
        <meta name="apple-mobile-web-app-status-bar" content="#fff" />
      </Head>

      <main>
        <div className="text-center pb-5">
          <Link href="/">
            <a>
              <h3 className="Pokemon-hollow animate-fade-in">
                Seimi&#39;s Awesome Pokedex
              </h3>
            </a>
          </Link>
        </div>
        {children}
      </main>
    </div>
  );
}
