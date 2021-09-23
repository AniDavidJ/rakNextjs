import Footer from "./Footer"
import NavBar from "./NavBar"
import Head from "next/head";

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Rak</title>
            </Head>
        <div className="content">
            <NavBar />
            {children}
            <Footer />
                </div>
              
            </>
    )
}

export default Layout
