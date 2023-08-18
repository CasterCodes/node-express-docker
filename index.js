import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    status: "success",
    message: "Server running correctly",
  });
});

const PORT = process.env.NODE_ENV || 8080;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
