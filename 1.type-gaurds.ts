function isString(test: any): test is string {
  return typeof test === "string";
}

function example(foo: any) {
  if (isString(foo)) {
    console.log("it is a string" + foo);
    console.log(foo.length); // string function
  }
}

function isStringAssertion(test: any): asserts test is string {
  if (typeof test !== "string") throw new Error("Not a string");
}

function example1(bar: any) {
  isStringAssertion(bar);

  console.log("it is a string" + bar);
  console.log(bar.length); // string function
}
