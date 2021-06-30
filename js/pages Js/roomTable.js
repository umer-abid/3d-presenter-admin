$(document).ready(function () {
  var data = [];
  var settings = {
    url: "https://intervideo-showroom.de/django/rooms",
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    debugger;

    data = response;
    console.log("Data is " + data);

    var dataLength = data.length;
    console.log("Data Length is :", dataLength);
    if (dataLength != 0) {
      debugger;
      for (var i = 0; i < data.length; i++) {
        var table_row =
          `<tr>
    <td class="text-center">` +
          data[i].id +
          `</td>
    <td class="text-center">` +
          data[i].name +
          `</td>
    <td class="text-center">` +
          data[i].created_at +
          `</td>
    <td class="text-center">
    <a href="./editRoom.html?Roomid=` +
          data[i].id +
          `">
      
        <button id="edit_button` +
          data[i].id +
          `" class="btn btn-success" value = '` +
          data[i].id +
          `'>
          Edit<i class="ml-1 far fa-edit"></i>
          
        </button>
      </a>
      <button value=` +
          data[i] +
          ` type="button" id="delete_button` +
          data[i] +
          `" class="btn btn-danger mt-1 mt-md-0 mt-xl-0" data-toggle="modal" data-target="#deleteModal"
          
          onclick="delete_room(` +
          data[i].id +
          `)"
          >
        Delete<i class="ml-1 fas fa-trash-alt"></i>
      </button>
    </td>
  </tr>`;
        if (!table_row) {
          $("#roomTable tbody").append("Loading Content");
        } else $("#roomTable tbody").append(table_row);
      }
    } else $("#roomTable tbody").append("No Content Found");
    $("#roomTable").DataTable();
  });
});
