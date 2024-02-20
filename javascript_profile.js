document.addEventListener("DOMContentLoaded", function() {
    var linkedinInput = document.querySelector('#linkedin_input');
    var noLinkedinBtn = document.querySelector('#no_linkedin_btn');

    noLinkedinBtn.addEventListener('change', function() {
        if (noLinkedinBtn.checked) {
            linkedinInput.classList.add('disabled');
            linkedinInput.disabled = true;
        } else {
            linkedinInput.classList.remove('disabled');
            linkedinInput.disabled = false;
        }
    });
});

