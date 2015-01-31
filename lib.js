//var list
var flip = $('#flip');
var link_one = $("#link_one").val();
var link_two = $("#link_two").val();
var set_one = $("#set_image_one");
var set_two = $("#set_image_two");
var image_one = $(".one").attr("src");
var image_two = $(".two").attr("src");
//config for first combo
var i = 2
var flipCount = 0

//generate combo
$("#generate").on('click', function(){
  if(i === combo.length){
  i = 0
  $(".one").attr("src", combo[i]);
  i++
  $(".two").attr("src", combo[i]);
  i++
  }
  else {
    $(".one").attr("src", combo[i]);
    i++
    $(".two").attr("src", combo[i]);
    i++
  }
})

//
function arrows(e){
  switch(e.which) {
    case 37: {
      i--
      $(".two").attr("src", combo[i]);
      i--
      $(".one").attr("src", combo[i]);
    }
    break;
    case 38: {
      var image_one = $(".one").attr("src");
      var image_two = $(".two").attr("src");
      $(".one").attr("src", image_two);
      $(".two").attr("src", image_one);
      flipCount++
    }
    break;
    case 39: {
        $(".one").attr("src", combo[i]);
        i++
        $(".two").attr("src", combo[i]);
        i++
    }// right
    break;
    case 40: {
      var image_one = $(".one").attr("src");
      var image_two = $(".two").attr("src");
      $(".one").attr("src", image_two);
      $(".two").attr("src", image_one);
      flipCount++
    }
    break;
    default: return;
  }
  e.preventDefault();
};

//apply arrows for cycling
$(document).keydown(function(e) {
  if( i === combo.length){
    i = 0
    arrows(e);
  }
  else if(i === 0){
    i === combo.length
    arrows(e);
  }
  else {
    arrows(e);
  }
});


//set link one
$("#set_image_one").on('click', function(){
  var value = $("#link_one").val();
  $(".one").attr("src", value);
})

//set link two
$("#set_image_two").on('click', function(){
  var value = $("#link_two").val();
  $(".two").attr("src", value);
})


//show controls
$(".button").on('click', function(){
  $(".controls").toggle();
});


//switch
$("#flip").on('click', function(){
  var image_one = $(".one").attr("src");
  var image_two = $(".two").attr("src");
  $(".one").attr("src", image_two);
  $(".two").attr("src", image_one);
  flipCount++
});

//set link one
$("#set_image_one").on('click', function(){
  var value = $("#link_one").val();
  $(".one").attr("src", value);
})

//set link two
$("#set_image_two").on('click', function(){
  var value = $("#link_two").val();
  $(".two").attr("src", value);
})

//opacity
$("#points").on("change", function(e){
  e.preventDefault;
  var value = $("#points").val();
  value = (value / 100);
  $(".one").css("opacity", value );
})


//collection
var combo = ['http://imgsrc.hubblesite.org/hu/db/images/hs-2009-28-b-large_web.jpg', 'http://imgsrc.hubblesite.org/hu/db/images/hs-2013-06-a-large_web.jpg','http://i.imgur.com/APXnuX9.jpg', 'http://i.imgur.com/tWggUi2.jpg', 'http://i.imgur.com/Sm7CLsX.jpg', "http://i.imgur.com/hwqjycB.jpg", 'http://i.imgur.com/uToSGD6.jpg','http://i.imgur.com/MhdxcD1.jpg', "http://api.ning.com/files/DtcI2O2Ry7DUF8Jo9nWz42UcinX*d271i5G8NPSb0PmPJLmFjIo7iymJzhTJCMLKdvqVHVFZp55LutPbe7QQAxX7Xt5AMseq/1082141698.jpeg", 'http://fusionflight.com/wp-content/uploads/2014/08/Earth-From-Space-Space-1080x1920.jpg', 'http://history.nasa.gov/ap15fj/photos/metric/as15-1541m.jpg',  'http://www.edmitchellapollo14.com/images/HomePageImages/edmitchellapollo14-WalkingOnTheMoon.jpg', 'http://i.imgur.com/RRZK4jz.jpg', 'http://i.imgur.com/hjqzNNh.jpg',
'http://i.imgur.com/udJX6v3.jpg',
'http://i.imgur.com/3GnMhSx.png',
'http://i.imgur.com/JuDTTz0.jpg',
'http://i.imgur.com/aa5L9Q3.jpg',
'http://i.imgur.com/Rq548Ux.jpg',
'http://i.imgur.com/0iVpzaa.jpg',
'http://i.imgur.com/beqlTTZ.jpg',
'http://i.imgur.com/n70PleR.jpg',
'http://i.imgur.com/A3TrfKk.jpg',
'http://i.imgur.com/dlh5nY9.jpg',
'http://i.imgur.com/Dl7WGJJ.jpg',
'http://i.imgur.com/FTzerop.jpg',
'http://i.imgur.com/2wW9D7b.jpg',
'http://i.imgur.com/Q3bUiHJ.gif',
"http://i.imgur.com/Wgr7PDD.jpg",
'http://i.imgur.com/kxM3Tri.jpg',
'http://i.imgur.com/oln2Bvb.jpg',
'http://i.imgur.com/BPkUx8x.jpg',
'http://i.imgur.com/jxVXLjF.jpg',
'http://i.imgur.com/1BhVE5f.jpg'
]


var additions = [3, '2']
