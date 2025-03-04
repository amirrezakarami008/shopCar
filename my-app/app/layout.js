
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './globals.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-200">
        <header>
          <Header />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
