const fetchWheather=(City)=>
    {const url=`https://api.openweathermap.org/data/2.5/forecast?q=${City}&units=metric&appid=dff30724025624646efb6f22bfc5341d`
    fetch(url)
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            mainDiv.innerHTML=`
            <h1 style='color:green;'>the city: ${data.city.name}</h1>`
           data.list.forEach((temp,index) => {
            if(index%8==0){
                mainDiv.innerHTML+=` 
                <h2><div style='color:purple;'>the date: </div>${temp.dt_txt.substring(0,10)}</h2>`
            }
            mainDiv.innerHTML+=`
                    <h3> <div style='color:blue;'>the hour:</div>${temp.dt_txt.substring(10,temp.dt_txt.length)}</h3>
                    <p><b style='color:red;'>the temp is:</b> ${temp.main.temp}</p>
                    <img src='https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png'>`
           });
            
        })
        .catch(console.error())
    }
    userCity.addEventListener('change',()=>{
        fetchWheather(userCity.value)
    })

    //${new Date(data.list[0].dt_txt).getDate()}/${new Date(data.list[0].dt_txt).getMonth()+1}/${new Date(data.list[0].dt_txt).getFullYear()}
    //${new Date(data.list[0].dt_txt).getHours()}:${new Date(data.list[0].dt_txt).getMinutes()}