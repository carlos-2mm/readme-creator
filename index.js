// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do users install your project?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do users use your project once it is installed?'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to your project?'
      },
      {
        type: 'input',
        name: 'test',
        message: 'How can users test your project?'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address?'
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log('Succesfully created README.md')
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
  })
}

// Function call to initialize app
init();
