


const car_name = document.getElementById("car_name").innerText;



const first_name = document.getElementById("first_name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const start_date = document.getElementById("start_date");
const end_date = document.getElementById("end_date");

const error_first_name = document.getElementById("error_first_name");
const error_phone = document.getElementById("error_phone");
const error_email = document.getElementById("error_email");
const error_date = document.getElementById("error_date");
var bron_button = document.getElementById('bron_button');

const modal = document.getElementById("myModal");
const close_button = document.getElementById("closeModal");




function open_modal() {
    modal.style.display = "block";
}

function close_modal() {
    modal.style.display = "none";
}

const name_regular = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/;
const email_regular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phone_regular = /^\+7\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/;
const min_date = new Date("2025-05-05");
const max_date = new Date("2029-05-05");

function bron() {
    event.preventDefault();

    error_first_name.innerText = "";
    error_email.innerText = "";
    error_phone.innerText = "";
    error_date.innerText = "";

    let flag = true;

    if (!name_regular.test(first_name.value)) {
        error_first_name.innerText = "Неверный формат имени. Используйте формат: Иван Иванов";
        flag = false;
    }

    if (!email_regular.test(email.value)) {
        error_email.innerText = "Неверный формат электронной почты. Пример: name@mail.com";
        flag = false;
    }

    if (!phone_regular.test(phone.value)) {
        error_phone.innerText = "Неверный формат телефона. Пример: +7 123 456 78 90 или +71234567890";
        flag = false;
    }

    const start_date_value = new Date(start_date.value);
    const end_date_value = new Date(end_date.value);


    if (end_date_value < start_date_value) {
        error_date.innerText = "Дата окончания не может быть раньше даты начала.";
        flag = false;
    }

    const diff_in_time = end_date_value.getTime() - start_date_value.getTime();
    const diff_in_days = diff_in_time / (1000 * 3600 * 24);
    if (diff_in_days > 7) {
        error_date.innerText = "Максимальная продолжительность аренды - 7 дней.";
        flag = false;
    }

    if (start_date_value < min_date || start_date_value > max_date || end_date_value < min_date || end_date_value > max_date) {
        error_date.innerText = "Дата должна быть между 01.01.2024 и 01.01.2025.";
        flag = false;
    }

    if (flag) {




        let all_reservations = localStorage.getItem("bron");
        all_reservations = all_reservations ? JSON.parse(all_reservations) : [];

        all_reservations.push({
            name: first_name.value,
            phone: phone.value,
            email: email.value,
            start_date: start_date.value,
            end_date: end_date.value,
            car_name: car_name
        });

        localStorage.setItem("bron", JSON.stringify(all_reservations));



        first_name.value = "";
        phone.value = "";
        email.value = "";
        start_date.value = "";
        end_date.value = "";

        open_modal();



    }
}

bron_button.addEventListener('click', bron);

close_button.addEventListener('click', close_modal);
