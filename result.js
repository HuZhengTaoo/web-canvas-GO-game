//判断周围四个交叉点是否有气
function have_air(row,col,size){
    if(!size)   //size是棋盘大小有19x19,13x13,9x9
        size = 19
	//非边角 1->17,(0-18)
	if(row>0 && row<size-1 && col>0 && col<size-1){
		//周边没有任何棋子
		if(pan[row+1][col] !==0 &&
			pan[row-1][col] !==0 &&
			pan[row][col+1] !==0 &&
			pan[row][col-1] !==0 
		){
			return false
		}else{
			return true
		}
	} else if(row === 0 && col >0 && col<size-1){//最上边，还是没算边界情况
		if(
			pan[row+1][col] !==0 &&
			pan[row][col+1] !==0 &&
			pan[row][col-1] !==0 
		){
			return false
		}else {
			return true
		}
	} else if(row === size-1 && col>0 && col<size -1){ //最下边，没有考虑最边界
        if(
            pan[row-1][col] !==0 &&
            pan[row][col+1] !==0 &&
            pan[row][col-1] !==0 
        ){
            return false   
        }else{
            return true
        }
    } else if (col === 0 && row > 0 && row < size-1) {
		if (	pan[row][col+1] !== 0 &&
				pan[row+1][col] !== 0 &&
				pan[row-1][col] !== 0 ) {
			return false;
		} else {
			return true;
		}
	} else if (col === size-1 && row > 0 && row < size-1) {
		if (	pan[row][col-1] !== 0 &&
				pan[row+1][col] !== 0 &&
				pan[row-1][col] !== 0 ) {
			return false;
		} else {
			return true;
		}
	} else if (row === 0 && col === 0) { // 角
		if (	pan[row][col+1] !== 0 &&
				pan[row+1][col] !== 0) {
			return false;
		} else {
			return true;
		}
	} else if (row === 0 && col === size-1) {
		if (	pan[row][col-1] !== 0 &&
				pan[row+1][col] !== 0) {
			return false;
		} else {
			return true;
		}
	} else if (row === size-1 && col === 0) {
		if (	pan[row][col+1] !== 0 &&
				pan[row-1][col] !== 0) {
			return false;
		} else {
			return true;
		}
	} else if (row === size-1 && col === size-1) {
		if (	pan[row][col-1] !== 0 &&
				pan[row-1][col] !== 0) {
			return false;
		} else {
			return true;
		}
	}
}

//坐标周围是否有我方棋子
function have_my_people(row,col,size){
    if(!size)   //size是棋盘大小有19x19,13x13,9x9
    size = 19
    if(row > 0 && row < size -1 && col >0 && row < 19-1){ //非边角1-size的处理
        if(move_count % 2 === 0){ //未落子前是白棋
            if(
                pan[row+1][col] === 1 ||
                pan[row-1][col] === 1 ||
                pan[row][col+1] === 1 ||
                pan[row][col-1] === 1
            ){
                return true
            }
        }else{
            if(
                pan[row+1][col] === 2 ||
                pan[row-1][col] === 2 ||
                pan[row][col+1] === 2 ||
                pan[row][col-1] === 2           
            ){
                return true
            }
        }
    }else if(col ===0 && row > 0 && row < size -1){
        if (move_count % 2 === 0) { //未落子前是白
			if (	pan[row+1][col] === 1 ||
					pan[row-1][col] === 1 ||
					pan[row][col+1] === 1 ) {
				//alert("have my people");
				return true;
			}
		} else {
			if (	pan[row+1][col] === 2 ||
					pan[row-1][col] === 2 ||
					pan[row][col+1] === 2 ) {
				//alert("have my people");
				return true;
			}
		}
    }else if(row === size-1 && col > 0 && col < size-1){
        if (move_count % 2 === 0) { //未落子前是白
			if (	pan[row-1][col] === 1 ||
					pan[row][col+1] === 1 ||
					pan[row][col-1] === 1 ) {
				//alert("have my people");
				return true;
			}
		} else {
			if (	pan[row-1][col] === 2 ||
					pan[row][col+1] === 2 ||
					pan[row][col-1] === 2 ) {
				//alert("have my people");
				return true;
			}
		}
    }else if (col === 19-1 && row > 0 && row < 19-1) {
		if (move_count % 2 === 0) { //未落子前是白
			if (	pan[row+1][col] === 1 ||
					pan[row-1][col] === 1 ||
					pan[row][col-1] === 1 ) {
				//alert("have my people");
				return true;
			}
		} else {
			if (	pan[row+1][col] === 2 ||
					pan[row-1][col] === 2 ||
					pan[row][col-1] === 2 ) {
				//alert("have my people");
				return true;
			}
		}
	}else if (col === 0 && row > 0 && row < 19-1) {
		if (move_count % 2 === 0) { //未落子前是白
			if (	pan[row+1][col] === 1 ||
					pan[row-1][col] === 1 ||
					pan[row][col+1] === 1 ) {
				//alert("have my people");
				return true;
			}
		} else {
			if (	pan[row+1][col] === 2 ||
					pan[row-1][col] === 2 ||
					pan[row][col+1] === 2 ) {
				//alert("have my people");
				return true;
			}
		}
	}else if (row === 0 && col === 0) { // 角
		if (move_count % 2 === 0) { //未落子前是白
			if (	pan[row+1][col] === 1 ||
					pan[row][col+1] === 1 ) {
				//alert("have my people");
				return true;
			}
		} else {
			if (	pan[row+1][col] === 2 ||
					pan[row][col+1] === 2 ) {
				//alert("have my people");
				return true;
			}
		}
	}else if (row === 0 && col === 19-1) { // 角
		if (move_count % 2 === 0) { //未落子前是白
			if (	pan[row+1][col] === 1 ||
					pan[row][col-1] === 1 ) {
				//alert("have my people");
				return true;
			}
		} else {
			if (	pan[row+1][col] === 2 ||
					pan[row][col-1] === 2 ) {
				//alert("have my people");
				return true;
			}
		}
	}else if (row === 19-1 && col === 0) { // 角
		if (move_count % 2 === 0) { //未落子前是白
			if (	pan[row-1][col] === 1 ||
					pan[row][col+1] === 1 ) {
				//alert("have my people");
				return true;
			}
		} else {
			if (	pan[row-1][col] === 2 ||
					pan[row][col+1] === 2 ) {
				//alert("have my people");
				return true;
			}
		}
	}else if (row === 19-1 && col === 19-1) { // 角
		if (move_count % 2 === 0) { //未落子前是白
			if (	pan[row-1][col] === 1 ||
					pan[row][col-1] === 1 ) {
				//alert("have my people");
				return true;
			}
		} else {
			if (	pan[row-1][col] === 2 ||
					pan[row][col-1] === 2 ) {
				//alert("have my people");
				return true;
			}
		}
	}
    return false
}