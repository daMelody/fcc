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

  // iterate through cid to build newCID
  var newCID = new Array();
  for (let v=cid.length-1; v>=0; v--) {
    // ensure money values have proper form
    registerTotal = Math.round(100*registerTotal)/100;
    change = Math.round(100*change)/100;
  }

  // check values[v] is a useful currency unit
  if (values[v] < change) {
    // find max value for currency unit
    var max = Math.floor(change/values[v]);
    var maxAllowed = cid[v][1]/values[v];

    // take the lesser of the two values
    if (max > maxAllowed) {
      cid[v][1] = maxAllowed * values[v];
      registerTotal -= maxAllowed * values[v];
      change -= maxAllowed *values[v];
    } else {
      cid[v][1] = max * values[v];
      registerTotal -= max * values[v];
      change -= max * values[v];
    }
    // push updated cid[v] element onto newCID
    newCID.push(cid[v]);
  }

  // determine register state
  if (registerTotal < change || change != 0) {
    register.status = "INSUFFICIENT_FUNDS";
    register.change = [];
  } else if (registerTotal == change) {
    register.status = "CLOSED";
    register.change = cid;
  } else {
    register.status = "OPEN";
    register.change = newCID;
  }
  // return register object
  return register;
}

// the register object
function Register() {
  this.status = "";
  this.change = [];
}
