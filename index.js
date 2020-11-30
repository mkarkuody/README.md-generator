const fs = require("fs");
const inquirer= require("inquirer");
const questions = [
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
        name: "discription",
        message:"Please write a short description of your project"
    },

    {
     Type:"checkbox",
  message:"What kind of license should your project have?",
     name:"license",
            choices: 
            [
                "MIT License",
                "Apache License",
                "GPLLicense",
                "None"
            ]
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
console.clear();
inquirer.prompt(questions).then(function(answer){
    fs.appendFileSync("./README.md", ("## Project unsername :  " + answer.username +"\n",
    "## Email : " + answer.email +"\n",
    "## The project name :  " + answer.project +"\n", function(err){
        if (err) { console.log(err);
            
        }
    }))
});

// inquirer.prompt(questions).then(response=>{
//     fs.appendFileSync(__dir/"README.md", ("## Email : " + response.email +"\n", function(err){
//         if (err) { console.log(err);
            
//         }
//     }))
// })
// inquirer.prompt(questions).then(response=>{
//     fs.appendFileSync(__dir/"README.md", ("## The project name :  " + response.project +"\n", function(err){
//         if (err) { console.log(err);
            
//         }
//     }))
// })
// inquirer.prompt(questions).then(response=>{
//     fs.appendFileSync(__dir/"README.md", ("## Discription : " + response.discription +"\n", function(err){
//         if (err) { console.log(err);
            
//         }
//     }))
// })
// inquirer.prompt(questions).then(response=>{
//     fs.appendFileSync(__dir/"README.md", ("## The license for this project :  " + response.license +"\n", function(err){
//         if (err) { console.log(err);
            
//         }
//     }))
// })
// inquirer.prompt(questions).then(response=>{
//     fs.appendFileSync(__dir/"README.md", ("## Dependencies for this project :  " + response.dependencies +"\n", function(err){
//         if (err) { console.log(err);
            
//         }
//     }))
// })
// inquirer.prompt(questions).then(response=>{
//     fs.appendFileSync(__dir/"README.md", ("## Test :  " + response.test +"\n", function(err){
//         if (err) { console.log(err);
            
//         }
//     }))
// })
// inquirer.prompt(questions).then(response=>{
//     fs.appendFileSync(__dir/"README.md", ("## The name of repository :  " + response.repo +"\n", function(err){
//         if (err) { console.log(err);
            
//         }
//     }))
// })
// inquirer.prompt(questions).then(response=>{
//     fs.appendFileSync(__dir/"README.md", ("## About contributing to the repo " + response.contribution +"\n", function(err){
//         if (err) { console.log(err);
            
//         }
//     }))
// })