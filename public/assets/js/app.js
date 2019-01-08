// $( document ).ready(function() {
// $(".updateBurger").on("click", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();
//     console.log(this.id)

//     var id = $("[name=id]").val().trim();

//     var updateBurger = {
//       burger: $("#updateBurger [name=burger]").val().trim()
//     };

//     // Send the PUT request.
//     $.ajax("/burgers/" + id, {
//       type: "PUT",
//       data: updateBurger
//     }).then(
//       function() {
//         console.log("updated id ", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
// });
$(document).ready(function () {
  $(function () {
    $(".updateBurger").on("click", function (event) {
      let id = $(this).data("id");
      console.log(id);
      let newDevoured = $(this).data("newdevoured");

      let newDevouredState = {
        devoured: newDevoured
      };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(location.reload());
    });

    $("#submitBurger").on("click", function (event) {
      event.preventDefault();

      let newburger = {
        name: $("#burgerName").val().trim(),
        devoured: false
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newburger
      }).then(location.reload());
    });
  });
});