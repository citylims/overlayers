window.onload = function() {
  console.log("onload")
  var collection = {};
  callCollect();

}

function callCollect() {
  var collection = new Generate(combo);
  console.log(collection);
}

function Generate(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i ++) {
    var item = {
      top: arr[i],
      bottom: arr[(i)+1]
    }
    result.push(item);
    this.collection = result;
  }
}



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
