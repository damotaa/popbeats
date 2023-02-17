// This variable stores all the songs and information about the artists, title.
let songsArray = [
    {Title:'Anxiety - NEFFEX', Artist:'NEFFEX', src:'music/Anxiety - NEFFEX.mp3'},             //index 0
    {Title:'Summer Solstice on the June Planet', Artist:'Bail Bonds', src:'music/Summer Solstice on the June Planet - Bail Bonds.mp3'}, //index 1
    {Title:'You Will Never See Me Comin', Artist:'NEFFEX', src:'music/You Will Never See Me Coming - NEFFEX.mp3'},           //index 2
    {Title:'Timpani Beat', Artist:'Nana Kwabena',   src:'music/Timpani Beat - Nana Kwabena.mp3'}    //index 3

];
//---------------------------------------------------------------------------------------------------------------------------------------------------------//

//This fuction loads all the information about the song.
function loadsonginfo(index){                                   //it calls the value inside "indexMusic"
    
        music.setAttribute('src', songsArray[index].src);       //calls the variable "music" reads the path of src and look for the index number to read song info
    
        music.addEventListener('loadeddata', () => {
        
        songname.textContent = songsArray[index].Title;     //request [Title] of the song and raplace the value set to (.description h2) inside html page
        
        artistname.textContent = songsArray[index].Artist;  //request [Artist] of the song and raplace the value set to (.description i) inside html page
        
        musicduration.textContent = secondsxminutes(Math.floor(music.duration)); 
    });
}


// Variable set to select class "audio" from Html
let music = document.querySelector('audio');


let musicduration = document.querySelector('.end');


// Selects the data stored at ('.description h2');
let songname = document.querySelector('.description h2');

// Selects the data stored at ('.description i');
let artistname = document.querySelector('.description i');


//---------------------------------------------------------------------------------------------------------------------------------------------------------//
indexMusic = 0;
loadsonginfo(indexMusic);
//---------------------------------------------------------------------------------------------------------------------------------------------------------//


// Events // 



// Variable set to select class "playbt" from Html adding a eventListener making the logo responsive.
document.querySelector('.playbt').addEventListener('click', playmusic);

document.querySelector('.pausebt').addEventListener('click', pausemusic);

music.addEventListener('timeupdate', timebar);

document.querySelector('.prevbt').addEventListener('click', () => {
    
    indexMusic--;
    
    loadsonginfo(indexMusic);

    music.play(songsArray)

    document.querySelector('.pausebt').style.display = 'block';
    
    document.querySelector('.playbt').style.display = 'none';
    
    
});

document.querySelector('.skipsong').addEventListener('click', () => {
    
    indexMusic++;
    
    loadsonginfo(indexMusic);
    
    music.play(songsArray)

    document.querySelector('.pausebt').style.display = 'block';
    
    document.querySelector('.playbt').style.display = 'none';
    
    
});

//---------------------------------------------------------------------------------------------------------------------------------------------------------//


// play function
function playmusic(){
    
    music.play();
    
    document.querySelector('.pausebt').style.display = 'block';
    
    document.querySelector('.playbt').style.display = 'none';

}

// pause function
function pausemusic(){
    
    music.pause();

    document.querySelector('.pausebt').style.display = 'none';
    
    document.querySelector('.playbt').style.display = 'block';
}

// progress bar
function timebar(){
    let bar = document.querySelector('progress');
    bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    let timestamp1 = document.querySelector('.start');
    timestamp1.textContent = secondsxminutes(Math.floor(music.currentTime));

}

//---------------------------------------------------------------------------------------------------------------------------------------------------------//


// converting seconds to minutes
function secondsxminutes(seconds){
    
    let minutesf = Math.floor(seconds / 60);
    let secondsf = seconds % 60;
    
    if (secondsf < 10){
        secondsf = '0' + secondsf;
    }

    return minutesf+':'+secondsf;

}

//---------------------------------------------------------------------------------------------------------------------------------------------------------//

// FORM VALIDATION //

function validateForm()

{
    let firstName = document.forms["contactform"]["first_name"].value;
    let lastName = document.forms["contactform"]["last_name"].value;
    let email = document.forms["contactform"]["email_address"].value;

    if ( !email.includes(firstName + "." + lastName)
   || email.split("@")[1] != "popbeats.co.uk")
 {
    alert("please use your popbeats email, [first name].[last name]@popbeats.co.uk");
    return false;
 }
}