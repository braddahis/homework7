// TODO: Include packages needed for this application

const fs=require("fs")
const path=require("path")
const inquirer=require("inquirer")
const generateMarkdown=require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the Title of your Project?",
    },
    {
        type: "input", 
        name: "github",
        message: "What is your GitHub username?",
    },
    { 
        type: "list",
        name: "license",
        message: "What kind of license would you like your project to have?",
        choices: ["MIT", "Apache", "GPL", "BSD", "NONE"]
    },
    {
        type: "input",
        name: "description",
        message: "Please give description of project?",
    },
    {
        type: "input",
        name: "installation",
        message: "What type of Installion will you be using?",
    },
    {
        type: "input",
        name: "contributing",
        message: "Who will be contributing to the project?",
    },
    {
        type: "input",
        name: "test",
        message: "What type of test will this project be?"
    },
    {
        type: "input",
        name: "TableOfContents",
        message: "Here is your table of contents",
    },
    {
        type: "input",
        name: "questions",
        message: "Do you have any questions regarding the project?",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address?"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userResponses)=>{
        console.log("generatingReadME")
        writeToFile("ReadME.md", generateMarkdown({...userResponses}))
    })
}

// Function call to initialize app
init();
