// atm machine project
import inquirer from "inquirer";

let balance = 1100; // Initial balance

async function main() {
    const actions = [
        "Check Balance",
        "Deposit Money",
        "Withdraw Money",
        "Exit"
    ];

    while (true) {
        const answer = await inquirer.prompt([
            {
                type: "list",
                name: "action",
                message: "What would you like to do?",
                choices: actions
            }
        ]);

        switch (answer.action) {
            case "Check Balance":
                console.log(`Your current balance is $${balance}`);
                break;
            case "Deposit Money":
                const deposit = await inquirer.prompt([
                    {
                        type: "number",
                        name: "amount",
                        message: "Enter the amount to deposit:"
                    }
                ]);
                balance += deposit.amount;
                console.log(`You have deposited $${deposit.amount}. Your new balance is $${balance}`);
                break;
            case "Withdraw Money":
                const withdraw = await inquirer.prompt([
                    {
                        type: "number",
                        name: "amount",
                        message: "Enter the amount to withdraw:"
                    }
                ]);
                if (withdraw.amount > balance) {
                    console.log("Insufficient funds!");
                } else {
                    balance -= withdraw.amount;
                    console.log(`You have withdrawn $${withdraw.amount}. Your new balance is $${balance}`);
                }
                break;
            case "Exit":
                console.log("Thank you for using the ATM. Goodbye!");
                return;
        }
    }
}

main();