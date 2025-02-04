
// important variables
const body = document.body
const details = document.getElementById("details")
const button = document.getElementsByClassName("submit")
const input = document.querySelectorAll("input")
const content = document.getElementById("content")
let isVisible = false

// empty the input fields on reload/refresh
window.onload = ()=>{
    input.forEach((input)=>input.value="")
}

// function to check if the inputs are valid
function checkInputs(day, month, year) {
    // handling the leading 0 problem
    day = parseInt(day, 10)
    month = parseInt(month, 10);
    year = parseInt(year, 10);

    const date = new Date(year, month - 1, day); 

    if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day) {
        console.log("Valid date");
        return date; 
    } else {
        alert("Enter a valid date");
    }
}

// function to generate the death date that is between 1 to 50 years ahead
function generateNewDate(date){
    // convert the current date into milliseconds
    const startDate = date.getTime();

    const leastAhead = 365;
    const maxAhead = 365*100;

    // generate a random day that is 1 to 50 years ahead
    const randomDay = Math.floor(Math.random()*(maxAhead-leastAhead+1))+leastAhead;
   
    // generate the date based on milliseconds
    const newDate = new Date(startDate+randomDay* 24 * 60 * 60 * 1000)

    // extracting the day,month and year from the new date
    const newYear = newDate.getFullYear();
    const newMonth = newDate.getMonth()+1;
    const newDay = newDate.getDate();

    return { newDay,newMonth,newYear };
    
} 

// main function to handle form submittion
function formHandling(event){
    event.preventDefault();
    const day = input[0].value;
    const month = input[1].value;
    const year = input[2].value;
    
    // checking if the inputs are valid
    let date = checkInputs(day,month,year);

    // generating the date of death
    let { newDay,newMonth,newYear } = generateNewDate(date);

    // seetting up the new date
    content.textContent = `${newDay} / ${newMonth} / ${newYear}`
    
    // make the date visible if not already
    if(!isVisible){
        details.style.display = "block";
        isVisible = true;
        console.log(isVisible);
    }
    
}

// listening for form submitions
button[0].addEventListener("click",formHandling)