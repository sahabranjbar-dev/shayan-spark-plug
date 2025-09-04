import { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        userName: { label: "userName", type: "text" },
        passWord: { label: "passWord", type: "password" },
      },
      async authorize(credentials) {
        const isUserNameValid = credentials?.userName === "shayan007";
        const isPasswordCorrect = credentials?.passWord === "1qaz!QAZ";

        if (isUserNameValid && isPasswordCorrect) {
          return { id: "1", name: "shayan", userName: "shayan" };
        }
        return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
};
