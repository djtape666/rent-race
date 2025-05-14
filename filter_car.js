const filter_buttons = document.querySelectorAll(".marka_button");
const car_items = document.querySelectorAll(".car_item");

function filter_cars_by_id(selected_id) {
    filter_buttons.forEach(btn => btn.classList.remove("active"));

    filter_buttons.forEach(button => {
        const button_id = button.getAttribute("data-id");
        if (button_id === selected_id) {
            button.classList.add("active");
        }
    });

    car_items.forEach(car => {
        const car_id = car.getAttribute("data-id");

        if (selected_id === "all" || car_id === selected_id) {
            car.style.display = "block";
        } else {
            car.style.display = "none";
        }
    });
}

filter_buttons.forEach(button => {
    const button_id = button.getAttribute("data-id");
    button.addEventListener('click', () => filter_cars_by_id(button_id));
});

const default_button = document.querySelector('.marka_button[data-id="all"]');
if (default_button) {
    const default_id = default_button.getAttribute("data-id");
    filter_cars_by_id(default_id);
}
