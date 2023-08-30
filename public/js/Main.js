const submitBtn = document.getElementById('submitBtn');

const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');

const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide =document.querySelector('.middle_layer')


const getInfo = async (event) => {
    event.preventDefault();
    let cityval = cityName.value;
    
    if (cityval === "") {
        city_name.innerText = `plz wirte the name before search`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=a3c54fcc183d433a07af6f0cecd01182`
            const response = await fetch(url);
            const data = await response.json()
            // console.log(data);
            const arrdata = [data];

            city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country} `;
            temp_real_val.innerText = arrdata[0].main.temp;
            // temp_status.innerText = arrdata[0].weather[0].main;

            const tempMood = arrdata[0].weather[0].main;

            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color: #eccc68 '></i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud-rain' style='color: #a4bObe;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color:#f1f2f6;'><i>';"
            }
            datahide.classList.remove('data_hide');

        }catch {
            city_name.innerText = `plz wirte the name properly`;
            datahide.classList.add('data_hide');

        }
    }

}

submitBtn.addEventListener('click', getInfo);