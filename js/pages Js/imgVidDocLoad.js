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
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
  };
  var settingsVideo = {
    url: `http://127.0.0.1:8000/rooms/videos?roomId=` + roomid,
    method: "GET",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
  };
  var settingsDoc = {
    url: `http://127.0.0.1:8000/rooms/documents?roomId=` + roomid,
    method: "GET",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Image Load AJax Call

  $.ajax(settingsImg).done(function (response) {
    debugger;

    imageData = response;
    console.log("Data is " + imageData[0].id);
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
  $.ajax(settingsVideo).done(function (response) {
    debugger;

    videoData = response;
    console.log("Data is " + videoData[0].id);
    if (videoData.length != 0) {
      for (var i = 0; i < videoData.length; i++) {
        let VideoData =
          `
          <div class="col-sm-6 col-md-4 col-lg-3 mt-2">
                        <div class="card" style="width: 100%">
                          <img
                            src="https://i.pinimg.com/originals/0f/9f/bc/0f9fbc273e1f2c2f8fb5371c71226040.jpg"
                            class="card-img-top"
                            alt="..."
                          />
                          <div>
                          <button
                          type="button"
                          class="btn btn-primary"
                          
                        >
                          <a target='_blank' href=` +
          videoData[i].video +
          `>play</a>
                          <i class="fa fa-play" aria-hidden="true"></i>
                        </button>
                          </div>
                          <div class="card-body text-center border rounded">
                            <button
                              type="button"
                              class="btn btn-primary mt-1 mt-md-0 mt-xl-0"
                              
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
  //   $.ajax(settingsDoc).done(function (response) {
  //     debugger;

  //     docData = response;
  //     console.log("Data is " + docData[0].id);
  //     if (docData.length != 0) {
  //       for (var i = 0; i < docData.length; i++) {
  //         var DocData =
  //           `
  //             <div class="col-sm-6 col-md-4 col-lg-3 mt-2">
  //                           <div class="card" style="width: 100%">
  //                             <img
  //                               src="` +
  //           docData[i].image +
  //           `"
  //                               class="card-img-top"
  //                               alt="..."
  //                             />
  //                             <div class="card-body text-center border rounded">
  //                               <button
  //                                 type="button"
  //                                 class="btn btn-danger mt-1 mt-md-0 mt-xl-0"
  //                                 data-toggle="modal"
  //                                 data-target="#deleteImage"
  //                               >
  //                                 Delete
  //                                 <i class="fa fa-trash" aria-hidden="true"></i>
  //                               </button>
  //                             </div>
  //                           </div>
  //                         </div>
  //             `;
  //         if (!DocData) {
  //           // $("#imageMap").append("Loading Content");
  //           // document.getElementById("imageMap").innerHTML("Loading Content");
  //         }
  //         // else $("#imageMap").append(ImageData);
  //       }
  //     }
  //     // else $("#imageMap").append("No Content Found");
  //   });
});
