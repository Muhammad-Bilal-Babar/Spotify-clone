console.log("Welcome to Spotify");

//initialize the variables 
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'))
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));
let previous = document.getElementById('previous')
let next = document.getElementById('next')
let masterSongName = document.getElementById('masterSongName')

let songs = [
    {songName:"Let me love ", filePath:"song/1.mp3", coverPath:"cover/1.jpg"},
    {songName:"bye", filePath:"song/2.mp3", coverPath:"cover/2.jpg"},
    {songName:"tat ", filePath:"song/3.mp3", coverPath:"cover/3.jpg"},
    {songName:"jucicy ", filePath:"song/4.mp3", coverPath:"cover/4.jpg"},
    {songName:"janiya ", filePath:"song/5.mp3", coverPath:"cover/5.jpg"},
    {songName:"race", filePath:"song/6.mp3", coverPath:"cover/6.jpg"},
    {songName:"bhula diya ", filePath:"song/7.mp3", coverPath:"cover/7.jpg"},
    {songName:"jawan ", filePath:"song/8.mp3", coverPath:"cover/8.jpg"},
    {songName:"raat ", filePath:"song/9.mp3", coverPath:"cover/9.jpg"},
    {songName:"akela ", filePath:"song/10.mp3", coverPath:"cover/10.jpg"}
]

songItems.forEach((element,i)=>{

element.getElementsByTagName("img")[0].src= songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName
})
// audioElement.play();


//listen to events

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime==0){
        audioElement.play();  
        masterPlay.classList.remove('fa-play-cirlce');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity=0
    }
})

audioElement.addEventListener('timeupdate' , ()=>{
      
        //update seekbar
let progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100
})

const makeAllPlays = ()=>{
    songItemPlay.forEach((element)=>{
    element.classList.add('fa-play-circle'),
    element.classList.remove('fa-pause-circle')
     } )
}

songItemPlay.forEach((element)=>{
    element.addEventListener('click', (e)=>{
       index = parseInt(e.target.id)
        makeAllPlays();
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `song/${index}.mp3`
        masterSongName.innerText = songs[index].songName;
        audioElement.currentTime=0
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })

    })


next.addEventListener('click', ()=>{
    if(index>9){
        index=0
    }
    else{
    index+=1
    }
        audioElement.src = `song/${index}.mp3`
        masterSongName.innerText = songs[index].songName;
        audioElement.currentTime=0
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

previous.addEventListener('click', ()=>{
    if(index==0){
        index=0
    }
    else{
    index-=1
    }
        audioElement.src = `song/${index}.mp3`
        masterSongName.innerText = songs[index].songName;
        audioElement.currentTime=0
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

