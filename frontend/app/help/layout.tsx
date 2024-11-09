import {Inter} from "next/font/google";
import SideNav from "@/app/components/side-nav";
import MarginWidthWrapper from "@/app/components/margin-width-wrapper";
import Header from "@/app/components/header";
import HeaderMobile from "@/app/components/header-mobile";
import PageWrapper from "@/app/components/page-wrapper";

const inter = Inter({subsets: ['latin']})


export default function HelpLayout({
                                             children,
                                         }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`bg-white ${inter.className}`}>
        <div className="flex">
            <SideNav/>
            <main className="flex-1">
                <MarginWidthWrapper>
                    <Header/>
                    <PageWrapper>{children}</PageWrapper>
                </MarginWidthWrapper>

            </main>
        </div>
        </body>
        </html>
    )
}