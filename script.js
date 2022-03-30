const btn = document.querySelector('.btn');
btn.addEventListener("click", function(){
    
    const input = document.querySelector('.input').value;
    const API_KEY = `d01c2a1d0c8043902f3f394665279df3`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`
    fetch(url)
    .then(res => res.json())
    .then(data=> {
        const cityName = data.name;
        const temp = data.main.temp;
        const actualTemp = temp-273.15;
        const desc = data.weather[0].description;

        document.querySelector('.city').innerText = cityName;
        document.querySelector('.temp').innerText = actualTemp.toFixed(2);
        document.querySelector('.desc').innerText = desc;
    })
    .catch(res => alert("Please enter right city name"));
    document.querySelector('.input').value = '';
    

    
    
})