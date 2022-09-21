
function myfunc() {
  //Get Elements
  let b1 = document.getElementById("b1").value;
  let b2 = document.getElementById("b2").value;
  let b3 = document.getElementById("b3").value;
  let b4 = document.getElementById("b4").value;
  let b5 = document.getElementById("b5").value;
  let b6 = document.getElementById("b6").value;
  let b7 = document.getElementById("b7").value;
  let b8 = document.getElementById("b8").value;
  let b9 = document.getElementById("b9").value;

  // Check cases
  // Player 1
  if (b1 == "x" && b2 == "x" && b3 == "x") {
    window.alert("PLAYER X WON!");
    myfunc1();
  } else if (b4 == "x" && b5 == "x" && b6 == "x") {
    window.alert("PLAYER X WON!");
    myfunc1();
  } else if (b7 == "x" && b8 == "x" && b9 == "x") {
    window.alert("PLAYER X WON!");
    myfunc1();
  } else if (b1 == "x" && b4 == "x" && b7 == "x") {
    window.alert("PLAYER X WON!");
    myfunc1();
  } else if (b2 == "x" && b5 == "x" && b8 == "x") {
    window.alert("PLAYER X WON!");
    myfunc1();
  } else if (b3 == "x" && b6 == "x" && b9 == "x") {
    window.alert("PLAYER X WON!");
    myfunc1();
  } else if (b1 == "x" && b5 == "x" && b9 == "x") {
    window.alert("PLAYER X WON!");
    myfunc1();
  } else if (b3 == "x" && b5 == "x" && b7 == "x") {
    window.alert("PLAYER X WON!");
    myfunc1();
  }
  // Player 2
  else if (b1 == "0" && b2 == "0" && b3 == "0") {
    window.alert("PLAYER 0 WON!");
    myfunc1();
  } else if (b4 == "0" && b5 == "0" && b6 == "0") {
    window.alert("PLAYER 0 WON!");
    myfunc1();
  } else if (b7 == "0" && b8 == "0" && b9 == "0") {
    window.alert("PLAYER 0 WON!");
    myfunc1();
  } else if (b1 == "0" && b4 == "0" && b7 == "0") {
    window.alert("PLAYER 0 WON!");
    myfunc1();
  } else if (b2 == "0" && b5 == "0" && b8 == "0") {
    window.alert("PLAYER 0 WON!");
    myfunc1();
  } else if (b3 == "0" && b6 == "0" && b9 == "0") {
    window.alert("PLAYER 0 WON!");
    myfunc1();
  } else if (b1 == "0" && b5 == "0" && b9 == "0") {
    window.alert("PLAYER 0 WON!");
    myfunc1();
  } else if (b3 == "0" && b5 == "0" && b7 == "0") {
    window.alert("PLAYER 0 WON!");
    myfunc1();
  } else if (
    (b1 == "x" || b1 == "0") &&
    (b2 == "x" || b2 == "0") &&
    (b3 == "x" || b3 == "0") &&
    (b4 == "x" || b4 == "0") &&
    (b5 == "x" || b5 == "0") &&
    (b6 == "x" || b6 == "0") &&
    (b7 == "x" || b7 == "0") &&
    (b8 == "x" || b8 == "0") &&
    (b9 == "x" || b9 == "0")
  ) {
    // document.getElementById("print").innerHTML = "TIE";
    window.alert("TIE");
  } else {
    if (flag == 1) {
      document.getElementById("print").innerHTML = "Player X Turn";
    } else {
      document.getElementById("print").innerHTML = "Player 0 Turn";
    }
  }
  console.log(flag);
}

function myfunc1() {
  location.reload();
  document.getElementById("b1").value = "";
  document.getElementById("b2").value = "";
  document.getElementById("b3").value = "";
  document.getElementById("b4").value = "";
  document.getElementById("b5").value = "";
  document.getElementById("b6").value = "";
  document.getElementById("b7").value = "";
  document.getElementById("b8").value = "";
  document.getElementById("b9").value = "";
  flag = 1;
}

flag = 1;
function myfunc3() {
  if (flag == 1) {
    document.getElementById("b1").value = "x";
    document.getElementById("b1").disabled = true;
    flag = 0;
  } else if (flag == 0) {
    document.getElementById("b1").value = "0";
    document.getElementById("b1").disabled = true;
    flag = 1;
  }
}

function myfunc4() {
  if (flag == 1) {
    document.getElementById("b2").value = "x";
    document.getElementById("b2").disabled = true;
    flag = 0;
  } else if (flag == 0) {
    document.getElementById("b2").value = "0";
    document.getElementById("b2").disabled = true;
    flag = 1;
  }
}

function myfunc5() {
  if (flag == 1) {
    document.getElementById("b3").value = "x";
    document.getElementById("b3").disabled = true;
    flag = 0;
  } else if (flag == 0) {
    document.getElementById("b3").value = "0";
    document.getElementById("b3").disabled = true;
    flag = 1;
  }
}

function myfunc6() {
  if (flag == 1) {
    document.getElementById("b4").value = "x";
    document.getElementById("b4").disabled = true;
    flag = 0;
  } else if (flag == 0) {
    document.getElementById("b4").value = "0";
    document.getElementById("b4").disabled = true;
    flag = 1;
  }
}

function myfunc7() {
  if (flag == 1) {
    document.getElementById("b5").value = "x";
    document.getElementById("b5").disabled = true;
    flag = 0;
  } else if (flag == 0) {
    document.getElementById("b5").value = "0";
    document.getElementById("b5").disabled = true;
    flag = 1;
  }
}

function myfunc8() {
  if (flag == 1) {
    document.getElementById("b6").value = "x";
    document.getElementById("b6").disabled = true;
    flag = 0;
  } else if (flag == 0) {
    document.getElementById("b6").value = "0";
    document.getElementById("b6").disabled = true;
    flag = 1;
  }
}

function myfunc9() {
  if (flag == 1) {
    document.getElementById("b7").value = "x";
    document.getElementById("b7").disabled = true;
    flag = 0;
  } else if (flag == 0) {
    document.getElementById("b7").value = "0";
    document.getElementById("b7").disabled = true;
    flag = 1;
  }
}

function myfunc10() {
  if (flag == 1) {
    document.getElementById("b8").value = "x";
    document.getElementById("b8").disabled = true;
    flag = 0;
  } else if (flag == 0) {
    document.getElementById("b8").value = "0";
    document.getElementById("b8").disabled = true;
    flag = 1;
  }
}

function myfunc11() {
  if (flag == 1) {
    document.getElementById("b9").value = "x";
    document.getElementById("b9").disabled = true;
    flag = 0;
  } else if (flag == 0) {
    document.getElementById("b9").value = "0";
    document.getElementById("b9").disabled = true;
    flag = 1;
  }
}
