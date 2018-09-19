var sgf = [{ B: [1, 1] }, { W: [3, 2] }, { B: [1, 2] }, { W: [9, 9] }, { B: [0, 0] }]
var sgf2 = [{ B: [11, 11] }, { W: [13, 12] }, { B: [11, 12] }, { W: [18, 10] }, { B: [10, 10] }]
var signArr = new Array(
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,4,0,1,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
);
//创建一个前进步数的标记为数字
var copyRecord = []
var stepLen = ''
var nextArr = []
var backArr = []
var pan = []
var moveNum = 0
var move_status = false
var canClick = true
var jie = new Array();
//当前的步数统计
var move_count = 0;
//初始化数组
boardInit()
var move_record = [] //记录走的位置
//获取相应的棋子图片
var imgs_w = new Image();
imgs_w.src = "./white_64.png";
var imgs_b = new Image();
imgs_b.src = "./black_64.png";
//初始化棋子数组
function boardInit(){
    for (let i = 0; i < 19; i++) {
        pan[i] = []
        for (let j = 0; j < 19; j++) {
            pan[i][j] = 0
        }
    }
}
function parseSgf(sgfArr){
    sgfArr.forEach((val, idx, arr) => {
        i = arr[idx].B ? arr[idx].B[0] : arr[idx].W[0]
        j = arr[idx].B ? arr[idx].B[1] : arr[idx].W[1]
        me = arr[idx].B ? true : false
        me ? pan[i][j] = 1 : pan[i][j] = 2
	  })
	//防止下一步或者以下步清除了parse棋子
	parseArr = pan
}
//显示棋子
function showPan(pan,move_record,move_record) {
	clearCanvas()
	show_qizi(pan)
	// show_specile_sign(signArr)
	show_step_pos(move_record)
	show_last_step(move_record)
}

function play(row, col) {
	if (row < 0 || row > 19 || col < 0 || col > 19) {
		alert("index error....");
		return;
	}
	// 处理已有棋子在此
	if (pan[row][col] != 0) {
		console.log('重复落子')
		return;
	}

	var can_down = false; // 是否可落子
	// 得到将落子的棋子的颜色
	var color = 2; // 白
	if (move_count % 2 === 0) { // 未落子前是白
		color = 1; 
	}
    stone_down(row, col)
	
}
function stone_down(row, col) {
    
	if (move_count % 2 === 0) { //未落子前是白
		pan[row][col] = 1; //就放黑
	} else {
		pan[row][col] = 2;
	}
    move_count++
	move_record.push([row, col, move_count]);	// 记录手数
	
	move_status?'' :copyRecord = move_record.slice(0)
	stepLen = move_record.length
}
// 特别显示最新的一手
function show_last_step(arr){
	if (arr.length > 0) {
		c_weiqi.fillStyle = "red";
		var newest_move = arr.length-1;
		c_weiqi.fillRect(
			(arr[newest_move][0]+1)*30-5, 
			(arr[newest_move][1]+1)*30-5, 
			10, 10
		);
	}
}
//显示标记位置
function show_step_pos(arr){
		c_path.clearRect(0,0,600,600)
		for(var m=0;m<arr.length-1;m++){
			//当pan【i】【j】为0就可以跳过
			if(pan[arr[m][0]][arr[m][1]]===0)
			continue
			if (arr[m][2] % 2 === 1) { //black
				c_step.fillStyle="white";
			} else {
				c_step.fillStyle="black";
			}
			c_step.font="bold 18px sans-serif";
			if (arr[m][2] > 99) {
				c_step.font="bold 16px sans-serif";
			}
			c_step.font="bold 16px sans-serif";
			c_step.textAlign="center";
			var move_msg = arr[m][2].toString();
			c_step.fillText(move_msg, (arr[m][0]+1)*30, (arr[m][1]+1)*30+6);
		}
}
//显示特殊标记为 
function show_specile_sign(arr){
	c_sign.fillStyle='red'
	c_sign.font="30px Arial";
    for (var i = 0; i < 19; i++) {
		for (var j = 0; j < 19; j++) {
			if (arr[i][j] == 1) { //black
				c_sign.fillText("✕",i*30+15, j*30+15);
			}
			else if (arr[i][j] == 2) { //white			
                c_sign.fillText("〇",i * 30+20 , j * 30+10 );
				
			}
			else if (arr[i][j] == 3) { // fill color
				
                c_sign.fillText("▲",i * 30+20 , j * 30+10);
				
				
            }else if(arr[i][j]==4){
                c_sign.fillText("▣",i * 30+20 , j * 30+10 );
            }
		}
	}
}
//显示pan中的棋子
function show_qizi(arr){
	for (var i = 0; i < 19; i++) {
		for (var j = 0; j < 19; j++) {
			if (arr[i][j] === 1) { //black
				//加一个图片加载完毕就好了
				c_weiqi.drawImage(imgs_b, i * 30+15 , j * 30+15 ,30,30);
			}
			else if (arr[i][j] === 2) { //white
				c_weiqi.drawImage(imgs_w, i * 30+15 , j * 30 +15,30,30);
			}
			else if (arr[i][j] === 7) { // fill color
				c_weiqi.beginPath();
				c_weiqi.arc((i+1)*30, (j+1)*30,15,0,2*Math.PI,false);
				c_weiqi.fillStyle="red";
				c_weiqi.fill();
            }
		}
	}
}



/* 		
*吃逻辑，并且包括规则在其中
*
*
*/	

//能吃子吗
// function can_eat(row,col,color,dead_body){
// 	var ret = false
// 	var anti_color = 2
// 	if(color === 2)
// 		anti_color = 1

// 	if(row+1<19-1&&pan[row+1][col] === anti_color){
// 		make_shadow()
// 	}
// }

