import express, { json, urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  json({
    limit: "23kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "19kb",
  })
);

app.use(express.static("public"));

app.use(cookieParser());

export { app };
