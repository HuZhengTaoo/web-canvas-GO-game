function grid(ctx){
    for(var i=0; i<19; i++){
        ctx.beginPath()
        ctx.moveTo(0+30,(i+1)*30)
        ctx.lineTo(600-30,(i+1)*30)
        ctx.stroke()
    }
    for (var i = 0; i < 19; i++) {
		ctx.beginPath();
		ctx.moveTo((i+1)*30,   0+30);
		ctx.lineTo((i+1)*30, 600-30);
		ctx.stroke();
	}
}

//画出星位点
function ninePoints(ctx){
    var np =new Array(
		[120,120],[300,120],[480,120],
		[120,300],[300,300],[480,300],
		[120,480],[300,480],[480,480]
    );

    for (var i = 0; i < np.length; i++) {
		//circle
		ctx.beginPath();
		ctx.arc(np[i][0],np[i][1],3,0,2*Math.PI,false);
		ctx.fillStyle="black";
		ctx.fill();
	}
    
}

function mousedownHandler(e) {
	
	var x, y;
	if (e.offsetX || e.offsetX == 0) {
		x = e.offsetX; //- imageView.offsetLeft;
		y = e.offsetY; //- imageView.offsetTop;
	}
	if (x < 30-10 || x > 600-30+10)
		return;
	if (y < 30-10 || y > 600-30+10)
		return;
	
	var xok = false;
	var yok = false;
	var x_;
	var y_;
	for (var i = 1; i <= 19; i++) {
		if (x > i*30-15 && x < i*30+15) {
			x = i*30;
			xok = true;
			x_ = i - 1;
		}
		if (y > i*30-15 && y < i*30+15) {
			y = i*30;
			yok = true;
			y_ = i - 1;
		}
	}
	if (!xok || !yok)
		return;

	play(x_, y_, move_count);
	showPan(pan,move_record,move_record)
}
function signHandle(e) {
	
	var x, y;
	if (e.offsetX || e.offsetX == 0) {
		x = e.offsetX; //- imageView.offsetLeft;
		y = e.offsetY; //- imageView.offsetTop;
	}
	if (x < 30-10 || x > 600-30+10)
		return;
	if (y < 30-10 || y > 600-30+10)
		return;
	
	var xok = false;
	var yok = false;
	var x_;
	var y_;
	for (var i = 1; i <= 19; i++) {
		if (x > i*30-15 && x < i*30+15) {
			x = i*30;
			xok = true;
			x_ = i - 1;
		}
		if (y > i*30-15 && y < i*30+15) {
			y = i*30;
			yok = true;
			y_ = i - 1;
		}
	}
	if (!xok || !yok)
		return;

	play(x_, y_, move_count);
	
	showPan(pan,move_record,move_record)
}
function mousemoveHandler(e) {
	var x, y;
	if (e.offsetX || e.offsetX == 0) {
		x = e.offsetX ;//- imageView.offsetLeft;
		y = e.offsetY ;//- imageView.offsetTop;
	}
	if (x < 30-10 || x > 600-30+10)
		return;
	if (y < 30-10 || y > 600-30+10)
		return;
	
	var xok = false;
	var yok = false;
	for (var i = 1; i <= 19; i++) {
		if (x > i*30-15 && x < i*30+15) {
			x = i*30;
			xok = true;
		}
		if (y > i*30-15 && y < i*30+15) {
			y = i*30;
			yok = true;
		}
	}
	if (!xok || !yok)
		return;

	var c = document.getElementById("path");
	var cxt = c.getContext("2d");

	// clear the path
	cxt.clearRect(0,0,600,600);

	// put a new Gray stone
	cxt.beginPath();
	cxt.arc(x,y,15,0,2*Math.PI,false);
	cxt.fillStyle="gray";
	cxt.fill();

	cxt.beginPath();
	cxt.arc(x,y,10,0,2*Math.PI,false);
	if (move_count % 2 == 0)
		cxt.fillStyle="black";
	else
		cxt.fillStyle="white";
	cxt.fill();
}
//前进一步操作
function nextStepHandler(){

}
//后退一步操作
function backStepHandler(){
		move_record.pop()
		backArr = move_record
		boardInit()
		for(i=0;i<backArr.length;i++){
			pan[backArr[i][0]][backArr[i][1]]=backArr[i][2]% 2===1?1:2	
		}
		parseSgf(sgf)
		move_count===0?'':move_count--
		showPan(pan,move_record,move_record)
}
//清除画布
function clearCanvas(){
	c_sign.clearRect(0,0,600,600);
	c_step.clearRect(0,0,600,600)
	c_path.clearRect(0,0,600,600)
	c_weiqi.clearRect(0,0,600,600)
}
//统一的事件绑定
function addEvent(){
	path.addEventListener('mousemove', mousemoveHandler, false);
	path.addEventListener('mousedown', mousedownHandler, false);
	sign.addEventListener('mousedown', signHandle, false);
	backStep.addEventListener('click',backStepHandler,false)
	nextStep.addEventListener('click',nextStepHandler,false)
}
//初始化棋盘
function initBorad(){
    grid(c_line)
    ninePoints(c_line)
    showPan(pan,move_record,move_record)
}
//下一题按钮
next.addEventListener('click',function(){
	move_record = new Array();
	sgf = [{ B: [11, 11] }, { W: [13, 12] }, { B: [11, 12] }, { W: [18, 10] }, { B: [10, 10] }]
	move_count = 0
	boardInit()
	parseSgf(sgf)
	c_step.clearRect(0,0,600,600)
    showPan(pan,move_record,move_record)
})
//重置棋盘按钮
refresh.addEventListener('click',function(){
	move_record = new Array();
	boardInit()
	move_count = 0
	/* 清空，重新画线等 */
	c_sign.clearRect(0,0,600,600);
	c_step.clearRect(0,0,600,600)
	c_path.clearRect(0,0,600,600)
    showPan(pan,move_record,move_record)
})

initBorad()
addEvent()

