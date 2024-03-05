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
        if (TitlePod !== undefined) {
          var newElement =
            '<div class="card style="width: 18rem;"><img src="red.png" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
            Author +
            '</h5><p class="card-text">' +
            TitlePod +
            '</p><p class="card-text">' +
            PodLength +
            '</p><a href="#" class="btn btn-primary podcast">Look at content</a></div></div>';
        } else {
          var newElement =
            '<div class="card style="width: 18rem;"><img src="red.png" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
            Author +
            '</h5><div class="spinner-grow" role="status"><span class="visually-hidden">Loading...</span></div></div></div>';
        }
        console.log(newElement);
        podcastDivs.eq(index-1).append(newElement);

        if (TitleTut !== undefined) {
          var newElement =
            '<div class="card style="width: 18rem;"><img src="green.png" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
            Author +
            '</h5><p class="card-text">' +
            TitleTut +
            '</p><p class="card-text">' +
            TutLength +
            '</p><a href="#" class="btn btn-primary tutorial">Look at content</a></div></div>';
        } else {
          var newElement =
            '<div class="card style="width: 18rem;"><img src="green.png" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
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
    var filep = "./content/" + index + "/" + index + ".txt";
    loadFile(filep, index);
    index++;
  });
});
