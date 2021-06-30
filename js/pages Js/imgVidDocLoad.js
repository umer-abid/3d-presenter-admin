document.addEventListener("DOMContentLoaded", function (event) {
  const urlParams = new URLSearchParams(window.location.search);
  const roomid = urlParams.get("Roomid");
  alert("Hello i am ready " + roomid);
  var imageData = [];
  var videoData = [];
  var docData = [];
  var settingsImg = {
    url: `http://127.0.0.1:8000/rooms/images?roomId=` + roomid,
    method: "GET",
    async: false,
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
  };
  var settingsVideo = {
    url: `http://127.0.0.1:8000/rooms/videos?roomId=` + roomid,
    method: "GET",
    async: false,
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
  };
  var settingsDoc = {
    url: `http://127.0.0.1:8000/rooms/documents?roomId=` + roomid,
    method: "GET",
    async: false,
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Image Load AJax Call

  $.ajax(settingsImg).done(function (response1) {
    imageData = response1;
    // console.log("Data is " + imageData[0].id);
    if (imageData.length != 0) {
      for (var i = 0; i < imageData.length; i++) {
        let ImageData =
          `
            <div class="col-sm-6 col-md-4 col-lg-3 mt-2">
                          <div class="card" style="width: 100%">
                            <img
                              src="` +
          imageData[i].image +
          `"
                              class="card-img-top"
                            />
                            <div class="card-body text-center border rounded">
                              <button
                                type="button"
                                class="btn btn-danger mt-1 mt-md-0 mt-xl-0"
                                onclick="deleteimgbyid(` +
          imageData[i].id +
          `,` +
          roomid +
          `)"
                                
                              >
                                Delete
                                <i class="fa fa-trash" aria-hidden="true"></i>
                              </button>
                            </div>
                          </div>
                        </div>
            `;

        $("#imageMap").append(ImageData);
      }
    } else $("#imageMap").append("No Content Found");
  });
  // Video Load AJax Call
  $.ajax(settingsVideo).done(function (response2) {
    videoData = response2;
    // console.log("Data is " + videoData[0].id);
    if (videoData.length != 0) {
      for (var i = 0; i < videoData.length; i++) {
        let VideoData =
          `
          <div class="col-sm-6 col-md-4 col-lg-3 mt-2">
                        <div class="card" style="width: 100%,text-align:center">
                        <i class="text-center fas fa-video video-icon"></i>
                          <div class="card-body text-center border rounded">
                          <a class="video-anchor" target='_blank' href=` +
          videoData[i].video +
          `>
                                          <button
                                          type="button"
                                          class="btn btn-success"
                                          
                                        >
                                          play
                                          <i class="fa fa-play" aria-hidden="true"></i>
                                        </button>
                                        </a>
                            <button
                              type="button"
                              class="btn btn-danger mt-1 mt-md-0 mt-xl-0"
                              onclick="deletevideobyid(` +
          videoData[i].id +
          `,` +
          roomid +
          `)"
                                                    
                                                  >  
                            
                              Delete
                              <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                          </div>
                        </div>
                      </div>
          `;
        $("#videoMap").append(VideoData);
      }
    } else $("#videoMap").append("No Content Found");
  });
  // Document Load AJax Call
  $.ajax(settingsDoc).done(function (response3) {
    docData = response3;
    // console.log("Data is " + docData[0].id);
    if (docData.length != 0) {
      for (var i = 0; i < docData.length; i++) {
        var DocData =
          `
          <div class="col-sm-6 col-md-4 col-lg-3 mt-2">
                        <div class="card text-center" style="width: 100%">
                          <i class="m-1 fas fa-file-pdf pdfIconStyle"></i>
                          <div>
                            <h5 class="m-2 text-center DocTag">` +
          docData[i].title +
          `</h5>
                          </div>
                          <div class="card-body text-center border rounded">
                           <a class='btn btn-primary' href=` +
          docData[i].document +
          ` target="_blank">View Document</a>
                            <button
                              type="button"
                              class="btn btn-danger mt-1 mt-md-0 mt-xl-0"
                              onclick="deletedocbyid(` +
          docData[i].id +
          `,` +
          roomid +
          `)"
                                                    
                                                  > 
                              Delete
                              <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                          </div>
                        </div>
                      </div>
              `;

        $("#docMap").append(DocData);
      }
    } else $("#docMap").append("No Content Found");
  });
});
