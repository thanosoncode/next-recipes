import { AppContextProvider } from "../components/Context";
import Layout from "../components/Layout";
import GlobalStyles from "../components/styles/Global";
import { ThemeProvider } from "styled-components";

const theme = {
  color: "red",
  mobile: "768px",
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <AppContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContextProvider>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
