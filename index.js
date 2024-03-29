#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 3456;
console.log(`YOUR BALANCE IS ${myBalance}`);
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin:",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "plaese select option ",
            type: "list",
            choices: ["withdraw", "check your blance", "fast cash amount"],
        }
    ]);
    //withdraw
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: " Enter your amount ",
                type: " number",
            }
        ]);
        // >
        if (amountAns.amount > myBalance) {
            console.log(`You only have  ${myBalance}  ,Oopps!you cannot withdraw this amount:`);
            console.log(`"your balance insufficient for this amount:"  `);
            // -=
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`"Your remaining balance is : "${myBalance}`);
        }
        //check balance:
    }
    else if (operationAns.operation === "check your balance") {
        console.log(`"your balance is:"${myBalance}`);
    }
    //fast cash amount;
    else if (operationAns.operation === "fast cash amount") {
        let fastamount = await inquirer.prompt({
            name: "fastcashamount",
            message: "select your amount ",
            type: "list",
            choices: ["500", "1000", "5000", "8000"],
        });
        if (fastamount.fastchashamount > myBalance) {
            console.log(`"your sufficient balance is:"  ${myBalance}`);
        }
        else {
            myBalance -= fastamount.fastcashamount;
            console.log(`you have "SUCCESSFULLY"! withraw ${fastamount.fastcashamount} from your account`);
            console.log(`your remainning balance is: ${myBalance}`);
        }
    }
}
else {
    console.log("please  Enter your CORRECT  pin code !!");
}
