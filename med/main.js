$(document).ready(function () {
  var podcastDivs = $(".col.podcast");
  var index = 1;

  // Function to load file content
  function loadFile(filePath, index) {
    $.ajax({
      url: filePath,
      dataType: "text",
      success: function (data) {
        var firstLine = data.split("\n")[0];
        var secLine = data.split("\n")[1];

        var newElement =
          '<div class="card style="width: 18rem;"><img src="red.png" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
          firstLine +
          '</h5><p class="card-text">' +
          secLine +
          '</p><a href="#" class="btn btn-primary">Look at content</a></div></div>';

        podcastDivs.eq(index).append(newElement); // Use eq(index) to target specific podcast div
      },
      error: function (xhr, status, error) {
        console.error("Error loading file:", error);
      },
    });
  }
  podcastDivs.each(function () {
    var filep = "./content/" + index + "/" + index + ".txt";
    loadFile(filep, index - 1); // Pass index - 1 to loadFile function to match array indexing
    index++;
  });
});
