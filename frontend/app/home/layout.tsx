import '.././globals.css'
import SideNav from "@/app/components/side-nav";
import MarginWidthWrapper from "@/app/components/margin-width-wrapper";
import Header from "@/app/components/header";
import HeaderMobile from "@/app/components/header-mobile";
import PageWrapper from "@/app/components/page-wrapper";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})
export default function HomeLayout({
                                             children,
                                         }: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
        <body className={`bg-white ${roboto.className}`}>
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