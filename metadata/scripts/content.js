const messages = [
    'On Tinder, we first chatted on Sunday, 14th of July, 2024',
    'It is a controversial dating app, but you should know that',
   'somewhere lies a person who is truly aching for love!'
]

var slider = $('#slider')
var index = 0;
var button = `
   <button id="slider-button" onClick="next()">Want to see more?</button>
`

function display_love_messages() {
    if (index < messages.length) {
        $('#slider').html(messages[index])
        index++;
    } else {
        clearInterval(intervalId)
        $('#slider').html(button);
    }
}

const intervalId = setInterval(display_love_messages, 1000)

function next() {
    console.log('next')
}