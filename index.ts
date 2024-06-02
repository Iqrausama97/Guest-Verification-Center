#! usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.underline('\n\tWelcome to Guest Verification Center\t\n'));

let myLoop = true;

let myInvitedGuestsList = ['mohsin','jameel','shaista','anoosha','rimsha','hania','rahat','zubaida']

while(myLoop){
    let guestInput = await inquirer.prompt({
        type: 'input',
        name: 'guestName',
        message: 'Enter your name to verify'
    });
    let userName = guestInput.guestName
    let toLowerCase = userName.toLowerCase();

    if (myInvitedGuestsList.includes(toLowerCase)){
        console.log(chalk.greenBright(`\n\tWelcome! ${userName} You are invited for today's event.\t\n`));
        myLoop = false;
    }else{
        console.log(chalk.redBright(`\n\tSorry! ${userName} You are not invited for today's event.\t\n`));
        let askNameAgain = await inquirer.prompt({
            type: 'confirm',
            name: 'askAgain',
            message: 'Do you want to verify another name? if so you can enter name!',
            default: false
        });
        if(!askNameAgain.askAgain){
            myLoop = false
            console.log(`\nWe apologize, but you are not in guest list. Please contact to event organizer\n`);
            
        }
    }
}
