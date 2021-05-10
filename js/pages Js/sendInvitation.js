alert("heelo i am invitation js");
function sendInvitation(e) {
  //   e.preventDefault();
  var email = $("#invitationEmail").val();
  var selectedRoom = $("#sendInvitationRoomValue :selected").val();
  console.log("Value of Selected Room is", selectedRoom, email);
}
