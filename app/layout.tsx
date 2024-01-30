import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";
import localfont from "next/font/local";
 
const rubik = localfont(
  {
    src: [
      {
          path: "../public/fonts/RubikDoodleShadow-Regular.ttf",
          weight: "700",
      },
    ],
    variable: "--font-rubik"
  });

  const russo = localfont(
    {
      src: [
        {
            path: "../public/fonts/RussoOne-Regular.ttf",
            weight: "700",
        },
      ],
      variable: "--font-russo"
    });

    const osw = localfont(
      {
        src: [
          {
              path: "../public/fonts/Oswald-VariableFont_wght.ttf",
              weight: "700",
          },
        ],
        variable: "--font-osw"
      });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable, rubik.variable, russo.variable, osw.variable)}>
      <body className="antialiased text-gray-800 dark:bg-dgreen dark:text-gray-400 transition duration-400">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
