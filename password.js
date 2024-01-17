var passedTests = false;
        
function checkPasswordStrength(string){
    console.log("check password strength method called");
    console.log("Check Password Strength: " + string);

    // points
    var lowerCasePoints = 0;
    var upperCasePoints = 0;
    var lengthPoints = 0;
    var specialCharacterPoints = 0;
    var containsNumberPoints = 0;

    // booleans
    var isLowerCase = false;
    var isUpperCase = false;
    var isLongEnough = false;
    var isSpecial = false;
    var hasNumber = false;

    // determine boolean values on each input 

    // lower case
    if(containsLowerCase(string) && !isLowerCase){
        isLowerCase = true;
    }
    if(isLowerCase && lowerCasePoints === 0){
        lowerCasePoints = 10;
    }

    // upper case
    if(containsUpperCase(string) && !isUpperCase){
        isUpperCase = true;
    }
    if(isUpperCase && upperCasePoints === 0){
        upperCasePoints = 10;
    }

    // length 
    if(checkLength(string) && !isLongEnough){
        isLongEnough = true;
    }
    if(isLongEnough && lengthPoints === 0){
        lengthPoints = 20;
    }

    //special character
    if(containsSpecialCharacter(string) && !isSpecial){
        isSpecial = true;
    }
    if(isSpecial && specialCharacterPoints === 0){
        specialCharacterPoints = 20;
    }

    // number
    if(containsNumber(string) && !hasNumber){
        hasNumber = true;
    }
    if(hasNumber && containsNumberPoints === 0){
        containsNumberPoints = 20;
    }

    var totalPoints = checkTotalStrength(lowerCasePoints, upperCasePoints, lengthPoints, specialCharacterPoints, containsNumberPoints);
    console.log("Total points: " + totalPoints);
    switch(totalPoints){
        case 0:
            console.log("Awful strength");
            break;
        case 10:
            console.log("Very weak strength");
            break;
        case 20:
            console.log("Still very weak");
            break;
        case 30:
            console.log("Below average");
            break;
        case 40:
            console.log("Average strength");
            break;
        case 50: 
            console.log("Getting there strength");
            break;
        case 60:
            console.log("Slightly above average strength");
            break;
        case 70: 
            console.log("Above average strength");
            break;
        case 80: 
            console.log("Excellent strength");
            break;
        default:
            console.log("Number not found");
    }


}

// check total strenght of the password
function checkTotalStrength(lower, higher, long, special, number){
    var total = lower + higher + long + special + number;
    updateValue(total);
    return lower + higher + long + special + number;
}

function updateValue(strength){
    var progressBar = document.getElementById("progress");
    progressBar.value = strength;

    // Use a ternary operator to set different colors based on the strength value
    progressBar.style.backgroundColor = "lightgray";
    progressBar.style.color =
        strength < 40 ? "red" :
        strength < 60 ? "yellow" :
        strength >= 80 ? "green" : "";

    var passwordValue = document.getElementById("password-strength");
    passwordValue.innerHTML = "Strength: " + strength + "%";
    if(strength >= 80){
        passedTests = true;
    }
}



// get text on input from password field each time a keystroke entered 

function getText(event){
    console.log("Get text: " + event.target.value);
    var passwordText = event.target.value;
    document.getElementById("password-text").innerHTML = "Password: " + passwordText;
    checkPasswordStrength(passwordText);
}










// checking matched input patterns

function containsNumber(str) {
    // Regular expression to match any digit
    const numberRegex = /\d/;
    return numberRegex.test(str);
}

function containsSpecialCharacter(str) {
    // Regular expression to match any character that is not alphanumeric
    const specialCharRegex = /[^a-zA-Z0-9]/;
    return specialCharRegex.test(str);
}

function checkLength(string){
    console.log("Length: " + string.length);
    if(string.length >= 8){
        return true;
    }
    return false;
}

function containsUpperCase(string){
    console.log("contains lower case: " + string);
    for(let i = 0; i < string.length; i++){
        if(string[i] >= 'A' && string[i] <= 'Z'){
            return true;
        }
    }
    return false;
}

function containsLowerCase(string){
    console.log("contains lower case: " + string);
    for(let i = 0; i < string.length; i++){
        if(string[i] >= 'a' && string[i] <= 'z'){
            return true;
        }
    }
    return false;
}

function registerUser(){

    // obtain values on inputs 
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var passwordConfirm = document.getElementById("password-confirm");
    var errorStyle = "2px solid red"

    // log values of inputs 
    console.log("Username: " + username.value);
    console.log("Password: " + password.value);
    console.log("Confirm password: " + passwordConfirm.value);

    // check for null values
    if(username.value.trim() === ""){
        username.style.border = errorStyle;
    }
    if(password.value.trim() === ""){
        password.style.border = errorStyle;
    }
    if(passwordConfirm.value.trim() === ""){
        passwordConfirm.style.border = errorStyle;
    }

    // check if passwords match
    const outcome = document.getElementById("outcome");
    if(password.value.trim() === passwordConfirm.value.trim() && username.value.trim() != ""){
        console.log("User registered!");
        if(passedTests){
            outcome.innerHTML = "Registered!";
        }else{
            console.log("Still not ready");
        }

    }else{
        console.log("Registration failure");
        outcome.innerHTML = "Something went wrong";
    }
}

