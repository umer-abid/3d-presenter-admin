$(document).ready(function () {
  var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var ldLength = ids.length;
  if (ldLength != 0) {
    debugger;
    for (var i = 0; i < ids.length; i++) {
      var table_row =
        `<tr>
    <td>` +
        ids[i] +
        `</td>
    <td>Science</td>
    <td>12/01/2001</td>
    <td class="text-center">
      <a href="./editRoom.html">
        <button class="btn btn-success" value = '` +
        ids[i] +
        `'>
          Edit<i class="ml-1 far fa-edit"></i>
        </button>
      </a>
      <button value=` +
        ids[i] +
        ` type="button" class="btn btn-danger mt-1 mt-md-0 mt-xl-0" data-toggle="modal" data-target="#deleteModal">
        Delete<i class="ml-1 fas fa-trash-alt"></i>
      </button>
    </td>
  </tr>`;
      $("#roomTable tbody").append(table_row);
    }
  } else $("#roomTable tbody").append("No Content Found");
  $("#roomTable").DataTable();
});
