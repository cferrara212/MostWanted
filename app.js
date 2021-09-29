"use strict"


//Menu functions.
//Used for the overall flow of the application.
/////////////////////////////////////////////////////////////////
//#region 
console.log(data);

// app is the function called to start the entire application
function app(people) {
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  let traitResults;
  switch (searchType) {
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      // TODO: search by traits
      traitResults = chosenTrait(people);
      break;
    default:
      app(people); // restart app
      break;
  }

  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people) {
  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if (!person) {
    alert('Could not find that individual.');
    return app(people); // restart
  }

  let displayOption = promptFor(
    'Found ' +
      person.firstName +
      ' ' +
      person.lastName +
      " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'",
    autoValid
  );

  switch (displayOption) {
    case 'info':
      // TODO: get person's info
      break;
    case 'family':
      // TODO: get person's family
      break;
    case 'descendants':
      // TODO: get person's descendants
      break;
    case 'restart':
      app(people); // restart
      break;
    case 'quit':
      return; // stop execution
    default:
      return mainMenu(person, people); // ask again
  }
}

//#endregion

//Filter functions.
//Ideally you will have a function for each trait.
/////////////////////////////////////////////////////////////////
//#region

//nearly finished function used to search through an array of people to find matching first and last name and return a SINGLE person object.
function searchByName(people) {
  let firstName = promptFor("What is the person's first name?", autoValid);
  let lastName = promptFor("What is the person's last name?", autoValid);

  let foundPerson = people.filter(function (potentialMatch) {
    if (
      potentialMatch.firstName.toLowerCase() === firstName.toLowerCase() &&
      potentialMatch.lastName.toLowerCase() === lastName.toLowerCase()
    ) {
      return true;
    } else {
      return false;
    }
  });
  // TODO: find the person single person object using the name they entered.
  return foundPerson[0];
}



//unfinished function to search through an array of people to find matching eye colors. Use searchByName as reference.  SHOULD WE SWITCH CASE THESE?

function chosenTrait (people){
  prompt
let searchFor=promptFor("what trait are you looking for? Please type 'eye color' 'occupation' 'gender' or 'date of birth'", autoValid).toLocaleLowerCase();
let occupationresult;
  switch (searchFor) {
    case 'occupation':
      let occupationChoice = promptFor("which occupation type would you like to search for. You can choose 'doctor' 'programmer' 'assistant' 'landscaper' 'nurse' 'student' 'architect' or 'politician'",autoValid).toLocaleLowerCase();
      occupationResult = searchByOccupation(occupationChoice,people);
      break;
    case 'eye color':
      break;
    case 'gender':
      break;
    case'date of birth':
      break;    
    default:
      chosenttrait(people)
      break;
  }
}

function searchByEyeColor(people)
{

}

function searchByOccupation(occupation, people)
{
//let peopleWithOccupation = people.filter(function(matches))
}


function searchByGender(people)
{

}

function searchByDob(people)
{

}

function searchByHeightRange(people)
{

}

function searchByWeightRange(people)
{

}


//#endregion

//Display functions.
//Functions for user interface.
/////////////////////////////////////////////////////////////////
//#region 

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display.
  alert(personInfo);
}

//#endregion



//Validation functions.
//Functions to validate user input.
/////////////////////////////////////////////////////////////////
//#region 

//a function that takes in a question to prompt, and a callback function to validate the user input.
//response: Will capture the user input.
//isValid: Will capture the return of the validation function callback. true(the user input is valid)/false(the user input was not valid).
//this function will continue to loop until the user enters something that is not an empty string("") or is considered valid based off the callback function(valid).
function promptFor(question, valid){
  let isValid;
  do{
    var response = prompt(question).trim();
    isValid = valid(response);
  } while(response === ""  ||  isValid === false)
  return response;
}

// helper function/callback to pass into promptFor to validate yes/no answers.
function yesNo(input){
  if(input.toLowerCase() == "yes" || input.toLowerCase() == "no"){
    return true;
  }
  else{
    return false;
  }
}

// helper function to pass in as default promptFor validation.
//this will always return true for all inputs.
function autoValid(input){
  return true; // default validation only
}

//Unfinished validation function you can use for any of your custom validation callbacks.
//can be used for things like eye color validation for example.
function customValidation(input){
  
}

//#endregion