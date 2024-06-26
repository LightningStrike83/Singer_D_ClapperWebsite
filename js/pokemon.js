(() => {

    const pokemonButton = document.querySelectorAll(".pokemon-button")
    const lichtButton = document.querySelector("#formal-licht")
    const casualButton = document.querySelector("#casual-licht")
    const pokemonImage = document.querySelector("#pokemon-image")

    let pokemonData = [
        {
            image : "chandelure",
            species : "Species: Chandelure",
            gender : "Gender: Male",
            nature : "Nature: -",
            ability : "Ability: Infiltrator",
            gimmick : "Gimmick: None",
            bio : "Story: -"
        },

        {
            image : "aegislash",
            species : "Species: Aegislash",
            gender : "Gender: Male",
            nature : "Nature: -",
            ability : "Ability: Stance Change",
            gimmick : "Gimmick: None",
            bio : "Story: "
        },

        {
            image : "dhelmise",
            species : "Species: Dhelmise",
            gender : "Gender: Non-binary",
            nature : "Nature: -",
            ability : "Ability: Steelworker",
            gimmick : "Gimmick: None",
            bio : "Story: "
        },

        {
            image : "basculegion",
            species : "Species: Basculegion",
            gender : "Gender: Female",
            nature : "Nature: -",
            ability : "Ability: Overgrow",
            gimmick : "Gimmick: None",
            bio : "Story: "
        },

        {
            image : "zoroark",
            species : "Species: Zoroark (Hisuian Form)",
            gender : "Gender: Female",
            nature : "Nature: -",
            ability : "Ability: Illusion",
            gimmick : "Gimmick: None",
            bio : "Story: "
        },

        {
            image : "dragapult",
            species : "Species: Dragapult",
            gender : "Gender: Male",
            nature : "Nature: -",
            ability : "Ability: Cursed Body",
            gimmick : "Gimmick: None",
            bio : "Story: "
        },

        {
            image : "blacephalon",
            species : "Species: Blacephalon",
            gender : "Gender: Non-binary",
            nature : "Nature: -",
            ability : "Ability: Beast Boost",
            gimmick : "Gimmick: None",
            bio : "Story: "
        },

        {
            image : "giratina",
            species : "Species: Giratina",
            gender : "Gender: Non-binary",
            nature : "Nature: -",
            ability : "Ability: Pressure/Levitate",
            gimmick : "Gimmick: Revival",
            bio : "Story: "
        },

        {
            image : "absol",
            species : "Species: Absol (??? Form)",
            gender : "Gender: Unknown",
            nature : "Nature: Unknown",
            ability : "Ability: Unknown",
            gimmick : "Gimmick: Unknown",
            bio : "Story: "
        },

        {
            image : "delphox",
            species : "Species: Delphox",
            gender : "Gender: Female",
            nature : "Nature: -",
            ability : "Ability: -",
            gimmick : "Gimmick: ",
            bio : "Story: "
        },

        {
            image : "greninja",
            species : "Species: Greninja",
            gender : "Gender: -",
            nature : "Nature: -",
            ability : "Ability: -",
            gimmick : "Gimmick: -",
            bio : "Story: "
        },

        {
            image : "swampert",
            species : "Species: Swampert",
            gender : "Gender: -",
            nature : "Nature: -",
            ability : "Ability: -",
            gimmick : "Gimmick: -",
            bio : "Story: "
        },

        {
            image : "decidueye",
            species : "Species: Decidueye",
            gender : "Gender: -",
            nature : "Nature: -",
            ability : "Ability: -",
            gimmick : "Gimmick: -",
            bio : "Story: "
        },

        {
            image : "absol",
            species : "Species: Absol (??? Form)",
            gender : "Gender: Unknown",
            nature : "Nature: Unknown",
            ability : "Ability: Unknown",
            gimmick : "Gimmick: Unknown",
            bio : "Story: "
        },

        {
            image : "marshadow",
            species : "Species: Marshadow",
            gender : "Gender: Non-binary",
            nature : "Nature: Unknown",
            ability : "Ability: Technician",
            gimmick : "Gimmick: Z-Move (Soul-Stealing 7-Star Strike)",
            bio : "Story: "
        },

        {
            image : "hoopa",
            species : "Species: Hoopa (Unbound)",
            gender : "Gender: Non-binary",
            nature : "Nature: Unknown",
            ability : "Ability: Magician",
            gimmick : "Gimmick: None",
            bio : "Story: "
        },

        {
            image : "zeraora",
            species : "Species: Zeraora",
            gender : "Gender: Non-binary",
            nature : "Nature: Unknown",
            ability : "Ability: Plasma Fists",
            gimmick : "Gimmick: None",
            bio : "Story: "
        },
    ]

    function displayInfo() {
        let pokemonImage = document.querySelector("#pokemon-image")
        let pokemonInstructions = document.querySelector("#pokemon-instructions")
        let imageDiv = document.querySelector("#pokemon-main-image")
        let bioDiv = document.querySelector("#pokemon-bio")
        let pokemonPic = document.createElement("img")
        let pokemonCredit = document.createElement("p")
        let pokemonSpecies = document.createElement("p")
        let pokemonGender = document.createElement("p")
        let pokemonNature = document.createElement("p")
        let pokemonAbility = document.createElement("p")
        let pokemonGimmick = document.createElement("p")
        let pokemonText = document.createElement("p")
        const styleButtons = document.querySelector("#style-buttons")

        bioDiv.style.display = "block"
        imageDiv.style.display = "flex"
        
        bioDiv.innerHTML = ""
        imageDiv.innerHTML = ""

        pokemonImage.style.display = "none"
        pokemonInstructions.style.display = "none"

        bioDiv.style.border = "1px solid #cccfd9"
        bioDiv.style.backgroundColor = "#44433f"

        pokemonPic.src = `images/${pokemonData[this.dataset.member].image}-main.png`
        pokemonCredit.textContent = "Art by ---"
        pokemonCredit.style.backgroundColor = "#44433f"
        //pokemonText.textContent = `${pokemonData[this.dataset.member].name}<br>${pokemonData[this.dataset.member].species}${pokemonData[this.dataset.member].ability}<br>${pokemonData[this.dataset.member].gimmick}<br>`
        pokemonSpecies.textContent = `${pokemonData[this.dataset.member].species}`
        pokemonGender.textContent = `${pokemonData[this.dataset.member].gender}`
        pokemonNature.textContent = `${pokemonData[this.dataset.member].nature}`
        pokemonAbility.textContent = `${pokemonData[this.dataset.member].ability}`
        pokemonGimmick.textContent = `${pokemonData[this.dataset.member].gimmick}`
        pokemonText.textContent = `${pokemonData[this.dataset.member].bio}`
        

        imageDiv.appendChild(pokemonPic)
        imageDiv.appendChild(pokemonCredit)
        bioDiv.appendChild(pokemonSpecies)
        bioDiv.appendChild(pokemonGender)
        bioDiv.appendChild(pokemonNature)
        bioDiv.appendChild(pokemonAbility)
        bioDiv.appendChild(pokemonGimmick)
        bioDiv.appendChild(pokemonText)

        styleButtons.style.order = "1"

        pokemonImage.style.display = "none"
    }
    
    function selectorAppear() {
        const lichtPokemon = document.querySelector("#pokemon-buttons-licht")
        const casualPokemon = document.querySelector("#pokemon-buttons-casual")
        let imageDiv = document.querySelector("#pokemon-main-image")
        let bioDiv = document.querySelector("#pokemon-bio")

        if (this === lichtButton) {
            if (lichtPokemon.style.display === "flex") {
                lichtPokemon.style.display = "none"
                casualPokemon.style.display = "none"
                pokemonImage.style.display = "flex"
                pokemonImage.style.order = "1"
                imageDiv.style.display = "none"
                bioDiv.style.display = "none"
            } else {
                lichtPokemon.style.display = "flex"
                casualPokemon.style.display = "none"
                pokemonImage.style.display = "none"
            }
            
        } else if (this === casualButton) {
            if (casualPokemon.style.display === "flex") {
                lichtPokemon.style.display = "none"
                casualPokemon.style.display = "none"
                pokemonImage.style.display = "flex"
                pokemonImage.style.order = "1"
                bioDiv.style.display = "none"
                imageDiv.style.display = "none"
            } else {
                lichtPokemon.style.display = "none"
                casualPokemon.style.display = "flex"
                pokemonImage.style.display = "none"
            }

            
        }
    }

    pokemonButton.forEach(button => button.addEventListener("click", displayInfo))
    lichtButton.addEventListener("click", selectorAppear)
    casualButton.addEventListener("click", selectorAppear)
})();