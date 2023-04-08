// Age Classification

function ageClassification(num) {
  return num > 0 ?
    num <= 24 ? "детский возраст" :
      num <= 44 ? "молодой возраст" :
        num <= 65 ? "средний возраст" :
          num <= 75 ? "пожилой возраст" :
            num <= 90 ? "старческий возраст" :
              num <= 122 ? "долгожители" :
                null : null;
}

console.log("-1 :", ageClassification(-1)); // -1 : null
console.log("5 :", ageClassification(5)); // 5 : детский возраст
console.log("34 :", ageClassification(34)); // 34 : молодой возраст
console.log("50 :", ageClassification(50)); // 50 : средний возраст
console.log("65.1 :", ageClassification(65.1)); // 65.1 : пожилой возраст
console.log("80 :", ageClassification(80)); // 80 : старческий возраст
console.log("110 :", ageClassification(110)); // 110 : долгожители
console.log("130 :", ageClassification(130));


console.log("    -1 :", ageClassification(-1)); // -1 : null
console.log("     1 :", ageClassification(1)); // 1 : детский возраст
console.log("    24 :", ageClassification(24)); // 24 : детский возраст
console.log(" 24.01 :", ageClassification(24.01)); // 24.01 : молодой возраст
console.log("    44 :", ageClassification(44)); // 44 : молодой возраст
console.log(" 44.01 :", ageClassification(44.01)); // 44.01 : средний возраст
console.log("    65 :", ageClassification(65)); // 65 : средний возраст
console.log("  65.1 :", ageClassification(65.1)); // 65.1 : пожилой возраст
console.log("    75 :", ageClassification(75)); // 75 : пожилой возраст
console.log(" 75.01 :", ageClassification(75.01)); // 75.01 : старческий возраст
console.log("    90 :", ageClassification(90)); // 90 : старческий возраст
console.log(" 90.01 :", ageClassification(90.01)); // 90.01 : долгожители
console.log("   122 :", ageClassification(122)); // 122 : долгожители
console.log("122.01 :", ageClassification(122.01)); // 122.01 : null
console.log("   130 :", ageClassification(130)); // 130 : null


//Day of the week
function weekFn(w) {
  let str = "";

  switch (w) {
    case 1:
      str = "Понедельник";
      break;
    case 2:
      str = "Вторник";
      break;
    case 3:
      str = "Среда";
      break;
    case 4:
      str = "Четверг";
      break;
    case 5:
      str = "Пятница";
      break;
    case 6:
      str = "Суббота";
      break;
    case 7:
      str = "Воскресенье";
      break;
    default:
      str = null;
  }

  return str;
}

console.log(weekFn(1)); // 'Понедельник'
console.log(weekFn(3)); // 'Среда'
console.log(weekFn(7)); // 'Воскресенье'
console.log(weekFn(9)); // null
console.log(weekFn(1.5)); // null
console.log(weekFn("2")); // null