
//dog

// query selector
let button = document.querySelector('button');
let img = document.querySelector('img');
let url = 'https://dog.ceo/api/breeds/image/random';



// event listener
button.addEventListener('click', () => {
fetch(url)
.then((res) => {
return res.json();
})
.then((data) => {
img.src = data.message;
})
})


//weather

// query selector
let btn = document.querySelector('#btn')
let city = document.querySelector('#input-city')


// event listener
btn.addEventListener('click', function (){
    let cityInput = city.value

    let url = (`https://goweather.herokuapp.com/weather/${cityInput}`)

    fetch(url)
        .then (function (res) {
            return res.json ()
        })
        .then (function (data) {
            result.innerText = `${data.description} ${data.temperature} ${data.wind}`;

        })
})

