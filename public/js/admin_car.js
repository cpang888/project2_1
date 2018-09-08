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
    for (var i = 0; i < cars.length; i++) {
      console.log(cars[i]);
      $("#admincarTbody").append(
        "<tr>" +
          "<td>" +
          cars[i].year +
          "</td>" +
          "<td>" +
          cars[i].make +
          "</td>" +
          "<td>" +
          cars[i].model +
          "</td>" +
          "<td>" +
          cars[i].engine +
          "</td>" +
          "<td>" +
          cars[i].gasType +
          "</td>" +
          "<td>" +
          cars[i].vinNum +
          "</td>" +
          "<th scope='col'><button type='button' class='btn btn-outline-info' data-toggle='modal' " +
          "data-target='#editUser'>Edit</button></th>" +
          "<th scope='col'><button type='button' class='btn btn-outline-danger' data-toggle='modal' " +
          "data-target='#deleteUser'>Delete</button></th>" +
          "</tr>"
      );
    }

  }

  // Getting the initial list of cars
  getCars();
});
