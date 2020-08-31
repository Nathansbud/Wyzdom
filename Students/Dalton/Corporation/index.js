import inquirer from 'inquirer'
import fs from 'fs'

const splitCommas = (str) => str.split(",").map(r => r.split("|").map(r => r.trim()))
function makeEmployee(c, fields) {
    return new c(...fields)
}


function buildOutput(employees) {
    return `<!DOCTYPE html>
    <html>
        <head>
            <title>Company Structure</title>
        </head>
        <body>
            ${employees.map(employee => buildEmployeeHTML(employee)).join("<br>")}
        </body>
    </html>
    `
}

function buildEmployeeHTML(employee) {
    return `<table class='employee'>
        <thead>
        <tr><th><h1 class='name'>${employee.name}</h1></th></tr>
        <tr><th><h2 class='role'>${employee.getRole()}</h2></th></tr>
        </thead>
        <tbody>
            <tr><td class='id'>ID: ${employee.id}</td></tr>
            <tr><td class='email'>Email: <a href='mailto:${employee.email}'>${employee.email}</a></td></tr>
            <tr><td class='unique'>${employee.getUnique()}</td></tr>
        </tbody>
    </table>
    `
}


inquirer.prompt([
    {name: "manager", message: "Team Manager - Name | ID | Email | Office #: "},
    {name: "engineers", message: "Engineers - Name | ID | Email | GitHub; Comma-Separated: "},
    {name: "interns", message: "Interns - Name | ID | Email | School; Comma-Separated: "}
]).then(response => {
    const manager = makeEmployee(Manager, splitCommas(response.engineers)[0])
    const engineers = splitCommas(response.engineers).map(engineer => makeEmployee(Engineer, engineer))
    const interns = splitCommas(response.interns).map(intern => makeEmployee(Intern, intern))
    
    console.log(buildOutput([manager, engineers, interns].flat()))
    
    fs.writeFile('company.html', buildOutput([manager, engineers, interns].flat()), (err) => {
        if(err) return console.log(err)
        console.log("Created company structure!")
    })
})

class Employee {
    constructor(name, id, email) {
        this._name = name
        this._id = id
        this._email = email
    }
    
    get name() {return this._name}
    set name(n) {this._name = n}

    get email() {return this._email}
    set email(e) {this._email = e}
    
    get id() {return this._id}
    set id(idx) {this._id = idx}
    
    getRole() {return "Employee"}
    getUnique() {return null}
}

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this._officeNumber = officeNumber
    }

    get officeNumber() {return this._officeNumber}
    set officeNumber(on) {this._officeNumber = on}
    getRole() {return "Manager"}
    getUnique() {return `Office #: ${this._officeNumber}`}
}

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this._github = github
    }

    get github() {return this._github}
    set github(gh) {this._github = gh}

    getRole() {return "Engineer"}
    getUnique() {return `GitHub: <a href="https://github.com/${this._github}">${this._github}</a>`}
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this._school = school
    }

    get school() {return this._school}
    set school(s) {this._school = s}

    getRole() {return "Intern"}
    getUnique() {return `University: ${this._school}`}
}
