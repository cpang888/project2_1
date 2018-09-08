$(document).ready(function() {
  // This function grabs users from the database and updates the view
  console.log("get Users ***");

  $(document).on("click", "#deleteBtn", handlePostDelete);
  // var users = [];

  function getUsers() {
    $.get("/api/drivers", function(data) {
      console.log("Users", data);
      users = data;
      initializeRows();
    });
  }

  function initializeRows() {
    console.log("initializeRow...");
    for (var i = 0; i < users.length; i++) {
      console.log(users[i]);
      $("#adminuserTbody").append(
        "<tr>" +
          "<td>" +
          users[i].id +
          "</td>" +
          "<td>" +
          users[i].fullName +
          "</td>" +
          "<th scope='col'><button type='button' class='btn btn-outline-info' data-toggle='modal' " +
          "data-target='#editUser'>Edit</button></th>" +
          "<th scope='col'><button type='button' class='btn btn-outline-danger' data-toggle='modal' " +
          "data-target='#deleteUser'>Delete</button></th>" +
          "</tr>"
      );
    }
  }

  // function deleteRow(r) {
  //   var i = r.parentNode.parentNode.rowIndex;
  //   document.getElementById("myTable").deleteRow(i);
  // }

  function handlePostDelete() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("id");
    console.log(currentPost.id);
    // deletePost(currentPost.id);
  }

  $("#deleteUser").click(function() {
    console.log("delete user: ");
  });

  // Getting the initial list of users
  getUsers();
});
