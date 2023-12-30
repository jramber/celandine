const email_submit_button = document.querySelector('#email-button');
const email_input = document.querySelector('#email-input');

// const validation_regex = '/^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;\n';

// const form = new HTMLFormElement();
// form.action = "https://gmail.us8.list-manage.com/subscribe/post?u=02164d34cf05821b94a23aab3&amp;id=69236752be&amp;f_id=006fd0e3f0";
// form.method = "post";


const validateEmail = (email) => String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

async function sendData() {
    const formData = new FormData();

    formData.append("EMAIL", "example@gmail.ccom");

    try {
        const response = await fetch("https://gmail.us8.list-manage.com/subscribe/post?u=02164d34cf05821b94a23aab3&amp;id=69236752be&amp;f_id=006fd0e3f0", {
            method: "POST",
            body: formData,
        });
        console.log(await response.json());
    } catch (e) {
        console.error(e);
    }
}

// const send = document.querySelector("#send");
// send.addEventListener("click", sendData);


email_submit_button.addEventListener('click', async () => {
    if(email_input.value === "") {
        return;
    }

    if(validateEmail(email_input.value)){
        console.log('hey');
        await sendData();
    }

    // const input = document.createElement('input');
    // input.type = 'email';
    // input.value = form_email.value;
});

// TODO: listen to return key pressed
// TODO: Add pop up message
// TODO: add @ShoisiroX

