$("#add-btn").on("click", function(event) {
  event.preventDefault();

  var newItem = {
    name: $("#name").val().trim(),
    category: $("#category").val().trim(),
    quantity: $("#quantity").val().trim(),
    expiration: $("#expiration").val().trim(),
  };

  $.post("/api/new", newItem)
    .done(function(data) {
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#category").val("");
  $("#quantity").val("");
  $("#expiration").val("");
});
