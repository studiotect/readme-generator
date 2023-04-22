// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");
const { default: Choices } = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input

// function generate(title, description, installation, usage, license, contributing, tests, questions)

// const title = title
// const questions = [Description, Installation, Usage, License, Contributing, Tests, Questions];

inquirer.prompt([
    {
      type: "input",
      message: "What is the title of the project?",
      name: "title"
    },
    {
      type: "input",
      message: "Enter a description of the project:",
      name: "description"
    },
    {
      type: "input",
      message: "How do you install it?",
      name: "installation"
    },
    {
      type: "input",
      message: "When should you use it?",
      name: "usage"
    },
    {
      type: "list",
      message: "What license do you want to use?",
      name: "license",
      choices: ["MIT", "GNU", "IBM"]
    },
    {
      type: "input",
      message: "Who contributed to the project?",
      name: "contributing"
    },
    {
      type: "input",
      message: "How do you test your program?",
      name: "tests"
    },
    {
      type: "input",
      message: "If you have questions contact me at:",
      name: "github"
    },
    {
      type: "input",
      message: "or email me at:",
      name: "email"
    }
  ])
  .then((res) => {
    console.log(res.title, res.description, res.installation, res.usage, res.license, res.contributing, res.tests, res.github, res.email)
    fs.writeFileSync("README.md", generateMarkdown(res))
  })

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();
