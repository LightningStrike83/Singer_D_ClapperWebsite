(() => {
    
    const trainerButtons = document.querySelectorAll(".trainer-button")

    let trainerData = [
        {
            image : "ringmaster",
            side : "Ringmaster Attire",
            design : "Outfit Design by: ---",
            position : "Main Team: Chandelure, Aegislash, Dhelmise, Basculegion, Zoroark, Dragapult",
            description: "Bio: ---",
        },

        {
            image : "civilian",
            side : "Civilian Attire",
            design : "Outfit Design by: ---",
            position : "Main Team: Delphox, Greninja, Swampert, Decidueye",
            description: "Bio: ---",
        },

    ]

    function displayInfo() {
        let trainerImage = document.querySelector("#trainer-image")
        let trainerInstructions = document.querySelector("#trainer-instructions")
        let imageDiv = document.querySelector("#trainer-main-image")
        let bioDiv = document.querySelector("#trainer-bio")
        let trainerPic = document.createElement("img")
        let trainerCredit = document.createElement("p")
        let sideText = document.createElement("p")
        let designText = document.createElement("p")
        let positionText = document.createElement("p")
        let bioText = document.createElement("p")

        imageDiv.innerHTML = ""
        bioDiv.innerHTML = ""

        trainerImage.style.display = "none"
        trainerInstructions.display = "none"

        bioDiv.style.border = "1px solid #cccfd9"
        bioDiv.style.backgroundColor = "#44433f"

        trainerPic.src = `images/${trainerData[this.dataset.member].image}-main.png`
        trainerCredit.textContent = "Art by ---"

        sideText.textContent = `${trainerData[this.dataset.member].side}`
        designText.textContent = `${trainerData[this.dataset.member].design}`
        positionText.textContent = `${trainerData[this.dataset.member].position}`
        bioText.textContent = `${trainerData[this.dataset.member].description}`

        imageDiv.appendChild(trainerPic)
        imageDiv.appendChild(trainerCredit)
        bioDiv.appendChild(sideText)
        bioDiv.appendChild(designText)
        bioDiv.appendChild(positionText)
        bioDiv.appendChild(bioText)
    }

    trainerButtons.forEach(button => button.addEventListener("click", displayInfo))
})();