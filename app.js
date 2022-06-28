const container = document.querySelector('.container')
let input = document.querySelector('input');
let log = document.getElementById('values');
let totalResults=0;
let timer;
var counter = 1;

function loadImages(searchval,pagenum){
    if(pagenum <= 18) {
        console.log("pagenum", pagenum)
        var url = "http://www.omdbapi.com/?apikey=b9bd48a6&type=movie&s="+searchval+"&page="+pagenum
        counter++;

        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log("movies", data);
            totalResults = data.totalResults;
            for(var i=0; i<10; i++){
                console.log("i val", i)
                const img = document.createElement('img')
                img.src = data.Search[i].Poster
                container.appendChild(img)

            }
            console.log("finished the loop")
            return data;    
        })
    }
}

input.addEventListener('input', function(e){
    clearTimeout(timer);
    log.textContent = e.target.value;
    timer = setTimeout(() => {
        loadImages(log.textContent,1);
    }, 1000);
});

window.addEventListener('scroll', () =>{
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight && counter < 60){
       loadImages(log.textContent,counter)
       console.log("inside if")
    }
})