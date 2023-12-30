const form = document.querySelector('#email-form');
const email_submit_button = document.querySelector('#email-button');

const email_input = document.querySelector('#email-input');

const pop_up = document.querySelector('#pop-up');
const pop_up_msg = document.querySelector('#pop-up span');
const pop_up_cross = document.querySelector('#cross');

const success_msg = "Thank you for joining our mail list.\nYou will only get notified when Celandine is ready!";
const empty_email_error_msg = "Ups! Try filling the email input first.";
const error_msg = "Ups! Looks like the email you wrote is not valid.";

// const validation_regex = '/^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;\n';

const validateEmail = (email) => String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const show_pop_up = () => {
    if(pop_up.classList.contains('hide')) {
        pop_up.classList.remove('hide');
    }
    pop_up.classList.add('show-up');
}

email_submit_button.addEventListener('click', async () => {
    if(email_input.value === "") {
        pop_up.classList.add('error');
        pop_up_msg.innerText = empty_email_error_msg;
        show_pop_up();
    }


    if(validateEmail(email_input.value)){
        form.submit();

        if(pop_up.classList.contains('error')) {
            pop_up.classList.remove('error');
        }

        pop_up_msg.innerText = success_msg;
        show_pop_up();

        email_input.value = '';
    } else {
        pop_up.classList.add('error');
        pop_up_msg.innerText = error_msg;
        show_pop_up();
    }
});

pop_up_cross.addEventListener('click', () => {
    if(pop_up.classList.contains('show-up')) {
        pop_up.classList.remove('show-up');
    }
    pop_up.classList.add('hide');
});

// TODO: listen to return key pressed
// TODO: add @ShoisiroX

