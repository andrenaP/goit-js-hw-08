import throttle from 'lodash.throttle';
const form_1 = document.querySelector('.feedback-form');
const KEY = 'form';
startForm();
form_data = {};
function startForm() {
    let Form_save = localStorage.getItem(KEY);
    if (Form_save) {
        Form_save = JSON.parse(Form_save);
        Object.entries(Form_save).forEach(([name, value]) => {
            form_1.elements[name].value = value;
        });
    }
};

form_1.addEventListener('submit', onFormSubmit);
form_1.addEventListener('input', throttle(onFormInput, 500));
function onFormSubmit(event) {
    event.preventDefault();
    form_data[event.target.name] = event.target.value
    console.log(form_data);
    event.currentTarget.reset();
    localStorage.removeItem(KEY);
}
function onFormInput(event) {
    form_data[event.target.name] = event.target.value
    localStorage.setItem(KEY, JSON.stringify(form_data));

}