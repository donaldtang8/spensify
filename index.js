const form = document.querySelector("form");
const name = document.querySelector("#name");
const cost = document.querySelector("#cost");
const errors = document.querySelector("#error");

form.addEventListener("submit", async e => {
  e.preventDefault();
  if (name.value && cost.value) {
    const item = {
      name: name.value,
      cost: parseInt(cost.value)
    };

    const res = await db.collection("expenses").add(item);
    name.value = "";
    cost.value = "";
  } else {
    errors.textContent = "Please enter values before submitting";
  }
});
