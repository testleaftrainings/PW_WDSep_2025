//Callback function :

function checkAvailabity(movieName,playFilm1,playFilm2){ // Main Function 1

    console.log(`Checking the movie name`); // Step1

    setTimeout(() => {
       console.log(`Movie ${movieName} is availble`); // Step2
       playFilm1() //Step 3 Subfunction1
    }, 2000);    

     console.log(`Movie ${movieName} is availble`); // Step2
      playFilm2() //Step 4  Subfunction2
}

function playFilm1() {                        // Function 2
    console.log(`Now playing the movie`);
}

function playFilm2() {                        // Function 2
    console.log(`Now playing the movie`);
}

checkAvailabity("Coolie",playFilm1,playFilm2)