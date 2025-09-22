const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// 🏠 Главная страница (проверка, что сервер работает)
app.get("/", (req, res) => {
  res.send("🚀 Aegis GitHub App is running");
});

// 🔔 Вебхук
app.post("/webhook", (req, res) => {
  const event = req.headers["x-github-event"]; // Тип события (push, pull_request и т.д.)
  const payload = req.body;

  console.log("📩 Event:", event);

  // Если событие — Pull Request
  if (event === "pull_request") {
    const action = payload.action;
    const prTitle = payload.pull_request?.title;
    const prUrl = payload.pull_request?.html_url;

    console.log(`🔎 Pull Request ${action}: "${prTitle}" (${prUrl})`);
  }

  res.status(200).send("✅ Webhook received");
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Aegis App listening on port ${PORT}`);
});
