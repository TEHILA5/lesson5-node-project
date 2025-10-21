import fs from 'fs';
import leftPad from 'left-pad';
import { upperCase } from 'upper-case';

for(let i=1;i<=15;i++)
{
    if(i%2==1)
        console.log(upperCase(leftPad('hello world', 'hello world'.length + i)));
    else
        console.log(leftPad('hello world', 'hello world'.length + i));
}
fs.appendFileSync('./HelloWorld.txt','', 'utf8');
for(let i=1;i<=15;i++)
{
    fs.appendFileSync('./HelloWorld.txt',leftPad('hello world', 'hello world'.length + i), 'utf8');
}
//ההערה מסמלת שזו ספריה ישנה שאפשר כבר לא להוריד אותה ולהשתמש בפקודת קוד שעושה את אותה פעולה.
