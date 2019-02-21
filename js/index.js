var msg=["一","二","三","四","五"];
for(var i=0;i<msg.length;i++){
    // msg is key
    if(msg[i] == '三'){
        conosle.log(msg[i]);
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


