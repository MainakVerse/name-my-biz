import { Roboto } from 'next/font/google';
import "./globals.css";
import { Topbar } from '@/components/Topbar';
import { Toaster } from "@/components/ui/toaster"
import { BusinessNameContext } from '@/context/BusinessNameContext';

// Configure the Roboto font
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});


export const metadata = {
  title: "Name My Biz",
  description: "Your one stop business nomenclature and domain validation app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
        <BusinessNameContext>
          <Topbar />
          <Toaster />
          {children}
        </BusinessNameContext>
      </body>
    </html>
  );
}
