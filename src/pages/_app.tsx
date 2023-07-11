import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { NavBar } from "~/components/Navbar";
import { PT_Sans } from 'next/font/google'; 

const pt_sans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={pt_sans.className}>
      <NavBar />
      <Component {...pageProps} />
    </main>
  )
};

export default api.withTRPC(MyApp);
