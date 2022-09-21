let userName = prompt("Adınız Nedir?");
document.querySelector("#myName").innerHTML = userName ? userName[0].toUpperCase() + userName.slice(1) : "Misafir";
console.log(userName  )

const days = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];

const getDate = () => {
  var date = new Date();
  var day = date.getDay();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  document.querySelector(
    "#myClock"
  ).innerHTML = `${hour}:${minute}:${second} ${days[day]}`;
};

setInterval(getDate, 1000);
