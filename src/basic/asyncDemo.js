function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}
asyncCall();

//You can't use the async keyword in an arrow function before the declaration
//Consider moving it before the parenthesis.

//Arrow functions have no name, but you can assign them to a variable like this:
const asyncArrowFunctionCall = async () => {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
};
asyncArrowFunctionCall();
