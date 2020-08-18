const timestamps = [...Array.from(Array(9).keys()).map(ts => ((ts+9 < 12) ? (`${ts+9} AM`) : (`${(((ts+9) % 12 == 0) ? (12) : ((ts+9) % 12))} PM`)))]
let schedule = {}


window.onload = () => {
    loadSchedule()
    makeBlocks()
}

const sameDay = (d1, d2) => d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate()

function loadSchedule() {
    const lastDate = JSON.parse(localStorage.getItem("lastDate"))
    const savedSchedule = JSON.parse(localStorage.getItem("schedule"))

    if(savedSchedule && lastDate && sameDay(new Date(), new Date(Date.parse(lastDate)))) {
        schedule = savedSchedule
    } else if(!savedSchedule || lastDate && !sameDay(new Date(), new Date(Date.parse(lastDate)))) {
        timestamps.forEach(ts => schedule[ts] = "")
        localStorage.setItem('lastDate', JSON.stringify(new Date()))
        localStorage.setItem('schedule', JSON.stringify(schedule))
    }
}

function saveSchedule() {
    localStorage.setItem('schedule', JSON.stringify(schedule))
}

function makeBlocks() {
    const tbody = document.getElementById('entries')
    const hour = (new Date()).getHours()
    Object.entries(schedule).forEach(([ts, val], idx) => {
        const row = document.createElement('tr')
        if(idx + 9 < hour) {
            row.setAttribute('class', 'before')
        } else if(idx + 9 == hour) {
            row.setAttribute('class', 'now')
        } else if(idx + 9 > hour) {
            row.setAttribute('class', 'after')
        }
        
        const blockName = document.createElement('td')
        blockName.textContent = ts
        row.appendChild(blockName)
        
        const blockValue = document.createElement('td')
        const blockInput = document.createElement('input')
        blockInput.type = 'text'
        blockInput.value = val
        blockInput.setAttribute('data-prior', val)

        blockValue.appendChild(blockInput)
        row.append(blockValue)

        const blockUpdate = document.createElement('td')
        
        const blockSubmit = document.createElement('button')
        const blockRevert = document.createElement('button')
        
        blockSubmit.textContent = "Update"
        blockSubmit.setAttribute('data-block', ts)
        blockSubmit.onclick = () => {
            blockInput.setAttribute('data-prior', blockInput.value)
            schedule[blockSubmit.getAttribute('data-block')] = blockInput.value
            saveSchedule()
        }

        blockRevert.textContent = "Revert"
        blockRevert.onclick = () => {
            blockInput.value = blockInput.getAttribute('data-prior')
            schedule[blockSubmit.getAttribute('data-block')] = blockInput.value
            saveSchedule()
        }

        blockUpdate.appendChild(blockSubmit)
        blockUpdate.appendChild(blockRevert)
        row.appendChild(blockUpdate)
        entries.appendChild(row)
    })
}
