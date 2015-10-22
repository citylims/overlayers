window.onload = function() {
  overLayers(arr);
}

var overLayers = function(arr) {

  var collection = new Generate(arr);

  init();

  function init() {
    console.log(collection);
    refreshDisplay();
    $(document).keydown(function(e) {
      arrows(e);
    });
  }

  function Generate(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i = i + 2) {
      var item = {
        top: arr[i],
        bottom: arr[i+1]
      }
      result.push(item);
      this.combos = result;
    }
  }

  function refreshDisplay() {
    console.log(collection.combos[0]);
    $(".top").attr("src", collection.combos[0].top);
    $(".bottom").attr("src", collection.combos[0].bottom);
  }

  function movement(direction) {
    var topImg = $('.top').attr('src');
    var bottomImg = $('.bottom').attr('src');
    if (direction === "flip") {
      $(".top").attr("src", bottomImg);
      $(".bottom").attr("src", topImg);
    } else {
      for (var i = 0; i < collection.combos.length; i ++) {
        if (collection.combos[i].top === topImg &&
          collection.combos[i].bottom === bottomImg) {
          console.log("match");
          if (direction === "forward") {
            console.log("forward");
            $(".top").attr("src", collection.combos[i + 1].top);
            $(".bottom").attr("src", collection.combos[i + 1].bottom);
          }
          else if(direction === "backward") {
            console.log("backward");
            console.log("pos" + collection.combos[i-1]);
            $(".top").attr("src", collection.combos[i - 1].top);
            $(".bottom").attr("src", collection.combos[i - 1].bottom);
          }
        }
      }
    }
  }

  //events
  $("#generate").on('click', function() {
    movement("forward");
  });

  $("#flip").on('click', function() {
    flip();
  })

  $("#hide").on('click', function() {
    $(".controls").toggle();
  });

  $("#points").on("change", function(e) {
    e.preventDefault;
    var opacity = $("#points").val();
    $(".top").css("opacity", opacity / 100);
  });

  //keybinding functions
  function arrows(e) {
    var topImg = $(".top").attr("src");
    switch(e.which) {
      case 37: {
        movement("backward");
      }
      break;
      case 38:
      case 40: {
        movement("flip")
      }
      break;
      case 39: {
          movement("forward");
      }
      break;
      default: return;
    }
    e.preventDefault();
  };
}//overlayers

//combo array
var arr = [
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
