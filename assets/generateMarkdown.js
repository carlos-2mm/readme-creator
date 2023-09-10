// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache 2.0':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPLv3':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'BSD 3-Clause':
      return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    default:
      return '';
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'BSD 3-Clause':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None' || !license) {
    return '';
  }
  return `## License

This project is licensed under the ${license} license.

For more information see [this link](${renderLicenseLink(license)}).
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

---

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contribution)
* [Credits](#credits)
* [Features](#features)
* [Test](#tests)
* [License](#license)
* [Questions](#questions)

---

## Installation

${data.installation}

---

## Usage

${data.usage}

---

## Contribution

${data.contribution}

---

## Credits
${data.credits}

---

## Tests

${data.test}

---

${renderLicenseSection(data.license)}

---

## Questions

- GitHub: Please visit my GitHub profile:
[${data.github}](https://github.com/${data.github})
- Email: For clarifications or questions about this project, please send an email to:
 ${data.email}
`;
}


module.exports = generateMarkdown;