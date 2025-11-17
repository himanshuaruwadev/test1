import cors from "cors";
import express from "express";

import { loadEnv } from "@turborepo/config/env";
import type { ApiResponse } from "@turborepo/config/types";

const env = loadEnv();
const app = express();

app.use(cors());
app.use(express.json());

app.get<unknown, ApiResponse<{ status: string; environment: string }>>("/health", (_req, res) => {
  res.json({
    success: true,
    data: {
      status: "ok",
      environment: env.NODE_ENV
    }
  });
});

app.use((req, res) => {
  res.status(404).json({ success: false, data: { message: "Not found", path: req.path } });
});

app.listen(env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API ready on port ${env.PORT}`);
});
