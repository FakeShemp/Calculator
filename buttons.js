import equalButton from './equals.js'

//User story 1: Clickable buttons that writes out 0-9
//User story 2: Clear numbers
//User story 3: Keypressed numbers 0-9 /*+-

//Adding an eventlistener on buttons 'click', call for a function
$('.btn').on('click', writeNumbers)
$('#timer').on('click', startTimer)
$('#stop').on('click', stopTimer)
$('#reset').on('click', resetTimer)

//Some keycodes translations
const CODES = {
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    187: '+',
    188: ',',
    189: '-',
    191: '*'

};

//Translates keycodes to numbers and writes them out
$('html').keyup(function () {
    //Checks if the shiftkey is pressed
    if (event.shiftKey == true && event.keyCode == 55) {
        $('#numbers').append('/')

    } else if (event.shiftKey == true && event.keyCode == 191) {
        $('#numbers').append('*')
    }
    //If the shiftkey is not pressed
    if (CODES[event.keyCode] && event.shiftKey == false) {
        $('#numbers').append(CODES[event.keyCode]);
    }
    else if (event.keyCode == 82) {
        $('#numbers').text('');
    }


});


//This functins writes out the numbers clicked after eachother
function writeNumbers() {
    $('#numbers').append(this.value)

}

//Start timer
let timer;
function startTimer() {
    $('#timer').hide()
    $('#stop').show()
    $('#reset').hide()
    let time = 1
    let minute = 0
    timer = setInterval(function () {
        if (time == 60) {
            minute++
            $('#minutes').text(minute)
            time = 1
        }
        $('#seconds').text(time++)
    }, 1000)
   
}

//Stop timer
function stopTimer() {
    clearInterval(timer);
    $('#stop').hide()
    $('#reset').show()
}

//Reset timer
function resetTimer() {
    startTimer()
    $('#minutes').text('0')
    $('#seconds').text('0')
}


//Adding event listener on clear button that calls for a function that resets the output
$('#clear').on('click', clear)
function clear() {
    $('#numbers').text('')
}


// Equals button
$('#equals').on('click', calculate);
function calculate() {
    let input = $('#numbers').text();
    $('#numbers').text(equalButton.calculate(input));
}

