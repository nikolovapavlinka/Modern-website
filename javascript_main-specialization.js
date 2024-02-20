const formInputRole = document.querySelector(".form_input_select");
const optionSelect = document.querySelector(".option_select");

const showRoles = () => {
    optionSelect.style.display = "flex";
}

//_______________________________________________________________________

function show(option) {
    var input = document.querySelector('.form_input_select');
    input.value = option.textContent.trim();
}

var options = document.querySelectorAll('.option_select .item');
options.forEach(function(option) {
    option.addEventListener('click', function() {
        show(option);
    });
});

//_______________________________________________________________________

function toggleOptions() {
    var options = document.getElementById("optionSelect");
    if (options.style.display === "none") {
        options.style.display = "block";
    } else {
        options.style.display = "none";
    }
}

function select(option) {
    var selectInput = document.getElementById("input_select");
    selectInput.value = option.textContent;
    toggleOptions();
    checkSelect(); 
}

//_______________________________________________________________________

var nextButton = document.getElementById("next_btn");
var selectInput = document.querySelector(".form_input_select");

selectInput.addEventListener("input", function() {
   checkSelect();
});

function checkSelect() {
   var input_flag = selectInput.value.trim() !== ''; 
   console.log(input_flag);
   if(input_flag) {
       nextButton.classList.add("active");
   } else {
       nextButton.classList.remove("active");
   }
}




