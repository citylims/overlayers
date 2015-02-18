//config for first combo
var i = 2
//generate combo
$("#generate").on('click', function() {
  if(i === combo.length) {
    i = 0
    forward();
  }
  else {
    forward();
  }
});

//next combo
function forward() {
  $(".one").attr("src", combo[i]);
  $(".two").attr("src", combo[i+1]);
  return i += 2;
};

//previous combo
function backward() {
  $(".one").attr("src", combo[i-2]);
  $(".two").attr("src", combo[i-1]);
  return i -= 2;
};

//switch
function flip() {
  var image_one = $(".one").attr("src");
  var image_two = $(".two").attr("src");
  $(".one").attr("src", image_two);
  $(".two").attr("src", image_one);
};

document.querySelector("#flip").addEventListener("click", flip);

//keybinding arrows
function arrows(e) {
  switch(e.which) {
    case 37: {
      backward();
    }
    break;
    case 38: {
      flip();

    }
    break;
    case 39: {
        forward();
    }
    break;
    case 40: {
      flip();
    }
    break;
    default: return;
  }
  e.preventDefault();
};

//apply arrows for cycling
$(document).keydown(function(e) {
  if( i === combo.length) {
    i = 0
    arrows(e);
  }
  else if(i === 0) {
    i === combo.length
    arrows(e);
  }
  else {
    arrows(e);
  }
});

//show controls
$("#hide").on('click', function() {
  $(".controls").toggle();
});

//set link one
$("#set_image_one").on('click', function() {
  var link = $("#link_one").val();
  $(".one").attr("src", link);
});

//set link two
$("#set_image_two").on('click', function() {
  var link = $("#link_two").val();
  $(".two").attr("src", link);
});

//opacity
$("#points").on("change", function(e) {
  e.preventDefault;
  var opacity = $("#points").val();
  $(".one").css("opacity", opacity / 100);
});

//collection
var combo = [
'http://i.imgur.com/gvtGp3r.jpg',
'http://i.imgur.com/JHsYx38.jpg',
'http://i.imgur.com/APXnuX9.jpg',
'http://i.imgur.com/tWggUi2.jpg',
'http://i.imgur.com/Sm7CLsX.jpg',
'http://i.imgur.com/hwqjycB.jpg',
'http://i.imgur.com/uToSGD6.jpg',
'http://i.imgur.com/MhdxcD1.jpg',
'http://i.imgur.com/cFGDHj4.jpg',
'http://i.imgur.com/TfGeK3v.jpg',
'http://i.imgur.com/O3cWx3f.jpg',
'http://i.imgur.com/AFDWvN7.jpg',
'http://i.imgur.com/RRZK4jz.jpg',
'http://i.imgur.com/hjqzNNh.jpg',
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

// var additions = [3,'2']
