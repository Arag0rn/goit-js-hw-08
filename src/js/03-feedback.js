import _ from 'lodash'

const formData = document.querySelector('.feedback-form');
const { elements:
    {
        email,
        message
    }
        } = formData;

const savedUserData = JSON.parse(localStorage.getItem('feedback-form-state')) || {
    email: '',
    message: ''
 }

email.value = savedUserData.email;
message.value = savedUserData.message;

const throttleOnInput = _.throttle(handleInput, 500);

formData.addEventListener("input", throttleOnInput);

function handleInput (){

    localStorage.setItem("feedback-form-state",
        JSON.stringify({
            email: email.value,
            message: message.value
        }));
}

formData.addEventListener ("submit", handleSubmit)

function handleSubmit (event) {
    try{
    event.preventDefault();
    const savedUserData = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(savedUserData);
    localStorage.clear();
    event.currentTarget.reset();
} catch (err){
    console.log(err);
}
};

