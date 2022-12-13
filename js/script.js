const checkParams = () => {
    const form = document.getElementById('form');
    const phone = document.querySelector('input');

    form.addEventListener('submit', e => {
        e.preventDefault();

        if (phone.value === '+(381) 000-000-00') {
            phone.classList.add('error');
        }
    })

    form.addEventListener('input', e => {
        e.target.classList.remove('error')
    })
}