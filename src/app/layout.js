"use client"
import "../Styles/main.scss";
import Header from "@/Components/Header/Header";
import MobileMenu from "@/Components/MobileMenu/MobileMenu";
import Footer from "@/Components/Footer/Footer";
import { Provider } from 'react-redux';
import store from '../../store/store';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main">
        <Provider store={store}>
          <Header/>
            <MobileMenu/>
            {children}
          <Footer/>
      </Provider>
      </body>
    </html>
  )
}
