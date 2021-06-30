$(document).ready(function () {
  var room_data = {
    url: "https://intervideo-showroom.de/django/rooms",
    method: "GET",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
  };
  $.ajax(room_data).done(function (roomData) {
    RoomData = roomData;
    var x = document.getElementById("sendInvitationRoomValue");
    if (RoomData.length != 0) {
      for (var i = 0; i < RoomData.length; i++) {
        let option = document.createElement("option");
        option.text = RoomData[i].name;
        option.value = RoomData[i].id;
        x.add(option);
      }
    } else $("#imageMap").append("No Content Found");
  });
});

function sendInvitation() {
  debugger;
  var email = $("#invitationEmail").val();
  var selectedRoom = $("#sendInvitationRoomValue :selected").val();
  console.log("Value of Selected Room is", selectedRoom, email);
  var form = new FormData();
  form.append("useremail", email);
  form.append("roomid", selectedRoom);
  var settings = {
    url: "https://intervideo-showroom.de/django/invitation/",
    method: "POST",
    timeout: 0,
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
    data: form,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    alert("Invitation Send Successfully");
  });
}
