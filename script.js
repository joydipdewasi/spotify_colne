console.log( "lest write js");


async function getsongs() {
    let a = await fetch("songs link")
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")

    for(let index = 0; index < as.length; index++) {
        const element = as [ index];
        if(element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs;
}
async function main() {
    // Get the list of all the songs 
    let songs = await getsongs();
console.log(songs);


let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
for (const song of songs) {
    songUL.innerHTML = songUL.index + `<li> ${song.replaceALL("%20" ," ")} </li>`;
}


//play the first songs
var audio = new Audio(songs[0]);
audio.play();
}

main()