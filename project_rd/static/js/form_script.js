// form_script.js

// You can add any JavaScript functionality you need here
console.log("JavaScript file loaded.");


document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle subject checkboxes based on class selection
    function toggleSubjectCheckboxes() {
        var classSelect = document.getElementById("class");
        var selectedClass = classSelect.options[classSelect.selectedIndex].value;
        var checkboxesDiv = document.getElementById("subjectCheckboxes");
        var mathLabel = document.getElementById("mathLabel");
        var physicsLabel = document.getElementById("physicsLabel");
        var chemistryLabel = document.getElementById("chemistryLabel");
        var scienceLabel = document.getElementById("scienceLabel");

        if (selectedClass === "9th" || selectedClass === "10th") {
            checkboxesDiv.style.display = "block";
            mathLabel.style.display = "block";
            scienceLabel.style.display = "block";
            physicsLabel.style.display = "none";
            chemistryLabel.style.display = "none";
        } else if (selectedClass === "11th" || selectedClass === "12th") {
            checkboxesDiv.style.display = "block";
            mathLabel.style.display = "block";
            physicsLabel.style.display = "block";
            chemistryLabel.style.display = "block";
            scienceLabel.style.display = "none";
        } else {
            checkboxesDiv.style.display = "none";
        }
    }

    // Event listener for class select change
    document.getElementById("class").addEventListener("change", toggleSubjectCheckboxes);

    // Function to show/hide other checkbox options
    function toggleOtherCheckboxes() {
        var otherCheckboxLabel = document.getElementById("other");
        var sainikCheckbox = document.getElementById("sainikCheckbox");
        var navodayaCheckbox = document.getElementById("navodayaCheckbox");

        if (sainikCheckbox.checked || navodayaCheckbox.checked) {
            otherCheckboxLabel.style.display = "block";
        } else {
            otherCheckboxLabel.style.display = "none";
        }
    }

    // Event listeners for other checkbox options
    document.getElementById("sainikCheckbox").addEventListener("change", toggleOtherCheckboxes);
    document.getElementById("navodayaCheckbox").addEventListener("change", toggleOtherCheckboxes);
});

