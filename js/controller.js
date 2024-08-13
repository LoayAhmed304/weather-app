import * as model from "./model.js";
import view from "./view.js";

async function getQuery() {
  try {
    const query = view.returnQuery();
    if (!query) return;
    await model.setWeather(query);
    console.log(model.weather);
  } catch (err) {
    console.log(err);
  }
}

function init() {
  view.setListener(getQuery);
}
init();
