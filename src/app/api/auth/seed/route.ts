import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const userName = "shayan";
    const userPassword = "shayan";

    const hashedPassword = await bcrypt.hash(userPassword, 13);

    const newUser = await prisma.user.create({
      data: {
        password: hashedPassword,
        userName,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...res } = newUser;

    return NextResponse.json({
      message: "user created",
      userName: res.userName,
    });
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json({
      message: "internal server error",
      status: 500,
    });
  }
};
