let params = new URLSearchParams(window.location.search)
let id = params.get("id")

fetch(`http://localhost:3000/powers/${id}`)
    .then(response => response.json())
    .then(power => {
        let h1 = document.createElement("h1")

        h1.innerText = power.name
        
        let powerdescription = document.createElement("h2")
        powerdescription.innerText = power.description

        document.body.append(h1, powerdescription)
    
        function showName(heroines){
            power.heroines.forEach(heroine => {
                let h1 = document.createElement("li")
                h1.innerText = heroine.name    
                document.body.appendChild(h1)
            })
        }
        showName()
    })
        
    

    