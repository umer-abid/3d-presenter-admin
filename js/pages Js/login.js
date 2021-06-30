// $(document).ready(function () {});
function adminLogin() {
  debugger;
  let Username = document.getElementById("inputUserName").value;
  let Password = document.getElementById("inputPassword").value;
  var loginData = JSON.stringify({
    username: Username,
    password: Password,
  });
  console.log("Prided Data is " + loginData);
  var settings = {
    url: "http://127.0.0.1:8000/login/",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
    data: loginData,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    document.getElementById("inputUserName").value = "";
    document.getElementById("inputPassword").value = "";
    localStorage.setItem("token", response.access);
    window.location.href = "/";
  });
  $.ajax(settings).fail(function (response) {
    console.log(response.responseJSON.detail);
    alert(response.responseJSON.detail);
  });
}
