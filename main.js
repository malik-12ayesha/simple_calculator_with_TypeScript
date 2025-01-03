import inquirer from "inquirer";
let myBalance = 50000; //dollar
let myPin = 4567;
-console.log("welcome to my ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin ",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code !!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select options",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount}withdraw successfully`);
            console.log("your remaining balance is:" + myBalance);
        }
    }
    else if (operationAns.operation === "chack balance") {
        console.log(`your account balance is:${myBalance}`);
    }
}
else {
    console.log("incorrect pin number");
}
