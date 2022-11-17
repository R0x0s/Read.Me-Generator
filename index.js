// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const { title, cpuUsage } = require('process');
// TODO: Create an array of questions for user input
inquirer.prompt([  
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        input: 'input',
        name: 'discription',
        message: 'Now type the description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Now please describe the installation instructions',
    },
    {
        input: 'input',
        name: 'usage',
        message: 'What are the uses of your application',
    },
    {
        type: 'input',
        name: 'contribution-guide',
        message: 'Please type the contribution guidlines here'
    },
    {
        type: 'input',
        name: 'test-instructions',
        message: 'Enter the test instructions ',

        type: 'list',
        name: 'license',
        message: 'what licenses are used here',
        choices: [ 'Apache License 2.0', 'BSD 3-Clause "New" or "Revised" license', 'BSD 2-Clause "Simplified" or "FreeBSD" license',
         'GNU General Public License (GPL)', 'GNU Library or "Lesser" General Public License (LGPL)', 'MIT license', 'Mozilla Public License 2.0',
        'Common Development and Distribution License', 'Eclipse Public License version 2.0',],
    },
    { type: 'input',
      name: 'github',
      message: 'What is your github username',

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email associated with your github?',
    },
]).then((responses) => {
    let contents = fs.readFileSync("template.html", "utf8");

/*  const {  } = responses;
    contents = contents.replace("{title}", title);
    contents = contents.replace("{discriptoin}",discription )
    contents = contents.replace("{installation}", installation)
    contents = contents.replace("{usage}", usage)
    contents = contents.replace("{contribution-guide}", contribution-guide)
    contents = contents.replace("{}")
    console.log(contents); jkaSDlkjaSHDAKSLJDHASKLJDHALJKSDHJLK
    wadsdawdsdawda*/
 
    for (const [key, value] of Object.entries(responses)) {
        contents = contents.replace(`{${key}}`, value);
    }

    fs.writeFileSync("template.html", contents);
    console.log("All done");

});



      // Prompt couldn't be rendered in the current environment
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
