import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import prisma from "./config/db";

dotenv.config(); // Cargar variables de entorno

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  prisma.$connect().then(() => console.log("Connected to the database"));
});
