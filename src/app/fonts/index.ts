import { Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';

export const disco = localFont({
    src: './70sDisco-Regular.ttf',
    variable: '--font-disco',
    display: 'swap',
    weight: '400',
    style: 'normal',
    fallback: [
        'Impact',
        'Haettenschweiler',
        'Arial Narrow Bold',
        'Arial',
        'sans-serif',
    ],
});

export const nasalization = localFont({
    src: './Nasalization Rg.otf',
    variable: '--font-nasalization',
    display: 'swap',
    weight: '400',
    style: 'normal',
    fallback: ['Arial', 'Helvetica', 'sans-serif'],
});

export const impact = localFont({
    src: './Impact.ttf',
    variable: '--font-impact-face',
    display: 'swap',
    weight: '400',
    style: 'normal',
    fallback: ['Haettenschweiler', 'Arial Narrow Bold', 'Arial', 'sans-serif'],
});

export const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const appFontVariables = `${disco.variable} ${nasalization.variable} ${impact.variable} ${geistMono.variable}`;
