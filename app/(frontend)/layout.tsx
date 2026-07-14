import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
import { Toaster } from "sonner";
import DisableDraftMode from "@/components/DisableDraftMode";
import { DraftModeProvider } from "@/components/DraftModeProvider";
import { fetchSettings } from "@/sanity/services/fetchSettings";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {PageTransitionHandler} from "@/components/PageTransitionHandler";
import Script from "next/script";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default async function FrontendLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { isEnabled: isDraftMode } = await draftMode();
    const settings = await fetchSettings();
    return (
        <DraftModeProvider isDraftMode={isDraftMode}>
            {GA_MEASUREMENT_ID && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_MEASUREMENT_ID}');
                        `}
                    </Script>
                </>
            )}
            <Header links={settings.headerNavigation} mail={settings.mail} image={settings.headerLogo} />
            {children}
            <Footer address={settings.footerAddress} phone={settings.footerPhone} mail={settings.footerEmail} links={settings.footerSitemap} image={settings.footerImage} socialLinks={settings.footerSocial} />
            <Toaster />
            <PageTransitionHandler />
            {isDraftMode && (
                <>
                    <DisableDraftMode />
                    <VisualEditing />
                </>
            )}
            <SanityLive />
        </DraftModeProvider>
    );
}
