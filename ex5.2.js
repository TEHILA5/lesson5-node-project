import fs from 'fs' 
import colors from 'colors';

const data = fs.readFileSync('./products.txt', 'utf8');
const products = data.split('\n');

console.log(colors.red(products[0]));
console.log(colors.inverse(products[1]));
console.log(colors.rainbow(products[2]));
console.log(colors.zebra(products[3]));
console.log(colors.america(products[4])); 

colors.setTheme({
  myStyle:['green','underline']
});
console.log(colors.myStyle('Tehila'))