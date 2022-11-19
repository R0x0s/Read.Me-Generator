/*
IGNORE THIS JS FILE IT DOES NOTHING TO THE PROJECT
WILL COME BACK TO IT AND MAKE STATIC FUNCTIONS WORK PROPERLY AFTER
READING UP ON IT AND LEARNING SOME MORE ABOUT THEM 
*/



class Markdown {
    statc
    static makeBadge(license) {
        const badges = {

        }
        return badges[license]
    }
    static generateReadme(answers) {
        return `
        # ${answers.title}

        ${this.makeBadge(answers.license)}

        ## Table of Content
        - [Project Discriptions](#discription)
        - [Usage](#usage)
        - [Contribution Guide](#contribution-guide)
        - [Installation Guide](#installation)
        - [Test Instructions](#test-instructions)
        - [Licenses Used](#license)
    
        ## Project Discription
        ${answers.description}

        ## Usage
        ${answers.usage}

        ## Contribution Guide
        ${answers.installation}

        ## Installation Guide
        ${answers.installation}

        ## Test Instructions
        ${answers.test-instructions}

        ## Liceneses Used
        ${answers.license}
        `
    }
    }
    
module.exports = Markdown