const passwordForm = document.getElementById('password-setup')
const passwordLength = document.querySelector('input[type="number"]')
const generateButton = document.querySelector('input[type="submit"]')

const uppercase = new Array(26).fill(65).map((x, idx) => String.fromCharCode(x + idx))
const lowercase = new Array(26).fill(97).map((x, idx) => String.fromCharCode(x + idx))
const numbers = new Array(10).fill(0).map((x, idx) => (x+idx).toString())
const specials = "~!@#$%^&*()-+=<.,>?/".split("")

function getRandom(arr) {
    return arr[Math.floor(Math.random()*arr.length)]
} 

function generatePassword(length) {
    let validSet = []
    const checkboxes = passwordForm.querySelectorAll('input[type="checkbox"]')
    for(let checkbox of checkboxes) {
        if(checkbox.checked) {
            switch(checkbox.getAttribute('name')) {
                case 'uppercase':
                    validSet.push(uppercase)
                    break
                case 'lowercase':
                    validSet.push(lowercase)
                    break
                case 'numbers':
                    validSet.push(numbers)
                    break
                case 'specials':
                    validSet.push(specials)
                    break
            }
        }
    }
    let generatedPass = ""
    for(let i = 0; i < length; i++) {
        generatedPass += getRandom(validSet.flat())
    }
    return generatedPass
}

passwordLength.addEventListener('change', (e) => {
    const [current, min, max] = [e.target.value, passwordLength.getAttribute('min'), passwordLength.getAttribute('max')]
    if(current > max) passwordLength.value = max
    else if(current < min) passwordLength.value = min
})

generateButton.addEventListener('click', () => {
    output.textContent = generatePassword(parseInt(passwordLength.value))
})