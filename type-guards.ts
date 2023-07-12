// function isString(variable: any) {
//   return typeof variable === "string";
// }

// function example(variable: any) {
//   if (isString(variable)) {
//     console.log(variable.length); // variable is of type any
//   }
// }

function isString(variable: any): variable is string {
  return typeof variable === "string";
}

function example(variable: any) {
  if (isString(variable)) {
    console.log(variable.length); // variable is of type string
  }
}

function isStringAssertion(variable: any): asserts variable is string {
  if (typeof variable !== "string") throw new Error("Not a string");
}

function example1(variable: any) {
  isStringAssertion(variable);
  console.log(variable.length); // variable is of type string
}
