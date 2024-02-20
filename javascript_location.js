 var nextButton = document.getElementById("next_btn");
 var locationInput = document.querySelector(".form_input_location");

 locationInput.addEventListener("input", function() {
    checkLocation();
});

function checkLocation() {
    var input_flag = locationInput.value.trim() !== ''; 
    console.log(input_flag);
    if(input_flag) {
        nextButton.classList.add("active");
    } else {
        nextButton.classList.remove("active");
    }
}
checkLocation();


