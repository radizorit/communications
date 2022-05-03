//!Darkne55Darkne55
//!6003AlessandroAve
const { validate } = require('./modules/validate.js');
const { send } = require('./modules/send.js');
const { sendTwilio } = require('./send_sms.js');

const inquirer = require('inquirer');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
Have 2 questions
    What is the message to send
    Email or phone number?

    Validate the response --> validation module
    Check if it is email or phone number
    Send

    Send function
        2 modes:
            all numbers --> text //Twilio
            all string --> email //SendGrid
    put it in aws
    webhook --> gives us a status update when talking to twilio and sendgrid

    end point for twiliio and sendgrid so i can get status update

    BUILD SKELETON FOR FUNCTIONS:
        LIKE SEND function--> email sending
        verification function
        questions ask 


        MODULATIZE SENDING AND VALIDATION --> console.log everything
        twilio, sendgrid, dotenv --> use dotenv to hide keys
*/

const questions = [
    {
        type: 'input',
        name: 'message',
        message: "What is the message you want to send to someone?",
    },
    {
        type: 'input',
        name: 'destination',
        message: "What is their email or text?",
    },
];

function ask() {
    return new Promise((resolve) => {
        inquirer.prompt(questions).then(answers => {
            resolve(answers)
        });
    })
}

async function main() {
    let response
    response = await ask()
    console.log(response)
    if (validate(response) == 'email') {
        send(response, 'email')
    } else if (validate(response) == 'phone') {
        await sendTwilio(response)
    }
    rl.close();
}

main()

