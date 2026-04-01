import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const impact = localFont({
    src: './fonts/Impact.ttf',
    variable: '--font-impact',
    display: 'swap',
    fallback: ['Haettenschweiler', 'Arial Narrow Bold', 'Arial', 'sans-serif'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'SIGMA on XRPL | Las Vegas After Party',
    description: 'Thursday April 30th, 2026 at the Hard Rock Cafe.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${impact.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="flex min-h-full flex-col">{children}</body>
        </html>
    );
}
