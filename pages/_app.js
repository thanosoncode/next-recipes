import { AppContextProvider } from "../components/Context";
import Layout from "../components/Layout";
import GlobalStyles from "../components/styles/Global";
import { ThemeProvider } from "styled-components";

const theme = {
  color: "#F15025",
  secondary: "#EFA92E",
  mobile: "568px",
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
