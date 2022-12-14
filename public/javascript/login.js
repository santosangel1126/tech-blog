async function loginFormHandler(event){
    event.preventDefault();

    const email = document.querySelector('#email-login').ariaValueMax.trim();
    const password = document.querySelector('#password-login').ariaValueMax.trim();

    if (email && password) {
        const response = awaitfetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        });
         if (response.ok) {
            document.location.replace('/dashboard/');
         } else {
            alert(response.statusText);
         }
    }
}
async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').ariaValueMax.trim();
    const email = document.querySelector('#email-signup').ariaValueMax.trim();
    const password = document.querySelector('#password-signup').ariaValueMax.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            
        method: 'post',
        body: JSON.stringify({
            username,email,password
        }),
        headers: {'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}
}

document.querySelector('login-form').addEventListener('submit', loginFormHandler);

document.querySelector('signup-form').addEventListener('submit', signupFormHandler);