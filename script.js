const sm_aboutus = document.getElementById('aboutus_show');
const AU_button = document.getElementById('AU_button');
const j_button = document.getElementById('journey_button');


let email_input = "";
const email = document.getElementById('email');

// true/false variables for each column layer
let showMore_aUS = false;
let pageTwo = false;

function showMore_AU(){
    if(showMore_aUS == true){
        showMore_aUS = false;
        AU_button.innerHTML = "Show More";
        sm_aboutus.classList.add('hidden');
        sm_aboutus.classList.remove('showed');
        return;
    }

    showMore_aUS = true;
    AU_button.innerHTML = "Show Less Info...";
    sm_aboutus.classList.remove('hidden');
    sm_aboutus.classList.add('showed');
}


function changeText(){

    if(pageTwo == false){
        pageTwo = true;
        j_button.innerHTML = "Show Page 1";
        document.getElementById('journey_Text').innerHTML = "After Microsoft offered $2.25B for Yellow Moon, the company only grew from there. The notoriety of our delicate, very yellow bananas sparked joy and wonders to those who came across and take a bite out of it! It was there the joy of eating bananas came to life. From there onwards, joy was created. And there onwards peace and love was inspired by our bananas. And that is Yellow Moon's humble journey. A humble start up that blossomed into a journey riches of bananas.";
    }
    else{
        pageTwo = false;
        j_button.innerHTML = "Show Page 2";
        document.getElementById('journey_Text').innerHTML = "The journey of Yellow Moon is an inspiring one, shows grit amongst all else. Yellow Moon was a humble start-up business, born from the ground up. The founder had to bash through dumpsters and all sorts of hardships to get the business even up, that was until one faithful day. This faithful day brought upon the most wonderful day of his life, the success. Yellow Moon all of a sudden FLOURISHED into success. Yellow Moon was offered a deal by Microsoft for $2.25B dollars, since then the company has been flourishing since then, but there's more to the story! Find out more by clicking on the button! I'm sure you'd want to learn more about our company.";
    }
}

function signUp(){
    email_input = email.value;

    if(email_input == ""){
        window.alert('ERROR! : Please input a valid email in order to proceed');
        return;
    }
    window.alert('You have signed up to Yellow Moon! Please check your email: ' + email_input + " for further confirmation!");
    console.log('user has signed up');
}

// Check if div is visible...

const product_page = document.getElementById('product');
const pd_info = document.getElementById('pd_info');
const pd_banana = document.getElementById('pd_banana');

window.onscroll = function() {
    if(checkVisible(product_page)){
        pd_info.style.animation = 'type 3s steps(19) forwards';
        pd_banana.style.animation = 'type 3s steps(14) forwards';
        pd_info.classList.add('type-write-effect');
        pd_banana.classList.add('type-write-effect');
    }
};

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}