import { Bricolage_Grotesque, Figtree } from 'next/font/google';
import './globals.css';

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display' });
const body = Figtree({ subsets: ['latin'], variable: '--font-body' });

export const metadata = {
  title: 'Political Digital Marketing & Campaign Services in India | Clearby Political',
  description:
    'Clearby Political provides political digital marketing, social media management, candidate branding, campaign websites, advertising, video and printing for leaders, candidates and parties in India.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
