document.addEventListener("DOMContentLoaded", function() {
    var inputs = document.querySelectorAll(".form_input");
    var radioBtn = document.getElementById("click_btn");
    var nextButton = document.getElementById("next_btn");

    // Da proveri za input polinjata - Personal_details
    inputs.forEach(function(input) {
        input.addEventListener("input", function() {
            check();
        });
    });

    // Da proveri dali ima promena na radio kopceto - Personal details
    radioBtn.addEventListener("change", function() {
        check();
    });

    function check() {
        var allInputs = true;
        inputs.forEach(function(input) {
            if (!input.value) {
                allInputs = false;
            }
        });

        var clicked_btn = radioBtn.checked;

        // Proveruva dali se popolneti polinjata i dali e klimnato radio kopceto - Personal_details
        if (allInputs && clicked_btn) {
            nextButton.classList.add("active");
        } else {
            nextButton.classList.remove("active");
        }
    }
    check();
});





