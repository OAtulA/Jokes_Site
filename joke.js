const jokeContainer =  document.getElementById("joke");
const btn = document.getElementById("btn");
let audioLink = "evil-laugh-49831.mp3"
let laugh = new Audio(audioLink);
const url= "https://v2.jokeapi.dev/joke/Any?type=single";

let getJoke = ()=>{
    laugh.play()
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
    })
    .catch(error=> console.log("Error occured: ",error));
}
btn.addEventListener("click", getJoke);
//brings initial joke
getJoke();  

