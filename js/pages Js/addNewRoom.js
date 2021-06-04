function getQueryParameter() {
  console.log(
    "Entered Room value is ",
    document.getElementById("newRoomName").value
  );
  debugger;
  let params = new URLSearchParams(window.location.search);

  let notify = params.get("notify");
  let status = params.get("status");
  let message = params.get("msg");
  if (notify == "0") {
    if (status === "true") {
      var data = `<div class="text-center alert alert-success" role="alert"> Room Added Sussessfully <i class="fa fa-check" aria-hidden="true"></i> </div>`;
      document.getElementById("created").innerHTML = data;
    } else if (status === "false") {
      var data = `<div class="text-center alert alert-danger" role="alert"> Room Already Exist <i class="fa fa-times" aria-hidden="true"></i> </div>`;
      document.getElementById("created").innerHTML = data;
    }
    debugger;
    window.history.pushState(null, null, window.location.pathname);
  } else {
    document.getElementById("created").innerHTML = "";
    null;
  }
  console.log(status);
  console.log(notify);
}
