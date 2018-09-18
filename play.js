var sgf = [{ B: [1, 1] }, { W: [3, 2] }, { B: [1, 2] }, { W: [9, 9] }, { B: [0, 0] }]
var sgf2 = [{ B: [11, 11] }, { W: [13, 12] }, { B: [11, 12] }, { W: [18, 10] }, { B: [10, 10] }]
var sign = new Array(
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
var pan = new Array(
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
var move_record = new Array();

var imgs_w = new Image();
imgs_w.src = "./white_64.png";
var imgs_b = new Image();
imgs_b.src = "./black_64.png";

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
	  
}
    
function showPan() {
    var c = document.getElementById("weiqi");
    var s = document.getElementById('sign')
    var cxts = s.getContext('2d')
	var cxt = c.getContext("2d");
	cxt.strokeStyle="black";
	/* 清空，重新画线等 */
	cxt.clearRect(0,0,600,600);
	
	grid(cxt);
	ninePoints(cxt);
    
	for (var i = 0; i < 19; i++) {
		for (var j = 0; j < 19; j++) {
			if (pan[i][j] === 1) { //black
				//加一个图片加载完毕就好了
					cxt.drawImage(imgs_b, i * 30+15 , j * 30+15 ,30,30);
			}
			else if (pan[i][j] === 2) { //white
				
					cxt.drawImage(imgs_w, i * 30+15 , j * 30 +15,30,30);
				
                
			}
			else if (pan[i][j] === 7) { // fill color
				cxt.beginPath();
				cxt.arc((i+1)*30, (j+1)*30,15,0,2*Math.PI,false);
				cxt.fillStyle="red";
				cxt.fill();
            }
		}
	}
	//显示特殊标记符号
	cxts.fillStyle='red'
	cxts.font="30px Arial";
    for (var i = 0; i < 19; i++) {
		for (var j = 0; j < 19; j++) {
			if (sign[i][j] == 1) { //black
				 cxts.fillText("✕",i*30+15, j*30+15);
			}
			else if (sign[i][j] == 2) { //white			
                cxts.fillText("〇",i * 30+20 , j * 30+10 );
				
			}
			else if (sign[i][j] == 3) { // fill color
				
                cxts.fillText("▲",i * 30+20 , j * 30+10);
				
				
            }else if(sign[i][j]==4){
                cxts.fillText("▣",i * 30+20 , j * 30+10 );
				
            }
		}
	}
	//显示标记位置
	if(true){
		for(var m=0;m<move_record.length-1;m++){
			if(pan[move_record[m][0]][move_record[m][1]]===0)
			continue
			for(var j = m+1;j<move_record.length;j++){
				if (move_record[m][0] === move_record[j][0] &&
					move_record[m][1] === move_record[j][1]) {
				
				break;
			}
			}
			if (move_record[m][2] % 2 === 1) { //black
				cxts.fillStyle="white";
			} else {
				cxts.fillStyle="black";
			}
			cxts.font="bold 18px sans-serif";
			if (move_record[m][2] > 99) {
				cxts.font="bold 16px sans-serif";
			}
			cxts.font="bold 16px sans-serif";
			cxts.textAlign="center";
			var move_msg = move_record[m][2].toString();
			//cxt.fillText(move_msg, (i+1)*30, (j+1)*30+6);
			cxts.fillText(move_msg, (move_record[m][0]+1)*30, (move_record[m][1]+1)*30+6);
		}
	}
	// 特别显示最新的一手
	if (move_record.length > 0) {
		cxt.fillStyle = "red";
		var newest_move = move_record.length-1;
		cxt.fillRect(
			(move_record[newest_move][0]+1)*30-5, 
			(move_record[newest_move][1]+1)*30-5, 
			10, 10
		);
	}
}

function play(row, col) {
	if (row < 0 || row > 19 || col < 0 || col > 19) {
		alert("index error....");
		return;
	}
	// 处理已有棋子在此
	if (pan[row][col] != 0) {
		alert("此处已有棋子！");
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

}
