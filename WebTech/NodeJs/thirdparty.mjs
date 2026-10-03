import chalk from "chalk"
import validator from  "validator";
console.log(chalk.red("Hello Friends"));
console.log(chalk.red.bgCyan("Hello Friends"));
console.log(chalk.italic.blueBright("Hello Friends"));
console.log(chalk.italic.blueBright.bgGrey.underlineCurly("Hello Friends"));


let msg = "";
console.log(validator.isEmpty(msg));
msg = "Friends"
console.log(validator.isEmpty(msg));

let email = "abcgmail.com";

console.log(validator.isEmail(email));
email = "abc@gmail.com"
console.log(validator.isEmail(email));
