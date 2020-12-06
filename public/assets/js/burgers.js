// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".create-form").on("submit", (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger: $("#burger").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newBurger = $(this).data("devoured");

    var newBurgerState = {
      devoured: !newBurger
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(function() {
        console.log("changed devoured to", newBurgerState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
