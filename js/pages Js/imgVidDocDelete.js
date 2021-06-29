//   Delete Image Function
function deleteimgbyid(imgid, roomid) {
  debugger;

  console.log("Image Deleted" + imgid + roomid);
  var form = new FormData();
  var ImgDelete = {
    url: `http://127.0.0.1:8000/rooms/images/` + imgid + `?roomId=` + roomid,
    method: "DELETE",
    timeout: 0,
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
    data: form,
  };

  $.ajax(ImgDelete).done(function (response) {
    console.log(response);
    alert("Image Deleted Successfully");
    window.location.reload();
  });
}
//   Delete Document Function
function deletedocbyid(docid, roomid) {
  debugger;

  console.log("Document Deleted" + docid + roomid);
  var form = new FormData();
  var DocDelete = {
    url: `http://127.0.0.1:8000/rooms/documents/` + docid + `?roomId=` + roomid,
    method: "DELETE",
    timeout: 0,
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
    data: form,
  };

  $.ajax(DocDelete).done(function (response) {
    console.log(response);
    alert("Document Deleted Successfully");
  });
}
//   Delete Video Function
function deletevideobyid(vidid, roomid) {
  debugger;

  console.log("Video Deleted" + vidid + roomid);
  var form = new FormData();
  var VidDelete = {
    url: `http://127.0.0.1:8000/rooms/videos/` + vidid + `?roomId=` + roomid,
    method: "DELETE",
    timeout: 0,
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
    data: form,
  };

  $.ajax(VidDelete).done(function (response) {
    console.log(response);
    alert("Video Deleted Successfully");
  });
}
