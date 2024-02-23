import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";
import VercelLogo from "../public/img/vercel.svg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";



export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm text-dgreen dark:text-lgreen">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span className="text-dgreen dark:text-white">
          {" "}
          Made by{" "}
          <Link
            href="https://m-texx.com/"
            rel="noopener"
            target="_blank">
            M-Texx Textile Recycling
          </Link>
        </span>
        <span>&middot;</span>
        <span className="text-dgreen dark:text-white">
          {" "}
          <Link
            href="https://m-texx.com/"
            rel="noopener"
            target="_blank">
            Website
          </Link>
        </span>
      </div>


          <div className="text-3xl flex mx-auto justify-center my-4">
            <Link href="https://www.facebook.com/mtexxtextile"
                  target="_blank">
            <FaFacebook className="mx-4 text-dgreen dark:text-lgreen hover:scale-125 transition duration-300" />
            </Link>

            <Link href="https://www.instagram.com/mtexx_recycling/"
                  target="_blank">
            <FaInstagram className="mx-4 text-dgreen dark:text-lgreen hover:scale-125 transition duration-300" />
            </Link>

            {/* <Link href="https://www.youtube.com/watch?v=-XT9GojBiqA"
                  target="_blank">
            <FaYoutube className="mx-4 text-dgreen dark:text-lgreen hover:scale-125 transition duration-300" />
            </Link> */}

            <Link href="https://www.tiktok.com/@mtexx_recycling"
                  target="_blank">
            <FaTiktok className="mx-4 text-dgreen dark:text-lgreen hover:scale-125 transition duration-300" />
            </Link>
          </div>
        
        <div className="flex mx-auto justify-end text-4xl">
        <ThemeSwitch />
        </div>
      {/* <Backlink /> */}
    </Container>
  );
}

// const Backlink = () => {
//   return (
//     <a
//       href="https://m-texx.com"
//       target="_blank"
//       rel="noopener"
//       className="dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300 fixed bottom-5 right-5 flex place-items-center space-x-2 rounded border border-gray-300 bg-white px-3 py-1 font-sans text-sm font-semibold text-gray-900 shadow-sm dark:border-gray-600 dark:bg-dgreen dark:text-gray-100">
//       <svg
//         width="20"
//         height="20"
//         viewBox="0 0 30 30"
//         fill="none"
//         className="h-4 w-4"
//         xmlns="http://www.w3.org/2000/svg">
//         <rect
//           width="30"
//           height="29.5385"
//           rx="2.76923"
//           fill="#362F78"
//         />
//         <path
//           d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
//           fill="#F7FAFC"
//         />
//       </svg>

//       <span> Purchase Pro ↗</span>
//     </a>
//   );
// };
