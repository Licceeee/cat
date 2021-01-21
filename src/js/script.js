// Create an object that represents a cat. 
// It should have properties for tired, hungry, 
// lonely and happy
// Next, write methods that increase and decrease 
// those properties. Call them something that actually 
// represents what would increase or decrease these things, 
// like "feed", "sleep", or "pet".
// Last, write a method that prints out the cat's 
// status in each area. (Be creative e.g. Paws is 
// really hungry, Paws is VERY happy.)
// Bonus: Make the functions take arguments that 
// increase or decrease arbitrary amounts
// Bonus: Make the functions as arbitrary as cats 
// are - sometimes make it so the cat doesn't want to be 
// petted.

// eat
// drink
// toilet
// play
// scratch
// furr
// mieow
// pet

let randomNum = (factor) => Math.floor(Math.random() * factor);
// ------------------------- >> CAT SCORES
const tiredScore = document.getElementById("tired-score");
const angryScore = document.getElementById("angry-score");
const hungryScore = document.getElementById("hungry-score");
const happyScore = document.getElementById("happy-score");
const lonelyScore = document.getElementById("lonely-score");
const boredScore = document.getElementById("bored-score");



// ------------------------- >> CAT IMAGES
const cat = document.getElementById("cat-img");

const killCatImg = "https://i.pinimg.com/originals/4d/9f/59/4d9f592fbf2ea30c8b7b55c9790a93c2.gif";
const voidImg = "https://cdnb.artstation.com/p/assets/images/images/004/804/619/original/sourav-paul-600.gif?1486403338";
const eatingImg = "https://media2.giphy.com/media/KHhs4BXpy5dba/giphy.gif";
const dramaImg = [
    "https://thumbs.gfycat.com/ImaginaryFearlessLcont-small.gif",
    "https://media.tenor.com/images/5d026f152a14dc031c8dcc40f173d691/tenor.gif"
];
const angryImg = "https://media4.giphy.com/media/bcqAMUTUHoLDy/giphy.gif";
const boredImg = [
    "https://media.tenor.com/images/9f199ae309b9cf85003e8740c2997a15/tenor.gif",
    "https://data.whicdn.com/images/265232254/original.gif"
];
const cuteImg = "https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif";
const petImg = "https://i.pinimg.com/originals/9f/e4/f0/9fe4f00d31b7489c1b5bcd5d5cbd369a.gif";
const noPetTodayImg = "https://i.gifer.com/origin/e3/e3827ae76784f68d7023ce1870bfa462_w200.gif";
const playImg = "https://i.pinimg.com/originals/c3/2b/fa/c32bfa16bcf864e478d3ddfe32440268.gif";


// ------------------------- >> BTN MESSAGES
const startMsgCreate = "Create a sweet kitten";
const terminateMsg = "Terminate this creature";


// ------------------------- >> BTN's
const actionBtn = document.getElementById("action-btn");
const playBtn = document.getElementById("btn-play");
const feedBtn = document.getElementById("btn-feed");
const petBtn = document.getElementById("btn-pet");
const terminateBtn = document.getElementById("btn-terminate");


const changeImg = (action) => {
    cat.src = action;
}

class Cat {
    constructor(
        hungry = 50,
        tired = 0,
        lonely = 100,
        happy = 0,
        bored = 100,
        angry = 100
    ) {
        this._angry = angry;
        this._hungry = hungry;
        this._tired = tired;
        this._lonely = lonely;
        this._happy = happy;
        this._bored = bored;
    }

    // ---------------------- >> SETTERS
    set angry(value) {
        this._angry = value;
    }

    set hungry(value) {
        this._hungry = value;
    }

    set tired(value) {
        this._tired = value;
    }

    set lonely(value) {
        this._lonely = value;
    }

    set happy(value) {
        this._happy = value;
    }

    set bored(value) {
        this._bored = value;
    }

    // Check mood of cat and adjust icon colors and actions accordingly
    checkMood() {
        const moods = [
            { name_: "angry", value_: this._angry, type: "upIsBad" },
            { name_: "hungry", value_: this._hungry, type: "upIsBad" },
            { name_: "tired", value_: this._tired, type: "upIsBad" },
            { name_: "lonely", value_: this._lonely, type: "upIsBad" },
            { name_: "happy", value_: this._happy, type: "upIsgood" },
            { name_: "bored", value_: this._bored, type: "upIsBad" }
        ];

        // Change Icon colors
        for (let mood of moods) {
            console.log(mood.name);
            if (mood.type === "upIsBad") {
                if (mood.value_ < 50) { document.getElementById(mood.name_).style.color = "green"; }
                if (mood.value_ >= 50 && mood.value_ < 80) { document.getElementById(mood.name_).style.color = "orange"; }
                if (mood.value_ >= 80) { document.getElementById(mood.name_).style.color = "red"; }
            }
            if (mood.type === "upIsgood") {
                if (mood.value_ < 50) { document.getElementById(mood.name_).style.color = "red"; }
                if (mood.value_ >= 50 && mood.value_ < 80) { document.getElementById(mood.name_).style.color = "orange"; }
                if (mood.value_ >= 80) { document.getElementById(mood.name_).style.color = "green"; }
            }
        }

        // TODO Change cat behaviour if else
    }

    // Cat actions
    scratch() {
        // TODO scratch human
    }

    // TODO cat is bored - make miaw sounds
    // TODO cat is angry - scream
    // TODO cat is lonely - be sad 


    makeDrama() {
        changeImg(dramaImg[randomNum(dramaImg.length)]);
        setTimeout(function() { changeImg(angryImg) }, 2000);
    }

    // Update mood
    updateMood(happy, tired, hungry, bored, angry, lonely) {
        // Happy
        this._happy += happy;
        if (this._happy < 0) { this._happy = 0; }
        happyScore.textContent = this._happy;
        // Tired
        this._tired += tired;
        if (this._tired < 0) { this._tired = 0; }
        tiredScore.textContent = this._tired;
        // Hungry
        this._hungry += hungry;
        if (this._hungry < 0) { this._hungry = 0; }
        hungryScore.textContent = this._hungry;
        // Bored
        this._bored += bored;
        if (this._bored < 0) { this._bored = 0; }
        boredScore.textContent = this._bored;
        // Angry
        this._angry += angry;
        if (this._angry < 0) { this._angry = 0; }
        angryScore.textContent = this._angry;
        // Lonely
        this._lonely += lonely;
        if (this._lonely < 0) { this._lonely = 0; }
        lonelyScore.textContent = this._lonely;

        this.checkMood();

        // if cat too hungry, make a scene
        if (this._hungry > 100) {
            console.log('Cat is too hangryyy');
            this.makeDrama();
        }
        // TODO add more actions of cat
    }

    // change img and update mood
    play() {
        changeImg(playImg);
        // happy, tired, hungry, bored, angry, lonely
        this.updateMood(
            randomNum(25), // happy
            randomNum(25), // tired
            randomNum(25), // hungry
            -randomNum(25), // bored
            -randomNum(25), // angry
            -randomNum(25), // lonely
        );
    }

    pet() {
        //happy, tired, hungry, bored, angry, lonely
        changeImg(petImg);
        const destroyTheHuman = randomNum(5);
        // TODO add more random behaviour
        if (destroyTheHuman === 4) {
            setTimeout(function() { changeImg(noPetTodayImg) }, 3000);
        }
        this.updateMood(
            randomNum(25), // happy
            randomNum(25), // tired
            randomNum(25), // hungry
            -randomNum(25), // bored
            -randomNum(25), // angry
            -randomNum(25), // lonely
        );
    }

    feed() {
        changeImg(eatingImg);
    }

    // TODO random actions sometimes do unexpected things 
    // https://i.pinimg.com/originals/7f/94/38/7f94386425786853c891caef4ac6b355.gif
    // data:image/jpeg;base64,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
}

const kitty = new Cat();


actionBtn.addEventListener("click", function() {
    changeImg(cuteImg);
    actionBtn.hidden = true;
    playBtn.hidden = false;
    feedBtn.hidden = false;
    petBtn.hidden = false;
    terminateBtn.hidden = false;
});

playBtn.addEventListener("click", function() {
    kitty.play()
});

petBtn.addEventListener("click", function() {
    kitty.pet()
});

feedBtn.addEventListener("click", function() {
    kitty.feed()
});

// TODO settimer and randomly chose if cat is becoming tired angry or lonely

terminateBtn.addEventListener("click", function() {
    changeImg(killCatImg);
    setTimeout(function() { location.reload() }, 4000);
    // actionBtn.hidden = false;
    // playBtn.hidden = true;
    // feedBtn.hidden = true;
    // petBtn.hidden = true;
    // terminateBtn.hidden = true;
    // kitty.angry = 0;
    // kitty.hungry = 0;
    // kitty.lonely = 0;
    // kitty.tired = 0;
    // kitty.happy = 0;
    // kitty.bored = 0;
});