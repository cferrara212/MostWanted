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
      mainMenu(searchResults, people);
      break;
    case 'no':
      // TODO: search by traits
      let singleorMultiple = promptFor("would you like to search by a single trait, or multiple traits? Enter 'single' or 'multiple'",singlMultipleValidation).toLowerCase();
      if(singleorMultiple==='single'){
      traitResults = chosenTrait(people);
      }
      else{
        traitResults = multiTraits(people);
      }
      break;
    default:
      app(people); // restart app
      break;
  }
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
      displayPerson(person);
      break;
    case 'family':
      // TODO: get person's family
      displayPersonFamily(person, people);
      break;
    case 'descendants':
      // TODO: get person's descendants
      displayPersonDescendants(person, people);
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

function multiTraits(people){
  let searchFor = promptFor("i have no idea what im doing");
  let searchArray = [];
}

function chosenTrait(people) {
  prompt;
  let searchFor = promptFor(
    "what trait are you looking for? Please type 'eye color' 'occupation' 'gender' 'date of birth' 'height' or 'weight'",
    autoValid
  ).toLocaleLowerCase();

  let occupationResult;
  let genderResult;
  let eyeColorResult;
  let dobResult;
  let heightResult;
  let weightResult;

  switch (searchFor) {
    case 'occupation':
      let occupationChoice = promptFor(
        "which occupation type would you like to search for. You can choose 'doctor' 'programmer' 'assistant' 'landscaper' 'nurse' 'student' 'architect' or 'politician'",
        occupationValidation
      ).toLocaleLowerCase();
      occupationResult = searchByOccupation(occupationChoice, people);
      alert ("Here are the poeple that match your search" + '\n' + occupationResult);
      break;

    case 'eye color':
      let eyeColorChoice = promptFor(
        "which eye color would you like to search for? You can choose 'brown' 'black' 'hazel' 'blue' or 'green' ",
        eyeColorValidation
      ).toLowerCase();
      eyeColorResult = searchByEyeColor(eyeColorChoice, people);
      alert ("Here are the poeple that match your search" + '\n' + eyeColorResult);
      break;

    case 'gender':
      let genderChoice = promptFor(
        "Which gender would you like to search for? Please enter 'male' or 'female",
        genderValidation
      ).toLowerCase();
      genderResult = searchByGender(genderChoice, people);
      alert ("Here are the poeple that match your search" + '\n' + genderResult);
      break;

    case 'date of birth':
      let dobChoice = promptFor(
        'Please enter a date of birth to search for. Use the format d/m/yyyy',
        autoValid
      );
      dobResult = searchByDob(dobChoice, people);
      alert ("Here are the poeple that match your search" + '\n' + dobResult);
      break;

    case 'height':
      let heightChoice = Number(
        promptFor(
          'Please enter the height in inches of the individual you are looking for',
          autoValid
        )
      );
      heightResult = searchByHeightRange(heightChoice, people);
      alert ("Here are the poeple that match your search" + '\n' + heightResult);
      break;

    case 'weight':
      let weightChoice = Number(
        promptFor(
          'Please enter the weight in lbs of the individual you are looking for.',
          autoValid
        )
      );
      weightResult = searchByWeightRange(weightChoice, people);
      alert ("Here are the poeple that match your search" + '\n' + weightResult);
      break;

    default:
      chosenTrait(people);
      break;
  }
}

function searchByEyeColor(eyeColor,people) 
 {
    let peopleWithEyeColor = people.filter(function(matches)
    {
      if (matches.eyeColor.toLowerCase()===eyeColor.toLowerCase())
          {
            return true;
          }
      else
          {
            return false;
          }
    
     })
     let namesInString = arrayToStringForNames(peopleWithEyeColor);
   return namesInString;
  }

function searchByOccupation(occupation, people) {

  let FullNames = ''
  let peopleWithOccupation = people.filter(function (matches) {
    if (matches.occupation.toLowerCase() === occupation.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  });
  let namesInString = arrayToStringForNames(peopleWithOccupation);
  return namesInString;
}
/////fix from here
function searchByGender(gender, people) {
  let fullNames = ''
  let peopleWithGender = people.filter(function (matches) {
    if (matches.gender.toLowerCase() === gender.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  });
  let namesInString = arrayToStringForNames(peopleWithGender);
  return namesInString;

}

function searchByDob(chosendob, people) {
  let fullNames = ''
  let peopleWithDob = people.filter(function (matches) {
    if (matches.dob.toLowerCase() === chosendob.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  });
  let namesInString = arrayToStringForNames(peopleWithDob);
  return namesInString;
}

function searchByHeightRange(chosenHeight, people) {
  let fullNames = ''
  let peopleWithHeight = people.filter(function (matches) {
    if (matches.height === chosenHeight) {
      return true;
    } else {
      return false;
    }
  });
  let namesInString = arrayToStringForNames(peopleWithHeight);
  return namesInString;
}

function searchByWeightRange(chosenWeight, people) {
  let fullNames = ''
  let peopleWithWeight = people.filter(function (matches) {
    if (matches.weight === chosenWeight) {
      return true;
    } else {
      return false;
    }
  });
  let namesInString = arrayToStringForNames(peopleWithWeight);
  return namesInString;
}

//#endregion

//Display functions.
//Functions for user interface.
/////////////////////////////////////////////////////////////////
//#region

// alerts a list of people
function displayPeople(people) {
  alert(
    people
      .map(function (person) {
        return person.firstName + ' ' + person.lastName;
      })
      .join('\n')
  );
}

function displayPerson(person) {
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = `                 First Name: ${person.firstName}
                  Last Name:  ${person.lastName}
                       Height:  ${person.height}
                        Weight: ${person.weight}
                        Age: ${calculateBirthDay(person.dob)}
                  Ocupation: ${person.occupation}
                   Eye Color: ${person.eyeColor}`;
  // TODO: finish getting the rest of the information to display.
  alert(personInfo);
}

/// function to return names in array.

function arrayToStringForNames(array)
  {
    let allNames = ''

    if (array.length) 
     {
       for (let person of array)
       {
         allNames += person.firstName + ' ' + person.lastName + '\n';
       }
       }
     else
     {
        return 'No Matches Found';
     } 

     return allNames;
}

//Function to display the family of the person
function displayPersonFamily(person, people) {
  //print only the information about the family related to that person
  let familyInfo = `         Parents: ${getPersonsParents(person, people)}
         Spouse: ${getPersonsSpouse(person, people)}
        Sibling: ${getPersonsSiblings(person, people)}`;
  alert(familyInfo);
}
//Function to display Descendants for the person selected
function displayPersonDescendants(person, people) {
  //print only the information about the family related to that person
  let descendantInfo = `         Descendants: ${getPersonsDescendants(
    person,
    people
  )}`;
  alert(descendantInfo);
}

function getPersonsSpouse(person, people) {
  let fullName = '';
  if (person.currentSpouse !== null) {
    const spouse = people.filter(function (sPerson) {
      return sPerson.id === person.currentSpouse;
    });

    if (spouse.length === 1) {
      fullName = spouse[0].firstName + ' ' + spouse[0].lastName;
    } else {
      return 'No Spouse found in Database';
    }
    return fullName;
  }

  return 'No Spouse found in Database';
}

function getPersonsParents(person, people) {
  let fullNames = '';
  let parents = people.filter(function (sPerson) {
    return person.parents.includes(sPerson.id);
  });
  if (parents.length) {
    for (let parent of parents) {
      fullNames += parent.firstName + ' ' + parent.lastName + '\n';
    }
  } else {
    return 'No Parent Found in Database';
  }

  return fullNames;
}
function getPersonsSiblings(person, people) {
  let fullNames = '';
  let siblings = people.filter(function (sPerson) {
    return sPerson.parents[0] === person.parents[0];
  });
  if (siblings.length && siblings.parents !== -1) {
    for (let sibling of siblings) {
      fullNames += sibling.firstName + ' ' + sibling.lastName + '\n';
    }
  } else {
    return 'No Siblings Found in Database';
  }

  return fullNames;
}
//Loop through all items and pull the information from the database using the descendants Found
function getPersonsDescendants(person, people) {
  let relatives = '';
  let descendants = people.filter(function (sPerson) {
    return sPerson.parents.includes(person.id);
  });
  if (descendants.length) {
    for (let descendant of descendants) {
      relatives += descendant.firstName + ' ' + descendant.lastName + '\n';
    }
  } else {
    return 'No descendants Found in Database';
  }
  return relatives;
}
//To Calculate the Age using the Date of Birth Given
function calculateBirthDay(dob) {
  const currentYear = new Date();
  const birthYear = new Date(dob);
  return `${currentYear.getFullYear() - birthYear.getFullYear()} Years Old`;
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
function promptFor(question, valid) {
  let isValid;
  do {
    var response = prompt(question).trim();
    isValid = valid(response);
  } while (response === '' || isValid === false);
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
function eyeColorValidation (input){
  if (input.toLowerCase()== 'brown' || input.toLowerCase()== 'blue' || input.toLowerCase()=='black' || input.toLowerCase()=='hazel' || input.toLowerCase()=='green' ){
    return true;
  }
    else{
      alert("sorry that was not an option.");
      return false;
    }
  }
  
function occupationValidation (input){
  if(input.toLowerCase() == 'doctor' || input.toLowerCase()=='programmer' || input.toLowerCase()=='assistant' || input.toLowerCase()=='landscaper' || input.toLowerCase()=='nurse' || input.toLowerCase()=='student'
  || input.toLowerCase()=='architect' || input.toLowerCase()=='politician' ){
    return true;
  }
  else{
    alert('sorry that was not an option');
    return false;
  }
}

function genderValidation (input){
  if(input.toLowerCase()==='male' || input.toLowerCase()==='female'){
    return true;
  }
  else{
    alert("sorry that was not an option");
    return false;
  }
}

function singlMultipleValidation(input){
  if(input.toLocaleLowerCase() == 'single' || input.toLowerCase()== 'multiple'){
    return true;
  }
  else{
    alert('Sorry that is not an option')
    return false;
  }
}

//#endregion