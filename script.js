let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0]; // future date disabled
let result = document.getElementById("result");

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();       // d = day
    let m1 = birthDate.getMonth() + 1;  // m = month
    let y1 = birthDate.getFullYear();   // y = year

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3; // final result variables

    y3 = y2 - y1;

    if(m2 >= m1) {          // month
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1) {          // day
        d3 = d2 - d1;
    }else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if(m3 < 0) {            // adjust month
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old!`;
}

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}