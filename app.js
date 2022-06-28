const container = document.querySelector('.container')
let input = document.querySelector('input');
let log = document.getElementById('values');
let totalResults=0;
let timer;


// function getMovies(){
//         fetch("http://www.omdbapi.com/?apikey=b9bd48a6&s=Marvel&type=movie")
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             console.log("movies", data);
//             return data;    
//         })
// }
// const movies = getMovies();


const URL = 'http://api.adorable.io/avatars/'

function getRandNum(){
    return Math.floor(Math.random() * 100)

}
var counter = 0;

// function updateValue(e) {
//     log.textContent = e.target.value;
//     loadImages();
//   }
function loadImages(searchval,pagenum){
    if(counter < totalResults)
    // let i = 0;
    // while(i < numImages){
    //     const img = document.createElement('img')
    //     // img.src = `${URL}${getRandNum()}`
    //     img.src = "https://picsum.photos/200"
    //     container.appendChild(img)
    //     i++
    //     counter++;
    // }
    const url = "http://www.omdbapi.com/?apikey=b9bd48a6&type=movie&s="+searchval+"&page="+pagenum
    

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log("movies", data);
        totalResults = data.totalResults;
        for(var i=counter; i<10; i++){
            console.log("i val", i)
            const img = document.createElement('img')
            img.src = data.Search[i].Poster
            container.appendChild(img)
            counter++;

        }
        console.log("finished the loop")
        return data;    
    })

    // let i=0;
    // while(i<numImages){
    //          const img = document.createElement('img')
    //     img.src = movies.Search(i).Poster
    //     container.appendChild(img)
    //     i++

    // }
}
//console.log("serach...", search);
input.addEventListener('input', function(e){
    clearTimeout(timer);
    log.textContent = e.target.value;
    timer = setTimeout(() => {
        loadImages(log.textContent,1);
    }, 1000);
});
window.addEventListener('scroll', () =>{
  //  console.log(window.innerHeight,"a", window.scrollY,"b",document.documentElement.scrollHeight)
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight && counter < 60){
       loadImages(log.textContent,)
       console.log("inside if")
    }
})