// Render a specific dog's info in the middle of the page
const renderDog = (dog) => {
    const dogInfo = document.querySelector("#dog-info")
    dogInfo.innerHTML = ""

    const dogImg = document.createElement("img")
    dogImg.src = dog.image

    const dogName = document.createElement("h2")
    dogName.innerText = dog.name

    const dogBtn = document.createElement("button")
    dog.isGoodDog ? dogBtn.innerText = "Good Dog!" : dogBtn.innerText = "Bad Dog!"

    dogBtn.addEventListener("click", () => {
        toggleDogStatus(dog, dogBtn)
    })

    dogInfo.append(dogImg, dogName, dogBtn)
}

// The action that happens then the dog status button is clicked
const toggleDogStatus = (dog, dogBtn) => {
    // Example of optimistic rendering, dom manipulation first followed by fetch
    let newStatus = dog.isGoodDog
    if(dogBtn.innerText == "Good Dog!") {
        newStatus = false
        dogBtn.innerText = "Bad Dog!"
    } else if (dogBtn.innerText == "Bad Dog!") {
        newStatus = true
        dogBtn.innerText = "Good Dog!"
    }

    // Fetch to update the dog status in our database
    fetch(`http://localhost:3000/pups/${dog.id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            isGoodDog: newStatus
        })
    })
    .then(res => res.json())
    .then(updatedDog => console.log(updatedDog))
}