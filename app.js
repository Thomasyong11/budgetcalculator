var enterMoney = document.getElementById("enter_money");
// console.log("income: ", income);
var income;
var error = document.getElementById("error");
var evaluate = document.getElementById("evaluate");
// all inputs (rent,dependants etc)
var rent = document.getElementById("rent");
var emergency = document.getElementById("emergency");
var dependants = document.getElementById("dependants");
var food = document.getElementById("food");
var other = document.getElementById("other");
var saving = document.getElementById("saving");
var manageError = document.getElementById("manage_error");
enterMoney.addEventListener("keyup", showManageMoney);
evaluate.addEventListener("click", evaluateMoney);
function showManageMoney(e) {
  if (e.keyCode == 13) {
    income = e.target.value;

    if (isNaN(income) || income == 0) {
      //error
      error.classList.remove("error");
      error.classList.add("income_error");
    } else {
      error.classList.add("error");
    }
  }
}

function evaluateMoney() {
  if (
    rent.value == "" ||
    emergency.value == "" ||
    saving.value == "" ||
    dependants.value == "" ||
    other.value == "" ||
    food.value == ""
  ) {
    manageError.innerHTML = "Provide values for all inputs ";
  } else {
    manageError.innerHTML = "";
    var rent_per = ParseInt(rent.value);
    var emergency_per = ParseInt(emergency.value);
    var saving_per = ParseInt(saving.value);
    var dependants_per = ParseInt(dependants.value);
    var other_per = ParseInt(other.value);
    var food_per = ParseInt(food.emergency);
    var total =
      rent_per +
      emergency_per +
      saving_per +
      dependants_per +
      other_per +
      food_per;
  }
}
