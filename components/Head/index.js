import Head from 'next/head'
import userInfo from "../../data/usersInfo.json"

export default function DomHead({ pageName = "Home Page" }) {

    return (
        <Head>
            <title>{"MayankMishra"} Portfolio - {pageName} </title>
            <meta name="title" content="Mayank- Personal Portfolio." />
            <meta name="description" content="Software developer resume." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://github.com/M-ayank2005/portfolio/" />
            <meta property="og:title" content="Mayank- Personal Portfolio" />
            <meta property="og:description" content="Develop." />
            <meta property="og:image" content="https://github.com/M-ayank2005/" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://metatags.io/" />
            <meta property="twitter:title" content="Mayank- Personal Portfolio" />
            <meta property="twitter:description" content="Developer." />
            <meta property="twitter:image" content="Mayank" />

            {/* meta tags end */}
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        </Head>
    )
}

