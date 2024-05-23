import express, { type Request, type Response, type Application } from "express";
import { zodMiddleware } from "$/middleware/zod.middleware";
import cors from "cors";
import { z } from "zod";
import { corsOptions } from "./config/corsOption";

const app: Application = express();
const PORT: number = 3000;

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  const bodySchema = z.object({ name: z.string().trim().toUpperCase().min(3).max(255) });
  const result = bodySchema.parse(req.body);
  res.status(200).json({ message: "Hello world", body: result });
});

app.use(zodMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
