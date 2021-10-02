var date = document.getElementById("currentDay");
var textEl = $('textarea');
var timeDis1 = $('.row');

// user sees date when opens page
var currentDay = moment().format("MMM Do, YYYY");
date.textContent = currentDay;
console.log(currentDay);

// save button which saves to local storage
var saveBtn = $('.saveBtn');
saveBtn.on('click', userInput);

//function that saves the users input
function userInput() {
    var input = $(this).siblings('textarea').val();
    var idEl = $(this).siblings('textarea').attr('id');
    localStorage.setItem(idEl, input);
    console.log(input);
    return;
}

function init() {
    // get localstorage inputs to put back on page

    var lstorage = localStorage.getItem('9am');
    $('#9am').text(lstorage);
    var lstorage2 = localStorage.getItem('10am');
    $('#10am').text(lstorage2);
    var lstorage3 = localStorage.getItem('11am');
    $('#11am').text(lstorage3);
    var lstorage4 = localStorage.getItem('12pm');
    $('#12pm').text(lstorage4);
    var lstorage5 = localStorage.getItem('1pm');
    $('#1pm').text(lstorage5);
    var lstorage6 = localStorage.getItem('2pm');
    $('#2pm').text(lstorage6);
    var lstorage7 = localStorage.getItem('3pm');
    $('#3pm').text(lstorage7);
    var lstorage8 = localStorage.getItem('4pm');
    $('#4pm').text(lstorage8);
    var lstorage9 = localStorage.getItem('5pm');
    $('#5pm').text(lstorage9);
}
init();
// function to pass thru each textare to compare time so correc color is present
function colorCode() {
    $('textarea').each(function () {
        console.log($(this).attr('value'));
        if (moment().hour() == $(this).attr('value')) {
            $(this).addClass('present');
        } if (moment().hour() < $(this).attr('value'))
            $(this).addClass('future');
        if (moment().hour() > $(this).attr('value')) {
            $(this).addClass('past');
        }
    })
}

colorCode();
console.log(moment().hour());
