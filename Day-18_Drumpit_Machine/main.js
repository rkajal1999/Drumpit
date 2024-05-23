let data = {
    'A': {
        name: 'Clap',
        sound: 'sounds/clap.wav',
    },
    'S': {
        name: 'HiHat',
        sound: 'sounds/hihat.wav'
    },
    'D': {
        name: 'Kick',
        sound: 'sounds/kick.wav'
    },
    'F': {
        name: 'OpenHat',
        sound: 'sounds/openhat.wav'
    },
    'G': {
        name: 'Boom',
        sound: 'sounds/boom.wav'
    },
    'H': {
        name: 'Ride',
        sound: 'sounds/ride.wav'
    },
    'J': {
        name: 'Snare',
        sound: 'sounds/snare.wav'
    },
    'K': {
        name: 'Tom',
        sound: 'sounds/tom.wav'
    },
    'L': {
        name: 'Tink',
        sound: 'sounds/tink.wav'
    }

};

let drumkit = document.getElementById("drumkit");

function Construct() {
    for(let key in data){
        let drumELement = document.createElement('div')
        drumELement.classList.add('element',data[key].name)
        let h2 = document.createElement('h2')
        h2.textContent = key;

        let span = document.createElement('span')
        span.textContent = data[key].name
        drumELement.appendChild(h2)
        drumELement.appendChild(span)
        drumkit.appendChild(drumELement)

        drumELement.addEventListener("click" , function(e) {
            let key = e.currentTarget.querySelector('h2').textContent
            // console.log(key);
            playDrum(key)
        })

    }
}

function playDrum(key) {
    if(data.hasOwnProperty(key)){
        let drumELement = document.querySelector(`.element.${data[key].name}`)
        drumELement.classList.add('active')

        let audio = new Audio();
        audio.src=data[key].sound;
        audio.play()

        audio.addEventListener('timeupdate',function(){
            if(audio.currentTime >= audio.duration / 32){
                drumELement.classList.remove('active');
                audio.removeEventListener('timeupdate',arguments.callee)
            }
        })
    }
    else{
        console.clear('Invalid Key');

        setTimeout(()=>{
            console.clear()
        },3000)
    }
}

document.addEventListener('keydown',function(e){
    playDrum(e.key.toUpperCase())
})





Construct()