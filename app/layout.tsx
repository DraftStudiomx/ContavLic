import localFont from "next/font/local";
import "./globals.css";
import {Hedvig_Letters_Serif, Lexend_Peta} from "next/font/google";

const hedvigLettersSerif = Hedvig_Letters_Serif({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-hedvig-letters-serif",
});

const lexendPeta = Lexend_Peta({
    subsets: ["latin"],
    weight: ["500"],
    variable: "--font-lexend-peta",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`
                    ${hedvigLettersSerif.variable}
                    ${lexendPeta.variable}
                    antialiased 
                    min-h-screen flex 
                    flex-col`
                }
            >
                {children}
            </body>
        </html>
    );
}
