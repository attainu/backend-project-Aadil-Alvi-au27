const form = document.getElementById('loginForm')
form.addEventListener('submit', login)

async function login(event) {
    event.preventDefault()
    const userEmail = document.getElementById('userEmail').value
    const userPassword = document.getElementById('userPassword').value

    const result = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userEmail,
            userPassword
        })
    }).then((res) => res.json())

    if (result.status === 'ok') {
        // everythign went fine
        console.log('Got the token: ', result.data)
        localStorage.setItem('token', result.data)
        alert('Success')
    } else {
        alert(result.error)
    }
}