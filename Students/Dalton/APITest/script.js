fetch("https://chicken-coop.p.rapidapi.com/games?title=Enter%20the%20Gungeon", {
    headers: {
        "x-rapidapi-host": "chicken-coop.p.rapidapi.com",
        "x-rapidapi-key": "20becb9c70msh49f096ebfb3472dp18ca6bjsn9fb6543080e8",
        "useQueryString": true
    }}).then(v => v.json()).then(console.log).catch(console.log)

    