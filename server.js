const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// 🔔 эндпоинт для вебхуков
app.post("/webhook", (req, res) => {
  console.log("📩 Webhook получен:", req.body);
  res.status(200).send("✅ Webhook received");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Aegis App listening on port ${PORT}`);
});
