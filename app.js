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
//all outputs
var rent_amt = document.getElementById("rent_amt");
var emergency_amt = document.getElementById("emergency_amt");
var dependants_amt = document.getElementById("dependants_amt");
var food_amt = document.getElementById("food_amt");
var other_amt = document.getElementById("other_amt");
var saving_amt = document.getElementById("saving_amt");

var manageError = document.getElementById("manage_error");
var displayResult = document.getElementById("displayResult");
enterMoney.addEventListener("keypress", showManageMoney);
evaluate.addEventListener("click", evaluateMoney);
function showManageMoney(e) {
  if (e.target.value) {
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
    var rent_per = parseInt(rent.value);
    var emergency_per = parseInt(emergency.value);
    var saving_per = parseInt(saving.value);
    var dependants_per = parseInt(dependants.value);
    var other_per = parseInt(other.value);
    var food_per = parseInt(food.emergency);
    var total =
      rent_per +
      emergency_per +
      saving_per +
      dependants_per +
      other_per +
      food_per;
    if (total > 100) {
      manageError.innerHTML = "Total percentage is exceeding 100%";
    } else {
      calculate(
        rent_per,
        emergency_per,
        saving_per,
        dependants_per,
        other_per,
        food_per
      );
    }
  }
}

function calculate() {
  var rentMoney = (rent.value / 100) * income;
  var emergencyMoney = (emergency.value / 100) * income;
  var savingMoney = (saving.value / 100) * income;
  var dependantsMoney = (dependants.value / 100) * income;
  var otherMoney = (other.value / 100) * income;
  var foodMoney = (food.value / 100) * income;

  rent_amt.innerHTML = rentMoney;
  emergency_amt.innerHTML = emergencyMoney;
  saving_amt.innerHTML = savingMoney;
  dependants_amt.innerHTML = dependantsMoney;
  other_amt.innerHTML = otherMoney;
  food_amt.innerHTML = foodMoney;
  //   console.log(rentMoney);
  //   console.log(income);
  //   console.log(rent);
  displayResult.classList.remove("displayResult");
}
