document.getElementById("myForm").onsubmit = function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get all text input elements in the form
  var inputs = document.querySelectorAll(
    '#myForm input[type="text"], #myForm input[type="password"]'
  );

  // Loop through each input to check if it is empty
  inputs.forEach(function (input) {
    // Find the next sibling element
    var nextSibling = input.nextElementSibling;
    // Find the previous sibling element
    var previousSibling = input.previousElementSibling;

    // Check if the input is empty
    if (input.value.trim() === "") {
      // Write the input name in the next sibling element
      nextSibling.textContent = "The field " + input.name + " is empty.";
      // Set the display property of the previous sibling to block
      if (previousSibling) {
        previousSibling.style.display = "block";
      }
    } else {
      // Clear the text content if the input is not empty
      nextSibling.textContent = "";
      // Reset the display property of the previous sibling
      if (previousSibling) {
        previousSibling.style.display = "";
      }
      if (input.name === "email") {
        // const alertEmail = document.querySelector(".alert-email");
        var regex =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(input.value.toLowerCase())) {
          // alert("The email address is valid.");
          nextSibling.textContent = "The email address is valid.";
          previousSibling.style.display = "";
        } else {
          // alert("The email address is not valid.");
          nextSibling.textContent = "The email address is not valid.";
          previousSibling.style.display = "block";
        }
      }
    }
  });
};
