const fs = require("fs");
const inquirer= require("inquirer");
const questions = [
    {
        Type:"input",
        name: "name",
        message: "What is your name?"
    },
    {
        Type:"input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        Type:"input",
        name:"email",
        message:"What is your email address?",
    },
    {
        Type:"input",
        name: "project",
        message: "What is your project's name?"
    },
    {
        Type:"input",
        name: "Installation",
        message: "Are there any files or programs that need to be installed for this project?"
    },
    {
        Type:"input",
        name: "discription",
        message:"Please write a short description of your project"
    },
    {
        type: "list",
        message: "What kind of license should your project have?(Please choose one of below options !)",
        choices: ["MIT License","Apache License", "GPLLicense", "None"],
        name: "license",
      },

    {
        Type:"input",
        name:"dependencies",
        message:"What command should be run to install dependencies?"
    },
    {
        Type:"input",
        name:"test",
        message:"What command should be run to run tests?"
    },
    {
        Type:"input",
        name:"repo",
        message:"What does the user need to know about using repo?"
    },
    {
        Type:"input",
        name:"contribution",
        message:"What does the user need to know about contributing to the repo?"
    },
]

inquirer.prompt(questions).then(function(answer) {
    fs.appendFileSync("README.md", `## MY COOL PROJECT;## Created by :  \n  ${answer.name} \n## Project name: \n${answer.project}\n## GitHub project unsername : \n ${answer.username} \n## Table of contentst:\n*[Installation](#Installation)\n*[Usage](#Usage)\n*[License](#What kind of license have been used for this project)\n*[Contribution](#Usage)\n*[Tests](#What kind of Test needs to be done for this project)\n*[Questions](#project Questions)\n \n## Installation:  \n ${answer.Installation}\n## Usage: \n ${answer.discription} \n## License: \n ${answer.license} \n## Contribution: \n ${answer.contribution} \n## About: \n ${answer.repo}  \n`, function(err){
        if (err) {console.log("Something went wrong!!!");   
        }else{"README.md file successfully has been created for you, please check README.md file..."};
    })
});