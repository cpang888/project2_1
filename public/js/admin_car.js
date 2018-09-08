$(document).ready(function() {
  // This function grabs cars from the database and updates the view
  console.log("get Cars ***");

  var cars = [];

  function getCars() {
    $.get("/api/cars", function(data) {
      console.log("Cars", data);
      cars = data;
      initializeRows();
    });
  }

  function initializeRows() {
    console.log("initializeRow...");
    // blogContainer.empty();
    // var postsToAdd = [];
    for (var i = 0; i < cars.length; i++) {
      //   postsToAdd.push(createNewRow(posts[i]));
      console.log(cars[i]);
    }
    // blogContainer.append(postsToAdd);
  }

  // Getting the initial list of cars
  getCars();
});
