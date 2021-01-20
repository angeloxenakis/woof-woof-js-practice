// The code for this review has been split up into separate .js files that you can see on the file tree
// The functions called in the DOMContentLoaded event listener are defined in these files
// Please look at the index.html file on lines 7-10 to view the order that each .js file is being imported

document.addEventListener("DOMContentLoaded", () => {
    getDogs()
    addFilterEvent()
})