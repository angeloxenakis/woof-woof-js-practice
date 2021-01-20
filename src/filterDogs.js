// Add the event listener to the filter button
const addFilterEvent = () => {
    const filterBtn = document.querySelector("#good-dog-filter")
    filterBtn.addEventListener("click", () => {
        document.querySelector("#dog-bar").innerHTML = ""
        toggleFilter(filterBtn)
    })
} 

// The functionality that filters the original dog list when the button is clicked
const toggleFilter = (filterBtn) => {
    if(filter == false) {
        filteredDogList = []
        filter = true
        filterBtn.innerText = "Filter good dogs: ON"
        dogList.forEach(dog => {
            if(dog.isGoodDog) {
                filteredDogList.push(dog)
            }
        })
        filteredDogList.forEach(dog => {
            renderToDogList(dog)
        })
    } else if(filter == true) {
        filteredDogList = []
        filter = false
        filterBtn.innerText = "Filter good dogs: OFF"
        dogList.forEach(dog => {
            renderToDogList(dog)
        })
    }
}