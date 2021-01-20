// A list of the dogs from the server, that we can filter later based on the boolean value following it
let dogList = []
let filter = false

// Get dogs from sever
const getDogs = () => {
    fetch("http://localhost:3000/pups")
    .then(res => res.json())
    .then(dogs => dogs.forEach(dog => {
        renderToDogList(dog)
        dogList.push(dog)
    }))
}

// Render dog names to the dog bar at the top of the page
const renderToDogList = (dog) => {
    const dogBar = document.querySelector("#dog-bar")

    const dogSpan = document.createElement("span")
    dogSpan.innerText = dog.name

    dogSpan.addEventListener("click", () => {
        renderDog(dog)
    })

    dogBar.append(dogSpan)
}