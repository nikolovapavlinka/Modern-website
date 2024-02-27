// Mi gi selektira elementite i ja menuva bojata koga se kliknati i moze da se odkliknat i
// moze da se klika na celiot li element i da se selektira checkbox

function toggleCheckbox(liElement) {
    var checkbox = liElement.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    updateCheckboxStyle(checkbox);


function updateCheckboxStyle(checkbox) {
    if (checkbox.checked) {
        checkbox.parentNode.parentNode.classList.add('checked');
    } else {
        checkbox.parentNode.parentNode.classList.remove('checked');
    }
}

// Ovde se vrsi - koga ke se klikne elementot od menito ostanuva kliknato i pod input se dodava toj element
// Se dodava i iks koj koga ke se klikne se brise elementot

var text = liElement.textContent.trim();
var selectedRoles = document.getElementById("selectedRoles");
console.log(text);
// Se kreikra nov div element za toa sto sme go kliknale
var selectedOption = document.createElement("div");
selectedOption.classList.add("selected_option");

// Se dodava tekstot od toa sto sme go selektirale
selectedOption.textContent = text;

// Se dodava iksot 
var removeIcon = document.createElement("span");
removeIcon.classList.add("remove_option");
removeIcon.innerHTML = "&times;";

// se dodava nastan za brisenje na elementot
removeIcon.addEventListener("click", function() {
    selectedOption.remove();
});

// Додајте го иксот за отстранување на селектираната опција
selectedOption.appendChild(removeIcon);

// Додајте го елементот во листата на селектирани опции
selectedRoles.appendChild(selectedOption);
}

//_______________________________________________________________________

const formInputRole = document.querySelector(".form_input_select");
const optionSelect = document.querySelector(".option_select");

const showRoles = () => {
    optionSelect.style.display = "flex";
}

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

//_______________________________________________________________________

// Ovde se pravi da moze koga ke se napise nesto vo input poleto da se pokaze toa sto se pisuva
// del od zborot ili cel zbor, se pojavuvaat opciite koi go osodrzat toa sto se pisuva vo input poleto

formInputRole.addEventListener('input', function() {
    // Ja zemame vrednosta od input poleto
    const inputValue = formInputRole.value.toLowerCase().trim();
    
    const options = optionSelect.querySelectorAll('li');

    // Proveruva za sekoja opcija dali ja sodrzi sodrzinata sto se pisuva vo input poleto
    options.forEach(option => {
        const optionText = option.textContent.toLowerCase().trim();
        // Ako vrednosta od input poleto ja sodrzvi vo nekoja od opciite togas tokazi ja opcijata ako ne skrij a
        if (optionText.includes(inputValue)) {
            option.style.display = 'flex';
        } else {
            option.style.display = 'none';
        }
    });

// const visibleOptions = Array.from(options).filter(option => option.style.display !== 'none');
//     optionSelect.style.height = `${visibleOptions.length * 30}px`; 
});















