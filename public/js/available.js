$.get("/api/all", function(data) {
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold item data
    var tableSelection = $("<tr>");
      // tableSelection.addClass("well");
      tableSelection.attr("id", "item-table-" + i);
      $("#table-content").append(tableSelection);

      $("#item-table-" + i).append("<td><h4>" + (i + 1) + ". " + "</h4></td>")
      $("#item-table-" + i).append("<td><h4>" + data[i].name + "</h4></td>");
      $("#item-table-" + i).append("<td><h4>" + data[i].category + "</h4></td>");
      $("#item-table-" + i).append("<td><h4>" + data[i].quantity + "</h4></td>");
      $("#item-table-" + i).append("<td><h4>" + data[i].expiration + "</h4></td>");
      $("#item-table-" + i).append("<td><button class='reserve btn btn-primary' data-id='" + data[i].id + "'>Reserve</button></td>");
    }

      function renderItem(data) {

        $(".reserve").click(function() {
          
          var info = {
            id: $(this).attr("data-id")
          };
    
          $.post("/api/reserved", info)
            .done(function(deldata) {
              console.log(deldata);
              console.log("Deleted Successfully!");
            });
          $(this).closest("tr").remove();   
        });    
      } 
      renderItem();
});