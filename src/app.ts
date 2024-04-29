const userName = "Max";
// userName = 'Chris';
let age = 30;

age = 29;

const add = (a: number, b: number = 1) => a + b;

console.log(add(2, 5));

const printOutput = (output: string | number) => {
  console.log(output);
};
const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}
