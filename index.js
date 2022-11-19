// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
//const Markdown = require('./Read.Me-Generator/readmeGen.js')
//const { title, cpuUsage } = require('process');
//const { create } = require('domain');
// TODO: Create an array of questions for user input
inquirer.prompt([  
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        //reminder to input a value 
        validate: (value)=>{ if(value){return true}else {return 'I need a value to continue'}}
    },
    {
        input: 'input',
        name: 'discription',
        message: 'Now type the description of your project',
        validate: (value)=>{ if(value){return true}else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Now please describe the installation instructions',
        validate: (value)=>{ if(value){return true}else {return 'I need a value to continue'}}
    },
    {
        input: 'input',
        name: 'usage',
        message: 'What are the uses of your application',
        validate: (value)=>{ if(value){return true}else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        name: 'contributionGuide',
        message: 'Please type the contribution guidlines here',
        validate: (value)=>{ if(value){return true}else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Enter the test instructions ',
        validate: (value)=>{ if(value){return true}else {return 'I need a value to continue'}}
    },
    {

        type: 'list',
        name: 'license',
        message: 'what licenses are used here',
        choices: [ 'Apache License 2.0', 'BSD 3-Clause "New" or "Revised" license', 'BSD 2-Clause "Simplified" or "FreeBSD" license',
         'GNU General Public License (GPL)', 'GNU Library or "Lesser" General Public License (LGPL)', 'MIT license', 'Mozilla Public License 2.0',
        'Common Development and Distribution License', 'Eclipse Public License version 2.0',],
        validate: (value)=>{ if(value){return true}else {return 'I need a value to continue'}}
    },
    { type: 'input',
      name: 'github',
      message: 'What is your github username',
      validate: (value)=>{ if(value){return true}else {return 'I need a value to continue'}}

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email associated with your github?',
        validate: (value)=>{ if(value){return true}else {return 'I need a value to continue'}}
    },
]).then(({
    title,
    discription,
    installation,
    usage,
    contributionGuide,
    testInstructions,
    license,
    github,
    email,
})=>{
// layout of READ ME
const template =  `## Table of Content
- [Project Discriptions](#discription)
- [Usage](#usage)
- [Contribution Guide](#contributionGuide)
- [Installation Guide](#installation)
- [Test Instructions](#testInstructions)
- [Licenses Used](#license)

## Project Discription
${discription}

## Usage
${usage}

## Contribution Guide
${contributionGuide}

## Installation Guide
${installation}

## Test Instructions
${testInstructions}

## Liceneses Used
${license}

# Contact
* Github : ${github}
* E-mail : ${email}`;
//function for making readme with fs
createNewFile(title,template);
});

//new file function
function createNewFile(filename,data){
    fs.writeFile(`./${filename.toLowerCase().split(' ').join(' ')}.md`,
    data,(err)=> {
        if(err){
            console.log(err)
        }
        console.log('Your ReadMe has been generated <3')
    })
};








/*
((responses) => {
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
 
   /* for (const [key, value] of Object.entries(responses)) {
        contents = contents.replace(`{${key}}`, value);
    }
    const writeToFile = data => {
        return new Promise((resolve, reject) => {
            // make a readme file and add to dist folder
            fs.writeFile('./readme-creator/README.md', data, err => {
                // if there's an error, reject the Promise and send the error to .catch() method
                if (err) {
                    reject (err);
                    // return out of the function here to make sure the Promise doesn't continue to execute the resolve() function
                    return;
                }
                // if everything went well, resolve the Promise and send the successful data to the .then() method
                resolve({
                    ok: true,
                    message: console.log('Success! Navigate to the "dist" folder to see your README!')
                });
            })
        })
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
init();*/
