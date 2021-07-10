import express from "express";
import morgan from "morgan";
import axios from "axios"; //fetch()의 업그레이드 버전

const app = express();
const PORT = 3000;

app.use(morgan(`dev`));
app.set("view engine", "pug");

app.get("/", async (req, res) => {
  const apiData = await axios.get("https://4leaf-crawling.pe.kr/searchGoogle");

  const newData = apiData.data.filter((data) => data.type !== "정치");

  res.render("home", { dataList: newData.data });
});

app.listen(PORT, () => {
  console.log(`${PORT}`);
});
