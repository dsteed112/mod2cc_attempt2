//console.log("hit")
let powerSelector = document.querySelector("#dropdown")

fetch("http://localhost:3000/heroines")
    .then(response => response.json())
    //.then(console.log)
    .then(displayHeroines)

function displayHeroines(heroines){
    heroines.forEach(heroine => {
        const h2 = document.createElement("h2")
        h2.innerHTML = `<a href=heroine.html?id=${heroine.id}>${heroine.name}</a>`
        document.body.append(h2)
    })    
}

fetch("http://localhost:3000/powers")
    .then(response => response.json())
    .then(powerlist)

function powerlist(powers){
    powers.forEach(power =>{
        let option = document.createElement("option")
        option.textContent = power.name
        option.value = power.id
        powerSelector.appendChild(option)
    })
}