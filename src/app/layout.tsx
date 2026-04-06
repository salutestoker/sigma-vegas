import type { Metadata } from 'next';
import { appFontVariables } from './fonts';
import './globals.css';

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
        <html lang="en" className={`${appFontVariables} h-full antialiased`}>
            <body
                style={{
                    backgroundImage: 'url(/images/sigma-vegas-bg.jpg)',
                    backgroundSize: '1200px',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#b10000',
                    backgroundPosition: 'center bottom',
                }}
                className="font-secondary flex min-h-full flex-col overflow-hidden"
            >
                {children}
                <div className="fixed top-0 left-0 h-screen w-screen bg-[#ff0000] mix-blend-multiply"></div>
                <div className="fixed top-0 left-0 z-[-1] h-screen w-screen mix-blend-color-burn">
                    <video
                        className="opacity-[.1]"
                        src="/videos/sigma-vegas-intro.mp4"
                        muted
                        autoPlay
                        playsInline
                        loop
                    ></video>
                </div>
            </body>
        </html>
    );
}
