cxt = document.getElementById('bg').getContext('2d')
var imgs = new Image();
imgs.src = "./wood_512.jpg";
imgs.onload = createPat;//图片加载完成再执行
function createPat(){
    var bg = cxt.createPattern(imgs,'repeat');
    cxt.fillStyle = bg;
    cxt.fillRect(0,0,600,600);
}

