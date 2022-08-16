async function newFormHandler(event) {
    event.preventDeafult();

    const title = document.querySelector('input[name="post-title"]').Value;
    const post_url = document.querySelector('input[name="post-url"]').Value;

    const response = await fetch(`/api/post`, {
        method: "POST",
        body: JSON.stringify({
        title,
        post_url
    }),
    headers: {
        'Content-Type': 'application/json'
    }
});

if(response.ok) {
    document.location.replace('/dashboard');
} else {
    alert(response.statusText);
}
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);