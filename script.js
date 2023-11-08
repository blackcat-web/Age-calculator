alert(”Enter your valid Date of birth");
function goAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    const currentDate = new Date();

    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();
    let NowDay, NowMonth, Nowyear, goStyleDate, errorElement, errorText;

    const styleDate = document.getElementsByClassName("inputs");
    const invalidtext = document.getElementsByClassName("input-field");
    const resultElement = document.getElementsByClassName('result');

    const showDay = document.getElementById('showDay');
    const showMonth = document.getElementById('showMonth');
    const showYear = document.getElementById('showYear');

    if ((day < 0 || day > 31) || (month < 0 || month > 12) || (year < 0 || year > currentYear) || (month % 2 == 0 && day >= 31)) {
        for (let i = 0; i < styleDate.length; i++) {
            goStyleDate = styleDate[i];
            goStyleDate.classList.add('invalid');
            errorText = invalidtext[i];
            errorText.classList.add('errorText');
        }
        for (let j = 0; j < resultElement.length; j++) {
            errorElement = resultElement[j];
            errorElement.innerHTML = "Invalid Input.";
        }

        showDay.innerText = "--";
        showMonth.innerText = "--";
        showYear.innerText = "--";
    } else {
        if (currentDay < day) {
            currentDay = currentDay + 31;
            currentMonth -= 1;
        }
        if (currentMonth < month) {
            currentMonth += 12;
            currentYear -= 1;
        }
        NowDay = currentDay - day;
        NowMonth = currentMonth - month;
        Nowyear = currentYear - year;

        for (let i = 0; i < styleDate.length; i++) {
            goStyleDate = styleDate[i];
            goStyleDate.classList.remove('invalid');
            errorText = invalidtext[i];
            errorText.classList.remove('errorText');
        }

        for (let j = 0; j < resultElement.length; j++) {
            errorElement = resultElement[j];
            errorElement.innerHTML = "";
        }

        showDay.innerText = NowDay;
        showMonth.innerText = NowMonth;
        showYear.innerText = Nowyear;

    }
}
