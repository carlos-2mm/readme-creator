// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/generateMarkdown')

// Array of questions for user input
console.log('You need to answer a number of questions in order to generate a professional README.md file.')
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'editor',
        name: 'description',
        message: 'Give a description of your project:'
      },
      {
        type: 'editor',
        name: 'installation',
        message: 'Enter a valid installation instructions for your project:'
      },
      {
        type: 'editor',
        name: 'usage',
        message: 'Provide instructions and examples for use. If necessary, include screenshots:'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter a contribution guidelines for your project:'
      },
      {
        type: 'editor',
        name: 'credits',
        message: 'Enter your collaborators, used technologies, and third-party assets, if any, to your project:',
      },
      {
        type: 'editor',
        name: 'test',
        message: 'Enter the test instructions for your project:'
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
        message: 'Enter your GitHub username:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
      },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log('Succesfully created README.md')
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
  })
  .catch(err => {
    console.error('An error occurred during the prompt:', err);
  });
}

// Function call to initialize app
init();
