const inquirer = require('inquirer')
const fs = require('fs')
const hr = "---\n"

inquirer.prompt([
  {name: "title", message: "Project Title: "},
  {name: "desc", message: "Description: "},
  {name: "installation", message: "Installation Instructions: "},
  {name: "license", message: "Choose a License:", type: "list", choices: ["MIT", "Cool Dude", "None"]},
  {name: "usage", message: "Usage Information: "},
  {name: "contributing", message: "Contribution Guidelines: "},
  {name: "tests", message: "Testing: "},
  {name: "username", message: "GitHub Username: "},
  {name: "email", message: "Email: "}
]).then(responses => {
  let output = ""
  output += `# ${responses.name}\n`
  // output += hr
  output += `${responses.desc}\n`
  output += hr
  // output += `## Description\n`
  output += `## Table of Contents\n`
  const options = ["Installation", "Usage", "License", "Contributing", "Tests", "Questions"]
  options.forEach(element => output += `* [${element}](#${element})\n`)
  for(let [i, opt] of options.entries()) {
    output += `## ${opt}\n`
    if(i < options.length - 1) output += `${responses[opt.toLowerCase()]}\n`
  }

  output += "### Email\n"
  output += `Address any concerns to ${responses.email}\n`
  output += "### GitHub\n"
  output += `Find me [@${responses.username}](https://github.com/${responses.username})`


  fs.writeFile("README.md", output, (err) => {
    if(err) return console.log(err)
    console.log("Created file README.md!")
  })
})