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
            <body className="font-secondary relative isolate flex min-h-full flex-col overflow-hidden">
                <div className="relative z-20 flex min-h-full flex-col">
                    {children}
                </div>

                <div
                    style={{
                        backgroundImage: 'url(/images/sigma-vegas-bg.jpg)',
                        backgroundSize: '1200px',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: '#b10000',
                        backgroundPosition: 'center bottom',
                    }}
                    className="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat"
                ></div>

                <div className="viewport-fixed-layer blend-layer-mobile blend-color-burn z-10">
                    <video
                        className="media-cover opacity-[0.14]"
                        src="/videos/sigma-vegas-intro.mp4"
                        muted
                        autoPlay
                        playsInline
                        loop
                    />
                </div>

                <div className="viewport-fixed-layer blend-layer-mobile blend-multiply z-10 bg-[#ff0000] opacity-[0.9]"></div>
            </body>
        </html>
    );
}
