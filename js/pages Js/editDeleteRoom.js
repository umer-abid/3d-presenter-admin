function edit_row() {
  const urlParams = new URLSearchParams(window.location.search);
  const roomid = urlParams.get("Roomid");
  alert("Hello ROom id is " + roomid);
  document.getElementById("imgName").value = roomid;
  document.getElementById("docName").value = roomid;
  document.getElementById("videoName").value = roomid;
}
function delete_room(id) {
  debugger;
  console.log("Deleted Room number is " + id);
  var deleteRoom = {
    url: `https://intervideo-showroom.de/django/room/` + id,
    method: "DELETE",
    timeout: 0,
  };

  $.ajax(deleteRoom).done(function (response) {
    alert("Room Deleted Successfully : " + id);

    console.log(response);
    window.location.reload();
  });
}
