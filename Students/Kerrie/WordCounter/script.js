const contentArea = document.querySelector('#content-area')
const wordCount = document.querySelector('#word-count')
const formatButton = document.querySelector('#format')

function getFormatted(script) {
    let content = script
    for(let c of content.matchAll(/[0-9]{3,}/g)) {
        content = content.replace(c[0], c[0].split("").join(" "))
    }
    return content.trim()
}

contentArea.onkeydown = (e) => {
    wordCount.textContent = getFormatted(e.target.value).split(" ").length
    contentArea.value = getFormatted(contentArea.value)
}

formatButton.onclick = () => {
    contentArea.value = getFormatted(contentArea.value)
    contentArea.style.height = "1px"
    contentArea.style.height = `${25+contentArea.scrollHeight}px`
}