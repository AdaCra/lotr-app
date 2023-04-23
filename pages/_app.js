import GlobalStyle from "../styles";
import localFont from "@next/font/local";

export const hobitton = localFont({
  src: "./fonts/HobbitonBrushhandhobbitonBrush-WygA.woff2",
  variable: "--font-Hobbiton",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
