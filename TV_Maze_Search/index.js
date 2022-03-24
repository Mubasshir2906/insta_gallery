//https://api.tvmaze.com/search/shows?q=girls

//const searchText = document.querySelector("#searchText").value;
const searchButton = document.querySelector("#searchButton");
const resultContainer = document.getElementById("displayResultContainer")

searchButton.addEventListener("click", event =>{
    document.querySelectorAll(".movieImageStyle").forEach(e => e.remove())
    const searchText = document.querySelector("#searchText").value;
    showResults(searchText);
})

const showResults = async (text)=>{
    axios
    .get(`https://api.tvmaze.com/search/shows?q=${text}`)
    .then(response =>{
    //console.log(response.data)
    const dataArray = response.data;
    
    dataArray.forEach(element => {
        //console.log(element.show.image)

        const img = document.createElement('img');
        if(element.show.image){
            img.src = element.show.image.medium;
            img.classList.add("movieImageStyle");
            document.body.append(img)
        }
        
    });
})
}
