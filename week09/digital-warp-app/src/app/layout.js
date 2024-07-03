import { Gothic_A1, Cute_Font} from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/Navigation-Bar";
import Test from "@/components/Test";


const gothicA1 = Gothic_A1({weight: '300', subsets: ['latin']})
export const cuteFont = Cute_Font({weight: '400', subsets: ["latin"]})

export const metadata = {
  title: "Digital Warp",
  description: "underground news that the media wont tell you - oh, and we do game reivews, weather your cyberdeck is a one slot rock or a brainmelting beast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* bg-hero and bg-vDark-grey are defined in the tailwind config - custom themes. */}
      <body className={`${gothicA1.className} bg-hero bg-vDark-grey`}>
        <NavigationBar/>
        <div className="max-w-screen-lg">
        {children}
        </div>
        </body>
    </html>
  );
}
