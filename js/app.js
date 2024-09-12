//* API = Application Programming Interface
//? What it means: Its the middle man between the front end (website) and the DATABASE

//* JSON is set up the same way as an object
//* JSON = Javascript Object Notation
let person = {
    firstName: "Michael",
    lastName: "Jackson"
}


//! Fetching

// let url = 'https://swapi.dev/api/people/1';

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     })


//! Fetching Manipulation

//* I want to use this data in more functions so I made a global EMPTY variable
let currentCharacter = "";
let showButton = document.querySelector(".characterName button");
let counter = 1;


 async function fetchData(currentCount) {
    //* This data may CHANGE so I made this variable inside of this function.
    let url = `https://swapi.dev/api/people/${currentCount}/`;

    await fetch(url)
        //* Response promise object to json
        .then(response => response.json())
        //* Pull data
        .then(data => {
            currentCharacter = data;
            console.log(currentCharacter);

            //? What if I only need certain info from the API
            //* You can just call data.KEY for just that info.
            pasteTraits(data.height, data.mass)
        })
        //* Error catching
        .catch(error => {
            console.log(error);
        })
}


async function pasteDataToPage() {
    
    //? USE THIS TO KEEP REPEAT CLICKING BUTTON
    showButton.disabled = 'true';
    //* Running  this first so I have "currentCharacter" have data 
    await fetchData(counter)

    counter++;

    let paragraph = document.createElement("p");
    console.log(currentCharacter.name);
    paragraph.innerText = currentCharacter.name;

    let characterDivBox = document.querySelector(".characterName");
    console.log(characterDivBox);

    characterDivBox.append(paragraph);

    //? Let the button be clicked again
    showButton.removeAttribute('disabled');

}

function pasteTraits(currentHeight, currentWeight){
    console.log(currentHeight, currentWeight);
}

showButton.addEventListener("click", pasteDataToPage)



//! VEHICLES
//! Fetching Manipulation

//* I want to use this data in more functions so I made a global EMPTY variable
let currentVehicle = "";
let showVButton = document.querySelector(".vehicleName button");
let Vcounter = 1;


 async function fetchVehicle(currentCount) {
    //* This data may CHANGE so I made this variable inside of this function.
    let Vurl = `https://swapi.dev/api/vehicles/2/`;

    await fetch(Vurl)
        //* Response promise object to json
        .then(response => response.json())
        //* Pull data
        .then (data => {
            currentVehicle = data;
            console.log(currentVehicle);

            //? What if I only need certain info from the API
            //* You can just call data.KEY for just that info.
            pasteType(data.model, data.manufacturer)
        })
        //* Error catching
        .catch(error => {
            console.log(error);
        })
}


async function pasteVehicleToPage() {
    
    //? USE THIS TO KEEP REPEAT CLICKING BUTTON
    showVButton.disabled = 'true';
    //* Running  this first so I have "currentVehicle" have data 
    await fetchVehicle(Vcounter)

    Vcounter++;

    let paragraph = document.createElement("p");
    console.log(currentVehicle.name);
    paragraph.innerText = currentVehicle.name;

    let vehicleDivBox = document.querySelector(".vehicleName");
    console.log(vehicleDivBox);

    vehicleDivBox.append(paragraph);

    //? Let the button be clicked again
    showVButton.removeAttribute('disabled');

}

function pasteType(currentModel, currentManufacturer) {
    let modelElement = document.createElement("p");
    let manufacturerElement = document.createElement("p");

    modelElement.innerText = currentModel;
    manufacturerElement.innerText = currentManufacturer;

    let vehicleTypes = document.querySelector(".vehicleType");
    vehicleTypes.append(modelElement);
    vehicleTypes.append(manufacturerElement);

    console.log(currentModel, currentManufacturer);
}


showVButton.addEventListener("click", pasteVehicleToPage)