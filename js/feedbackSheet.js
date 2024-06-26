const scriptURL = 'https://script.google.com/macros/s/AKfycbyjCk-0wO40WEePJCSO5z1u8bpG64LGKknq4eIFFZf7UqoqANZQ9MZwy0ltK8LMLhHD/exec'

const form = document.forms['feedback-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank You! your feedback has submitted successfully."))
    .then(()=> {window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})