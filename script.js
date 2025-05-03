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
        document.getElementById('journey_Text').innerHTML = "Like any game development journey, RootTicker wasn’t without its obstacles. The team ran into their fair share of bugs, balancing issues, and scope creep as they experimented with new mechanics. But they pushed through, believing in the potential of their project. Every challenge they faced only strengthened their resolve to create something truly special. However, after months of hard work, we're now ready to present the game!";
    }
    else{
        pageTwo = false;
        j_button.innerHTML = "Show Page 2";
        document.getElementById('journey_Text').innerHTML = "It all began with a spark—an idea that bloomed during a late-night brainstorming session at Root Studios. Founded by a group of passionate gamers and industry veterans, Root Studios started with a singular mission: to craft unique, fun, and addictive games that brought joy to players around the world. This game is the one you're on right now actually, RootTicker! With the concept set, the team at Root Studios got to work. The design phase was exciting, but also challenging. As with any clicker game, the team knew they needed to strike the right balance between simplicity and complexity. Find out more by clicking on the button! I'm sure you'd want to learn more about our company.";
    }
}

function signUp(){
    email_input = email.value;

    if(email_input == ""){
        window.alert('ERROR! : Please input a valid email in order to proceed');
        return;
    }
    window.alert('You have signed up to RootStudios! Please check your email: ' + email_input + " for further confirmation!");
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

function PlayGame(){
    // open site
    window.open("https://pingem.itch.io/roottap")
}