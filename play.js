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
var nextArr = []
var backArr = []
var pan = new Array(
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
);
var move_record = new Array();

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
}
function showPan() {

	testHandler()
	
	for (var i = 0; i < 19; i++) {
		for (var j = 0; j < 19; j++) {
			if (pan[i][j] === 1) { //black
				//加一个图片加载完毕就好了
				c_weiqi.drawImage(imgs_b, i * 30+15 , j * 30+15 ,30,30);
			}
			else if (pan[i][j] === 2) { //white
				
				c_weiqi.drawImage(imgs_w, i * 30+15 , j * 30 +15,30,30);
				
                
			}
			else if (pan[i][j] === 7) { // fill color
				c_weiqi.beginPath();
				c_weiqi.arc((i+1)*30, (j+1)*30,15,0,2*Math.PI,false);
				c_weiqi.fillStyle="red";
				c_weiqi.fill();
            }
		}
	}
	//显示特殊标记符号
	c_sign.fillStyle='red'
	c_sign.font="30px Arial";
    for (var i = 0; i < 19; i++) {
		for (var j = 0; j < 19; j++) {
			if (signArr[i][j] == 1) { //black
				c_sign.fillText("✕",i*30+15, j*30+15);
			}
			else if (signArr[i][j] == 2) { //white			
                c_sign.fillText("〇",i * 30+20 , j * 30+10 );
				
			}
			else if (signArr[i][j] == 3) { // fill color
				
                c_sign.fillText("▲",i * 30+20 , j * 30+10);
				
				
            }else if(signArr[i][j]==4){
                c_sign.fillText("▣",i * 30+20 , j * 30+10 );
				
            }
		}
	}
	//显示标记位置
		c_path.clearRect(0,0,600,600)
		for(var m=0;m<move_record.length-1;m++){
			//当pan【i】【j】为0就可以跳过
			if(pan[move_record[m][0]][move_record[m][1]]===0)
			continue
			if (move_record[m][2] % 2 === 1) { //black
				c_step.fillStyle="white";
			} else {
				c_step.fillStyle="black";
			}
			c_step.font="bold 18px sans-serif";
			if (move_record[m][2] > 99) {
				c_step.font="bold 16px sans-serif";
			}
			c_step.font="bold 16px sans-serif";
			c_step.textAlign="center";
			var move_msg = move_record[m][2].toString();
			c_step.fillText(move_msg, (move_record[m][0]+1)*30, (move_record[m][1]+1)*30+6);
		}


	// 特别显示最新的一手
	if (move_record.length > 0) {
		c_weiqi.fillStyle = "red";
		var newest_move = move_record.length-1;
		c_weiqi.fillRect(
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
	console.log(move_record)
}


