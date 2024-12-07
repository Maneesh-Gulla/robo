let que = document.querySelector(".query");
let btn = document.querySelector(".btn");

btn.onclick = function (event) {
  event.preventDefault();

  if (que.value === "10gey") {
    let response = document.getElementById("response");
    let h2 = document.createElement("h2");
    h2.textContent = "nuvu 10gey";
    response.innerHTML = "";
    response.appendChild(h2);
  }
};
