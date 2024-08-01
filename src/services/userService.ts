import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import prisma from "../config/db";

export const createUser = async (
  email: string,
  password: string,
): Promise<User> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { email },
  });
};

export const validatePassword = async (
  userPassword: string,
  plainPassword: string,
): Promise<boolean> => {
  return bcrypt.compare(plainPassword, userPassword);
};
