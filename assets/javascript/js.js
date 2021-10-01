var date = document.getElementById("currentDay");
var textEl = $('textarea');

// user sees date when opens page
var currentDay = moment().format("MMM Do, YYYY");
date.textContent = currentDay;
console.log(currentDay);

// save button
var saveBtn = $('.saveBtn');
saveBtn.on('click', userInput);
//create function that saves user input
function userInput (){
    var input = $(this).siblings('textarea').val();
    localStorage.setItem(textEl.attr('id'), input);
    console.log(input);
    return;
}