// Wait to to attach handlebars until DOM loaded
$(function() {
  $(".change-consumed").on("click", function(event) {
    var id = $(this).data("id");
    var newconsumed = $(this).data("newconsumed");

    var newconsumedState = {
      devoured: newconsumed
    };

    //Move shake
    $.ajax("/api/shakes/" + id, {
      type: "PUT",
      data: newconsumedState
    }).then(
      function() {
        console.log("Changed location to", newconsumed);
        location.reload();
      }
    );
  });

  // Post new shake
  $(".form").on("submit", function(event) {
    event.preventDefault();
    var newshake = {
      name: $("#newFlavor").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };
      $.ajax("/api/shakes", {
      type: "POST",
      data: newshake
    }).then(
      function() {
        console.log("created new shake");
        location.reload();
      }
    );
  });

// Delete shake  
  $(".delete-shake").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/shakes/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("Deleted shake", id);
        location.reload();
      }
    );
  });
});
