import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import {
  createUser,
  findUserByEmail,
  validatePassword,
} from "../services/userService";

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).send("Email and password are required");

  try {
    await createUser(email, password);
    res.status(201).send("User registered");
  } catch (error) {
    console.log(error)
    res.status(500).send("Server error");
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).send("Email and password are required");

  try {
    const user = await findUserByEmail(email);

    if (user && (await validatePassword(user.password, password))) {
      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "1h",
        },
      );
      res.json({ token });
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    res.status(500).send("Server error");
  }
};

export const validateToken = (req: Request, res: Response) => {
  if (req.res?.locals.user) {
    res.send("Login OK");
  } else {
    res.sendStatus(401);
  }
};
