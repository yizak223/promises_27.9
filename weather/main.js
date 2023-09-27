const fetchWheather=(City)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=dff30724025624646efb6f22bfc5341d`
    fetch(url)
        .then(res=>{return res.json()})
        .then(data=>{
            console.log(data);
            mainDiv.innerHTML=`<h1>the city: ${data.name}</h1>
            <p>the temp is: ${data.main.temp}</p>`
        })
        .catch(error=>{console.log(error)})
}

userCity.addEventListener('change',()=>{
    fetchWheather(userCity.value)
})