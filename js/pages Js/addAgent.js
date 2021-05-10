$(document).ready(function () {
  $("#confirmPassword").on("keyup", function () {
    var password = $("#inputPassword").val();
    var confirmPassword = $("#confirmPassword").val();
    if (password != confirmPassword)
      $("#CheckPasswordMatch")
        .html("Password does not match !")
        .css("color", "red");
    else
      $("#CheckPasswordMatch").html("Password match !").css("color", "green");
  });
});
function addAgent() {
  //   e.preventDefault();

  alert("Agent Added Succesfully");
  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var email = $("#inputEmail").val();
  var firstName = $("#firstName").val();
  var password = $("#inputPassword").val();
  var confirmPassword = $("#confirmPassword").val();
  if (password === confirmPassword) {
    console.log(
      "Entered Data is ",
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    );
  } else {
    alert("Password does not matched");
  }
}
