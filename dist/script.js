// -refs
const input = document.querySelector("input");
const button = document.querySelector("button");
const result = document.getElementById("result");

// const key = secretKey;
// - functions
function getMovie() {
  result.innerText = "Loading...";

  const url = `/movies/get/${input.value}`;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log("data: ", data);
      //render items
      result.innerHTML = `<h2>Found! ${data.Title}</h2>
      <img src="${data.Poster}" alt="${data.Title}">`;
    } else {
      result.innerText = `nothing...Try something else (${xhr.responseText})`;
    }
  };
}

// -init
button.addEventListener("click", getMovie);
