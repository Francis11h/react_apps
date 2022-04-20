
// union type
// function printId(id: number | string) {
//   console.log("Your ID is: " + id);
// }
// printId(10)
// printId("francis")


// 范型
interface Box<T> {
  contents: T;
}
let boxA: Box<string> = { contents: "hello" };
console.log(boxA.contents)



