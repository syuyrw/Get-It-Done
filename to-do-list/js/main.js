// Get name for new item
function getNewItem() {
    const inputCheckBox = document.getElementById("new-item");
    const createCheckBox = inputCheckBox.value.trim();

    if (!createCheckBox) return;

    const container = document.getElementById("to-do");

    // Create new checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "item";
    checkbox.checked = false;

    const label = document.createElement("label");
    label.appendChild(document.createTextNode(" " + createCheckBox));

    const itemContainer = document.createElement("div");
    itemContainer.appendChild(checkbox);
    itemContainer.appendChild(label);

    // If checkbox is checked, move to done
    checkbox.addEventListener("change", function () {
        const toDoSection = document.getElementById("to-do");
        const doneSection = document.getElementById("done");

        if (this.checked) {
            doneSection.appendChild(itemContainer);
        } else {
            toDoSection.appendChild(itemContainer);
        }
    });

    container.appendChild(itemContainer);
    inputCheckBox.value = "";
}

// Clear boxes when reset is clicked
function removeAllBoxes() {
    document.getElementById("to-do").innerHTML = "";
    document.getElementById("done").innerHTML = "";
}

// Uncheck all checkboxes
function uncheckAll() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const toDoSection = document.getElementById("to-do");

    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;

        //move to to-do when unchecked
        const itemContainer = checkbox.closest("div");
        toDoSection.appendChild(itemContainer);
    });
}

// Check all boxes
function checkAll() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const doneSection = document.getElementById("done");
    checkboxes.forEach((checkbox) => {
        checkbox.checked = true;

        // Move to done when checked
        const itemContainer = checkbox.closest("div");
        doneSection.appendChild(itemContainer);
    })
}