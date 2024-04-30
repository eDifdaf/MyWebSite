$(document).ready(function () {
  var podcastDivs = $(".col.podcast");
  var tutorialDivs = $(".col.tutorial");
  var index = 1;

  // Function to load file content
  function loadFile(filePath, index) {
    $.ajax({
      url: filePath,
      dataType: "text",
      success: function (data) {
        var Author = data.split("\n")[0];
        var TitlePod = data.split("\n")[1];
        var PodLength = data.split("\n")[2];
        var TitleTut = data.split("\n")[3];
        var TutLength = data.split("\n")[4];
        if (TitlePod !== undefined && TitlePod !== "\r") {
          var newElement =
            '<div class="card style="width: 18rem;"><img src="/Medientechnik/red.png" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
            Author +
            '</h5><p class="card-text">' +
            TitlePod +
            '</p><p class="card-text">' +
            PodLength +
            '</p><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#PodcastModal" data-content="'+index+'">Look at content</button></div></div>';
        } else {
          var newElement =
            '<div class="card style="width: 18rem;"><img src="/Medientechnik/red.png" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
            Author +
            '</h5><div class="spinner-grow" role="status"><span class="visually-hidden">Loading...</span></div></div></div>';
        }
        podcastDivs.eq(index-1).append(newElement);

        if (TitleTut !== undefined && TitleTut !== "\r") {
          var newElement =
            '<div class="card style="width: 18rem;"><img src="/Medientechnik/green.png" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
            Author +
            '</h5><p class="card-text">' +
            TitleTut +
            '</p><p class="card-text">' +
            TutLength +
            '</p><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#TutorialModal" data-content="'+index+'">Look at content</button></div></div>';
        } else {
          var newElement =
            '<div class="card style="width: 18rem;"><img src="/Medientechnik/green.png" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
            Author +
            '</h5><div class="spinner-grow" role="status"><span class="visually-hidden">Loading...</span></div></div></div>';
        }
        tutorialDivs.eq(index-1).append(newElement);
      },
      error: function (xhr, status, error) {
        console.error("Error loading file:", error);
      },
    });
  }
  podcastDivs.each(function () {
    var filep = "/Medientechnik/content/" + index + "/" + index + ".txt";
    loadFile(filep, index);
    index++;
  });
});
