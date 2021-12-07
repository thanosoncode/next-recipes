import { AppContextProvider } from "../components/Context";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>
    </>
  );
}

export default MyApp;
