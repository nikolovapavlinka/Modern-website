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

// Ja menuva slikickata gore-gole i go otvara menito dolu

var arrowImg = document.getElementById("arrow_img");
var upArrowImg = document.getElementById("up_arrow_img");
var isArrowDown = true;


function toggleOptions() {
    var options = document.getElementById("optionSelect");
    if (options.style.display === "none") {
        options.style.display = "block";
    } else {
        options.style.display = "none";
    }

    if (isArrowDown) {
        arrowImg.style.display = "inline";
        upArrowImg.style.display = "none";
    } else {
        arrowImg.style.display = "none";
        upArrowImg.style.display = "inline";
    }
    
    isArrowDown = !isArrowDown;
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








