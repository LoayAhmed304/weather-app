class View {
  _homepage = document.getElementById("homeSearch");
  _resultsPage = document.getElementById("result");
  _form = document.querySelectorAll("form");

  setListener(fn) {
    this._form.forEach((form) =>
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        fn();
        document.getElementById("homepage").classList.add("hidden");
        document.getElementById("form2").classList.remove("hidden");
        document.getElementById("result").classList.remove("hidden");
      })
    );
  }

  returnQuery() {
    let query = Array.from(document.querySelectorAll("input"));
    const values = query.map((el) => el.value).filter((el) => el);
    query.forEach((q) => (q.value = ""));
    return values[0];
  }

  renderWeather(data) {
    const markup = this._generateMarkup(data);
    this._resultsPage.innerHTML = "";
    this._resultsPage.insertAdjacentHTML("beforeend", markup);
  }

  _generateMarkup(data) {
    return `
    <div
        id="stats"
        class="container flex flex-col items-center justify-between bg-charcoalGray mx-auto w-1/2 p-5 rounded-xl shadow-2xl space-y-12"
      >
      <div
          class="flex flex-col space-y-2 md:space-y-0 items-center justify-center"
        >
        <!-- Weather stats -->
        <img src='../images/${this._getImage(
          data.time
        )}' alt="icon" class="md:w-60" />
        <div
          id="stats"
          class="space-y-12 flex flex-col items-center justify-center "
        >
          <h1 class="text-3xl md:text-7xl text-white">${data.name}</h1>
          <h1 class="text-3xl md:text-7xl text-white">${Math.floor(
            data.temp
          )}°C</h1>
          <div class="flex flex-col items-center space-y-2 text-sm md:text-md text-lightPeach text-softPeach">
            <p>Preceptations</p>
            <div class="flex flex-row items-center justify-between space-x-12">
            <p class="text-sm md:text-md text-white text-softPeach">
            Max: ${data.tempMax}°
            </p>
            <p class="text-sm md:text-md text-white text-softPeach">
            Min: ${data.tempMin}°
            </p>
            </div>
          </div>
        </div> 
      </div>
    </div>
        `;
  }

  _getImage(time) {
    if (time) return `moon.webp`;
    return "sunny.svg";
  }
}

export default new View();
