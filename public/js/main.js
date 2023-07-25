const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_span = document.getElementById("temp_span");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".data_hide");
const day = document.getElementById("day");
const today_date = document.getElementById("today_date");


const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = "Please write the name before search...";
        datahide.classList.add("data_hide"); 
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f7c7b175a8b994b9f195734318c685c8`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_span.innerHTML = arrData[0].main.temp;
            temp_status.innerHTML = arrData[0].weather[0].main;
            const tempMood = arrData[0].weather[0].main;
            console.log(tempMood);

            // condition to check sunny or cloudy
            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68;'></i>"
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color: #f1f2f6;'></i>"
            } else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain' style='color: #a4b0be'></i>"
            } else {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color: #f1f2f6;'></i>";
            }

            datahide.classList.remove("data_hide");

        } catch {
            city_name.innerHTML = "Please enter the city name properly."
            datahide.classList.add("data_hide");
        }
    }
}

submitBtn.addEventListener("click", getInfo);

const displayDate = () => {
    const d = new Date();

    let dayName;
    switch(d.getDay()) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
    }
    
    const date = d.getDate();
    const formattingDate = (date < 10) ? "0" + date : date;

    let monthName;
    switch(d.getMonth()) {
        case 0:
            monthName = "JAN";
            break;
        case 1:
            monthName = "FEB";
            break;
        case 2:
            monthName = "MAR";
            break;
        case 3:
            monthName = "APR";
            break;
        case 4:
            monthName = "MAY";
            break;
        case 5:
            monthName = "JUN";
            break;
        case 6:
            monthName = "JUL";
            break;
        case 7:
            monthName = "AUG";
            break;
        case 8:
            monthName = "SEP";
            break;
        case 9:
            monthName = "OCT";
            break;
        case 10:
            monthName = "NOV";
            break;
        case 11:
            monthName = "DEC";
            break;
    }

    day.innerHTML = dayName;
    today_date.innerHTML = `${formattingDate} ${monthName}`;
}

displayDate();