class View {
  _homepage = document.getElementById("homeSearch");
  _resultsPage = document.getElementById("results");
  _form = document.querySelectorAll("form");

  setListener(fn) {
    this._form.forEach((form) =>
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        fn();
      })
    );
  }

  returnQuery() {
    let query = Array.from(document.querySelectorAll("input"));
    const values = query.map((el) => el.value).filter((el) => el);
    query.forEach((q) => (q.value = ""));
    return values[0];
  }
}

export default new View();
