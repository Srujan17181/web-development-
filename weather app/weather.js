

document.getElementById("getWeather").addEventListener("click",getweather)


async function getweather(){
    const city=document.getElementById("city").value ;
    const api_key="bdb02b2295317931c453f14650de4267";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    
    try{
        const response=await fetch(url);
        const data= await response.json();

        if(data.cod ===200){
            document.getElementById("result").innerHTML=`
            <h3>${data.name} ${data.sys.country} </h3>
            <p class="temp">${data.main.temp} &#8451</p>
            <p>${data.weather[0].description}</p>
            <p>Humidity:${data.main.humidity}<p/>
            <p>Wind:${data.wind.speed} m/s</p>`;
        }
        else{
            document.getElementById("result").innerHTML=`<p> city not found <p/>`
        }
    }
    catch(error){
        document.getElementById("result").innerHTML=`<p> fetch an ${error} `;
    }

}

