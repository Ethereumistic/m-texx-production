// import { NextAuthOptions } from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// export const authOptions: NextAuthOptions = {
//   providers: [
//     Credentials({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email" },
//         password: { label: "Password" },
//       },
//       authorize(credentials, req) {
//         // Perform database operations
//         const adminEmail = process.env.ADMIN_EMAIL;
//         const adminPassword = process.env.ADMIN_PASSWORD;

//         if (
//           credentials?.email === adminEmail &&
//           credentials?.password === adminPassword
//         ) {
//           return {
//             id: "1",
//             email: adminEmail,
//           };
//         }

//         return null;
//       },

      
//     }),
//   ],
// };





