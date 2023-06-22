import './globals.css'
import { Inter } from 'next/font/google';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Practice",
  description: "Practice Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
