// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const generateMD = ({
  username,
  title,
  description,
  installation,
  usage,
  credit,
  license,
  githubprofile
}) =>
  `# ${title}

## Description
${description}


## Installation
${installation}


## Usage
${usage}


## Credits
${credit}

## License
${license}

## Questions
${username} [GitHub profile](${githubprofile})
`;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created markdownfile!")
  );
}
//

// TODO: Create a function to initialize app
async function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: "Enter your GitHub username",
      },
      {
        type: "input",
        name: "githubprofile",
        message: "Please provide a link to your github profile",
      },
      {
          type: 'input',
          name: 'title',
          message: 'Enter the title of your project',
      },
      {
          type: 'input',
          name: 'description',
          message: 'Enter in a description of your project',
      },
      {
          type: 'input',
          name: 'installation',
          message: 'Explain how a user would install',
      },
      {
          type: 'input',
          name: 'usage',
          message: 'Provide instructions on how to use your application'
      },
      {
          type: 'input',
          name: 'credit',
          message: 'List your collaborators, any third-part assets that require attirbution, any tutorials'
      },
      {
          type: 'list',
          name: 'license',
          message: 'Choose your license for your project.',
          // https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/licensing-a-repository
          choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']
      },
    ])
    .then((answers) => {
      const markdownContent = generateMD(answers);
      writeToFile("README.md", markdownContent);
    });
    // .then( markdown => {
    //     writeToFile("README.md", markdown);
    // });
}

// Function call to initialize app
init();
