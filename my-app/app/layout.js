
import Header from './components/header/Header';
import './globals.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <header>
          <Header />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <h1>footer</h1>
        </footer>
      </body>
    </html>
  );
}
