var msg=["一","二","三","四","五"];
for(var i=0;i<msg.length;i++){
    // msg is key
    if(msg[i] == '三'){
        console.log(msg[i]);
    }
}

/*满足条件就可以执行*/
if(msg.length >= 3){
	console.log( ' Hello World' );
}

for(var r = 0; r < msg.length; r++){
    // 如果 msg数组等于就赋值为 星期四；
    if(msg[r] === '四'){
        msg[r] = '星期四';
    }
}

// 新创建arr数组 燃后把msg数组拼接星期对应的下标到arr数组中
var arr = new Array();
for(var i = 0;i < msg.length; i++){
    if(msg[i] !== '星期四'){
        arr[i] = "星期"+msg[i];
    }else{
        arr[i] = msg[i];
    }
}
console.log(String(arr));






