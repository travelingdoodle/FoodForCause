$("#search-btn").on("click", function(event) {
  event.preventDefault();

  var itemSearched = $("#item-search").val().trim();

  $.get("/api/" + itemSearched, function(data) {
    console.log(data);
    renderItem(data);

  });
});

function renderItem(data) {
  if (data.length !== 0) {

    $("#stats").empty();
    $("#stats").show();
    $('statsTitle').show();

    for (var i = 0; i < data.length; i++) {

      var div = $("<div>");

      div.append("<h2>" + data[i].name + "</h2>");
      div.append("<p>Category: " + data[i].category + "</p>");
      div.append("<p>Expiration (Days): " + data[i].expiration + "</p>");
      div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE ITEM</button>");

      $("#stats").append(div);

    }

    $(".delete").click(function() {

      var info = {
        id: $(this).attr("data-id")
      };

      $.post("/api/delete", info)
        .done(function(deldata) {
          console.log(deldata);
          console.log("Deleted Successfully!");
        });

      $(this).closest("div").remove();

    });

  }
}
