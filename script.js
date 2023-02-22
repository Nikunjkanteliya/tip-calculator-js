let button = document.querySelector("button");

let fun = () => {
  let totalamount = +document.getElementById("amount").value;
  let select = +document.getElementById("select").value;
  let totalpeople = +document.getElementById("peo").value;
  let finale = document.getElementById("h3");
  let absolute = (totalamount * select) / totalpeople;

  finale.textContent = absolute;
  if (totalamount <= 0) {
    alert("Your entered value is invalid")
  }
};
button.addEventListener("click", fun);