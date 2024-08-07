//Metadata
const username = "tinha7321@gmail.com";
const password = "ngotranvinhthai";

class User {
    constructor(username, passwd) {
        this.user_name = username;
        this.password = passwd;
    }
    check_user_authorised() {
        return (this.user_name == username && this.password == password)
            ? true
            : false;
    }
    log_in_with_email() {
        clear_fields_on_submitted();
        if (this.check_user_authorised()) {
            setTimeout(() => {
                change_to_profile1();
            }, 1500);
        } else {
            $('#next-btn').html('Wrong username or password');
            setTimeout(() => {
                $('#next-btn').html('Sign in');
            }, 2000);
        }
    }
}

function clear_fields_on_submitted() {
    $('#username').val('');
    $('#password').val('');
}
const profile = `

<div class="sq-grid-it-container">
    <div class="sq-fm-til poppins-medium">Log in with your Google account</div>
        <div class="sq-fm-ctn">
            <div class="sq-fm-form">
                <input type="text" placeholder="Enter your email:..." id="username">
            </div>
            <div class="sq-fm-form">
                <input type="password" placeholder="Enter your password:..." id="password">
            </div>
        </div>
        <div class="sq-fm-ftr">
            <div class="sq-fm-form">
                <button id="next-btn">Next</button>
        </div>
    </div>
</div>
`;

const mystery_of_love_content = `<div class="sq-grid grid-three">
                        <div class="sq-grid-it expand-1 poppins-medium">The Mystery of Love</div>
                        <div class="sq-grid-it">
                            <img src="metadata/resources/images/em2.jpg" alt="">
                            <div>Ha Trung Tin <br/> 07/03/2001</div>
                        </div>
                        <div class="sq-grid-it" style="margin: auto 0; position: relative;">
                            <!-- <img src="../resources/images/heartbeat.jpg" alt=""> -->
                            <i class="fa fa-heartbeat fa-heart"></i>
                        </div>
                        <div class="sq-grid-it">
                            <img src="metadata/resources/images/anh.jpg" alt="">
                            <div>Ngo Tran Vinh Thai <br/> 06/03/2001</div>
                        </div>
                        <div class="sq-grid-it expand-1" id="slider" onclick="display_love_messages()">
                            Unveiling the truth...
                        </div>
                        <div class="sq-grid-it"></div>
                        <button id="slider-button" onClick="next()">Next?</button>
                        <div class="sq-grid-it"></div>
                    </div>`
var button = `
   <button id="slider-button" onClick="next()">Want to see more?</button>
`
var title = `
<div class="sq-grid grid-three">
                        <div class="sq-grid-it expand-1 title poppins-medium">
                            The Mystery of Love
                        </div>
                    </div>
                    <div class="rt-cnr">
                        @thai.qqn
                    </div>
                    </div>
`

var gallery = `
<div class="sq-grid grid-nine">
                        <div class="sq-grid-it expand-1 poppins-medium">
                            The Gallery
                        </div>
                        
                        <div class="sq-grid-it"></div>
                        <div class="sq-grid-it">
                            <img class="gallery" id="gallery" src="metadata/resources/images/babyshark.jpg" alt="">
                            <div class="poppins-small">
                        This Baby Shark I gave you on the first day we met</br>I miss him so much. Does he miss me too?
                            </div>
                        </div>
                        <div class="sq-grid-it">
                            <i class="fa fa-arrow-right" id="right-arrow"></i>
                        </div>
                    </div>
`

var confession = `
<div class="sq-grid-it expand-1 poppins-medium">
                        Will you be my boyfriend?
                    </div>
                    <div class="sq-grid-it expand-1 slider" id="slider" onclick="display_the_proposal()">
                        
                    </div>
                    <div class="sq-grid-it expand-1 poppins-medium">
                        <button class='accepted' onClick="handleAns()">Ko'</button>
                        <button class='accepted' onClick="handleAns()">Yes</button>
                    <div>
`;
function load_login_form() {
    $('#content-body').html(profile);
}
function change_to_profile1() {
    $('.content').children().hide();
    $('.content').css({
        "display": "none",
    })
    $('#content-body').html(title);
    $('#audio-ctrl').css({
        "opacity": 1
    })
    // $('#content-body').html(mystery_of_love_content);
    // setInterval(() => {

}
var em;
const messages = [
    'Good evening, my baby',
    'I have something to tell you :3',
    'Do you remember how we met',
    'On Tinder, we first chatted on Sunday, 14th of July, 2024',
    'It is a controversial dating app, but you should know that',
    'somewhere lies a person who is truly aching for love!',
    'and I am longing for you!',
    'Are you interested in seeing more about me?',
    'or wondering about how far we could go together?',
    'Baby, I think you should press next now!'
]
function display_love_messages() {
    if (index < messages.length) {
        $('#slider').html(messages[index])
        index++;
    } else {
        clearInterval(intervalId)
        $('#slider').html('');
        $('#slider').html(button);
    }
}
function main() {
    $('#next-btn').on('click', function () {
        $('#next-btn').html('Signing you in...')
        let usrname = $('#username').val();
        let passwd = $('#password').val();
        em = new User(usrname, passwd)
        em.log_in_with_email();
        $('audio').on('play', () => {
            $('#content-body').html(mystery_of_love_content);
            setInterval(display_love_messages, 6000);
        })
    });
}
var pros_idx = 0;
var pros_lst = [
    "Baby, what's your concern?",
    "After all these days we met, and tried to understand each other,",
    "Are you feeling the same as I am?",
    "If you are, will you give me a chance?",
    "I am not sure what would happen the next days",
    "and do not dare to ask from you too much",
    "But you know I will try my best",
    "to not disappoint you",
    "Together, we can nourish this love",
    "and move forward in this life",
    "Baby, will you accept my proposal?",
    "Will you be my boyfriend?"
];
function display_the_proposal() {
    if ($('.slider').hasClass('poppins-small'))
        $('.slider').removeClass('poppins-small')
    $('.slider').addClass('poppins-small')
    if (pros_idx < pros_lst.length) {
        $('#slider').html(pros_lst[pros_idx])
        pros_idx++;
    } else {
        clearInterval(intervalId)
        $('#slider').html('');
        $('#slider').html(button);
    }
}


/* MAIN */
load_login_form();
main();
// 


var slider = $('#slider')
var index = 0;

function transition() {
    $('#content-body').html(mystery_of_love_content);
    console.log('okk')
    return true;
}


// const intervalId = setInterval(display_love_messages, 1000)

function next() {
    console.log('next')
    $('#content-body').html('')
    $('.sq-bdr').addClass('bigger-container')
    jump_to_gallery();
}
function jump_to_concerns() {
    $('#content-body').html('');
    $('.sq-bdr').removeClass('bigger-container')
    $('#content-body').html(confession);
    setInterval(() => {
        display_the_proposal()
    }, 6500);
}
function jump_to_gallery() {
    $('#content-body').html(gallery);
    $('#right-arrow').on('click', function () {
        if (img_pos >= images.length) jump_to_concerns();
        $('#gallery').attr('src', '');
        $('#gallery').attr('src', images[img_pos].url);
        $('#gallery').next().html(images[img_pos].title);
        img_pos++;
    })
}

var answer_from_baby = `
<div class="sq-grid grid-three">
                        <div class="sq-grid-it expand-1">
                            <i class='poppins-medium fa fa-check' style="color: green"></i><br/>
                            Thank you for accepting my proposal<br>
                            Why don't you text me on Facebook to let me know about this<br />
                            Please <a href='https://www.facebook.com/thaingo1202'>send me a message</a>!
    
                            <br />
                        </div>
                        <div class="sq-grid-it expand-1">
                            <i onClick="receive_gift()" class="fa fa-gift poppins-medium title" style="font-size: 100px !important;"></i>
                            <div>Click to open the gift</div>
                        </div>
                    </div>
`
function handleAns() {
    $("#slider").html(
        answer_from_baby
    )
    $('.accepted').addClass('invisible');
}

var gift = `
<div class="sq-grid grid-three">
                        <div class="sq-grid-it expand-1 poppins-medium">Your Gift</div>
                        <div style="position: absolute; margin: 10px; right: 0">
                            <i class="fa fa-close poppins-medium" style="font-size: 30px!important;"></i>
                        </div>
                        <div class="sq-grid-it expand-1">
                                                    <img src="metadata/resources/images/gift.jpg" alt="" style="border-radius: 20px; width: 45%;">
                                                </div>
                                                <div class="sq-grid-it expand-1">
                                                    Congratulations, you just won a voucher to drink milk tea from Ngo Gia =))
                                                    <br>
                                                    Contact your boyfriend next time you meet him and say you love him to receive it
                                                </div>
                        </div>
`

var ending = `
<div class="sq-grid grid-three">
                        <div class="sq-grid-it expand-1 poppins-medium">
                        Tang em 1 bong hoa
                        </div>
                        <div class="sq-grid-it expand-1">
                            <img src="metadata/resources/images/cat_giving_flower.jpg" alt=""
                                style="border: none; border-radius: 20px; width: 50%;"
                            >
                        </div>
                        
                    </div>
`

function receive_gift() {
    show_gift_view();
    $('.fa-close').on('click', () => {
        $('#content-body').html('')
    })
}
var img_pos = 1;
var images = [
    {
        title: 'This Baby Shark I gave you on the first day we met' +
            '</br>I miss him so much. Does he miss me too?', url: 'metadata/resources/images/babyshark.jpg'
    },
    {
        title: 'Custard you bought for me when you travelled to Vung Tau ' +
            '<br/> it was very delicious!', url: 'metadata/resources/images/bonglan.jpg'
    },
    {
        title: 'And I ate this when I was watching TV shows' +
            '<br/> Which made the shows more interesting', url: 'metadata/resources/images/custard2.jpg'
    },
    {
        title: 'We play Arena of Valor together for many days.<br>' +
            'I often do not play well. So we always need a strong team to cover us =))', url: 'metadata/resources/images/lq.jpg'
    },
    {
        title: 'I took a picture of you when you stopped by to buy medicines.<br/>' +
            'You are just too carelessly cute', url: 'metadata/resources/images/baby.jpg'
    },
    {
        title: 'I took this picture when I arrived to pick you up <br>' +
            'On the first day we went on a date, with so much hope and enthusiasm', url: 'metadata/resources/images/pagoda.jpg'
    },
]

// jump_to_concerns();

function show_gift_view() {
    $('.sq-bdr').addClass('bigger-container')
    $('#content-body').html(gift);
    $('.fa-close').on('click', () => {
        show_ending()
    })
    $('#')
}
// show_gift_view()

function show_ending () {
    $('.sq-bdr').removeClass('bigger-container');
    $('#content-body').html(ending)
}

// show_ending()