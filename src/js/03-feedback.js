import throttle from 'lodash.throttle';
const form_1 = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';
startForm();
form_data = {};
function startForm() {
    let Form_save = localStorage.getItem(KEY);
    if (Form_save) {
        form_data = JSON.parse(Form_save);
        Object.entries(form_data).forEach(([name, value]) => {
            form_1.elements[name].value = value;
        });
    }
};

form_1.addEventListener('submit', onFormSubmit);
form_1.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form_1);
    formData.forEach((value, name) => console.log(value, name));
    event.currentTarget.reset();
    localStorage.removeItem(KEY);
}
function onFormInput(event) {
    let form_data = localStorage.getItem(KEY);

    form_data = JSON.parse(form_data);
    if (form_data)
        form_data[event.target.name] = event.target.value
    else
        form_data = {};

    localStorage.setItem(KEY, JSON.stringify(form_data));
}