import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

const DefaultLayout = (props) => (
    <>
        <Head>
            <meta charSet="utf-8" />
        </Head>
        <Box>
            <Navbar />
            {props.children}
        </Box>
        <Footer />
    </>
);

export default DefaultLayout;
