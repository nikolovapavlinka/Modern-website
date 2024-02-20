var slider = document.getElementById("rangeInput");
var sliderFill = document.getElementById("sliderFill");
var sliderHandle = document.getElementById("sliderHandle");

slider.addEventListener("input", function() {
  var percent = (slider.value - slider.min) / (slider.max - slider.min) * 100;
  sliderFill.style.width = percent + "%";
  sliderHandle.style.left = percent + "%";
});

// Иницијализација на позицијата на слајдерот
var initialPercent = (slider.value - slider.min) / (slider.max - slider.min) * 100;
sliderFill.style.width = initialPercent + "%";
sliderHandle.style.left = initialPercent + "%";
