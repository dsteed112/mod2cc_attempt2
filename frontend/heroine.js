let params = new URLSearchParams(window.location.search)
let id = params.get("id")

fetch(`http://localhost:3000/heroines/${id}`)
    .then(response => response.json())
    .then(heroine => {
        let h1 = document.createElement("h1")

        h1.innerText = heroine.name
        
        let showsupername = document.createElement("h2")
        showsupername.innerText = heroine.super_name

        document.body.append(h1, showsupername)

        let powername = document.createElement("h3")
        powername.innerHTML = `<a href=power.html?id=${heroine.power.id}>${heroine.power.name}</a>`

        document.body.append(powername)
    })