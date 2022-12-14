const checkParams = () => {
    const form = document.getElementById('form');
    const phone = document.getElementById('pin');
    const btn = document.getElementById('submit-btn');
    const warningMessage = document.querySelector('.error-description');

    phone.addEventListener('input', ({target}) => {
        if (target.value === '+(381) 000-000-00') {
            btn.removeAttribute('disabled');
            phone.classList.replace('pin-code', 'error');
            warningMessage.classList.add('visible');
        } else if (
            target.value === '+(381) 111-111-11') {
            btn.removeAttribute('disabled');
            form.addEventListener('submit', e => {
                e.preventDefault();
            });
        } else {
            btn.setAttribute('disabled', 'disabled');
            warningMessage.classList.remove('visible');
            phone.classList.replace('error', 'pin-code');
        }
    });
}