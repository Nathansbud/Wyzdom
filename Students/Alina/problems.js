//1: Strings -> Set
const strSet = new Set(["Hi", "Hello", "Sup"])

//2: Invoke a Function Within HTML Page
const dataTable = document.getElementById('data-table')
const fetchButton = document.getElementById('fetch-data')
fetchButton.onclick = () => getDDBData() 

//3: Object Destructuring
const {title} = {count: 8, isValid: true, title: "Exam", temperature: 87.88}
console.log(title)

//4: Human Class
class Human {
    constructor(name, gender, height, eyeColor) {
        this.name = name
        this.gender = gender
        this.height = height
        this.eyeColor = eyeColor
    } 

    sayHi() {
        if(this.name) console.log(this.name)
    }
}

const alina = new Human('Alina', 'F', 180, 'blue')
alina.sayHi()

//6: Fetch from URL
const data = fetch("https://jsonplaceholder.typicode.com/posts").then(v => v.json()).then(console.log).catch(console.log)

//2, 7, & 8: Async / Await + Build Table
async function getDDBData() {
    dataTable.innerHTML = ""
    const ddbData = fetch("https://dork.nathansbud-cors.workers.dev/?https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com").then(v => v.json()).then(v => {
        let header = document.createElement('tr')
        Object.keys(v.domains[0]).forEach(h => {
            const th = document.createElement('th')
            th.textContent = h
            header.appendChild(th)
        })
        dataTable.appendChild(header)

        v.domains.forEach(d => {
            let tr = document.createElement('tr')
            Object.values(d).forEach(val => {
                let td = document.createElement('td')
                if(typeof val === 'string') td.textContent = val
                else td.textContent = JSON.stringify(val)
                tr.appendChild(td)
            })
            dataTable.appendChild(tr)
        })
        document.querySelector('body').appendChild(dataTable)
    }).catch(console.log)
}

//9: Rest Param Sum
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0)
}
