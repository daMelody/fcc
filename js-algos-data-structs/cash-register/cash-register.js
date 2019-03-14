// Cash Register Challenge from FreeCodeCamp

function checkCashRegister(price, cash, cid) {
  let register = new Register();
  var change = cash - price;
  var values = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];

  // get registerTotal
  var registerTotal = 0;
  for (let i=0; i<cid.length; i++) {
    registerTotal += cid[i][1];
  }

  // round registerTotal to nearest cent
  registerTotal = Math.round(100*registerTotal)/100;
}
