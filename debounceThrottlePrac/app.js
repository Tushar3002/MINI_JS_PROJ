const users = [
  "Alice", "Bob", "Charlie", "David",
  "Eve", "Frank", "Grace", "Hannah","alis","alien"
];

function fakeSearchAPI(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = users.filter(user =>
        user.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filtered);
    }, 800); // simulate network delay
  });
}
function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
const input = document.getElementById("search");
const resultsDiv = document.getElementById("results");
const statusDiv = document.getElementById("status");

async function searchHandler(query) {
  if (!query) {
    resultsDiv.innerHTML = "";
    statusDiv.textContent = "";
    return;
  }

  statusDiv.textContent = "Loading...";
  resultsDiv.innerHTML = "";

  const results = await fakeSearchAPI(query);

  statusDiv.textContent = "";

  if (results.length === 0) {
    resultsDiv.innerHTML = "<p>No results found</p>";
    return;
  }

  resultsDiv.innerHTML = results
    .map(user => `<p>${user}</p>`)
    .join("");
}
const debouncedSearch = debounce(searchHandler, 400);

input.addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});
