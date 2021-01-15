$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

var puzzleItem = $("#puzzle-dropdown a");
// console.log(puzzleItem);
$(".puzzle-shape img").attr("src", "assets/img/puzzle-48.png");

puzzleItem.click(function (event) {
  event.preventDefault();

  // var imgUrl = $(".puzzle-shape img").attr('src');
  // console.log(event.currentTarget.id);
  var currentTargetId = event.currentTarget.id;

  var mainHead = $("#main-head");
  var selectBtn = $("#puzzle-select-btn .selection-item");
  var selectBtnItem = $(event.currentTarget).children().html();
  selectBtn.html(selectBtnItem);
  // console.log(selectBtn,"Selectitem");

  if (currentTargetId === "48p") {
    $(".puzzle-shape img").attr("src", "assets/img/puzzle-48.png");
    mainHead.text("Puzzle photo 48 pieces");
  } else if (currentTargetId === "100p") {
    $(".puzzle-shape img").attr("src", "assets/img/puzzle-100.png");
    mainHead.text("Puzzle photo 100 pieces");
  } else if (currentTargetId === "200p") {
    $(".puzzle-shape img").attr("src", "assets/img/puzzle-200.png");
    mainHead.text("Puzzle photo 200 pieces");
  } else if (currentTargetId === "500p") {
    $(".puzzle-shape img").attr("src", "assets/img/puzzle-500.png");
    mainHead.text("Puzzle photo 500 pieces");
  } else if (currentTargetId === "1000p") {
    $(".puzzle-shape img").attr("src", "assets/img/puzzle-1000.png");
    mainHead.text("Puzzle photo 1000 pieces");
  } else if (currentTargetId === "2000p") {
    $(".puzzle-shape img").attr("src", "assets/img/puzzle-2000.png");
    mainHead.text("Puzzle photo 2000 pieces");
  }
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(".image-main img").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

$("#imgInp").change(function () {
  readURL(this);
});
// $("#image").Cropper({
//   data: null,
// });


// var canvasNow = $("#output canvas");
// console.log(canvasNow.html(),"canvas")

// $("#catch").html();
// puzzleItem.each(function( index, item ) {
//     var value = $(this)
//     console.log( value );
//   });

// iterate = () => {

// }
