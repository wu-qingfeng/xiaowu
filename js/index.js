var msg=["日","一","二","三","四","五","六"];


// 新创建arr数组 燃后把msg数组拼接星期对应的下标到arr数组中
var arr = new Array();
for(var i = 0;i < msg.length; i++){
    if(msg[i] !== '星期四'){
        arr[i] = "星期"+msg[i];
    }else{
        arr[i] = msg[i];
    }
}
var date = new Date();
// console.log(arr[date.getDay()]);


var main = document.getElementById('main');
var frag = document.createDocumentFragment();
var html ='';
/*  这里是给HTML页面显示     */
for( var val of arr ){
    var div = document.createElement('div');
    if(val == arr[date.getDay()]){
        div.className = 'box-shadow active';
        div.innerHTML = val;
    }else{
        div.className = 'box-shadow';
        div.innerHTML = val;
    }
    frag.appendChild(div);
}
main.appendChild(frag);




/*动态生成分页*/

window.onload = function(){
    page({
        id: 'page',
        nowNum: 7,
        allNum: 10
    });

};
function page(opt){
    if(!opt.id){return false;}

    var elem = document.getElementById(opt.id);
    var nowNum = opt.nowNum || 1;
    var allNum = opt.allNum || 5;
    if(nowNum >= 4 && allNum >= 6){
        var a = document.createElement('a');
        a.href = "#1";
        a.innerHTML = '首页';
        a.className = "first-last";
        elem.appendChild(a);
    }
    if(nowNum >= 2){
        var a = document.createElement('a');
        a.href = "#" + ( nowNum - 1);
        a.innerHTML = "上一页";
        a.className = "first-last";
        elem.appendChild(a);
    }
    if(allNum <= 5){
        var frag = document.createDocumentFragment();
        for(var i=1; i<=allNum ;i++){
            var a = document.createElement('a');
            a.href = '#' + i;
            if(nowNum == i){
                a.innerHTML =  i;
                a.className = "active";
            }else{
                a.innerHTML = '['+ i +']';
            }
            frag.appendChild(a);
        }
        elem.appendChild(frag);
    }else{
        var frag = document.createDocumentFragment();
        for(var i=1; i<=5 ;i++){
            var a = document.createElement('a');
            if(nowNum == 1 || nowNum == 2){
                a.href = '#' + i;
                if(nowNum == i){
                    a.innerHTML = i;
                    a.className = "active";
                }else{
                    a.innerHTML = '['+i+']';
                }
            }else if((allNum-nowNum) == 0 || (allNum-nowNum) == 1){
                a.href = '#' + (allNum - 5 + i);
                if((allNum - nowNum) == 0 && i == 5 || (allNum - nowNum) == 1 && i == 4){
                    a.innerHTML = (allNum - 5 + i);
                    a.className = "active";
                }else{
                    a.innerHTML = '['+ (allNum - 5 + i) +']';
                }
            }else {
                if (3 == i) {
                    a.innerHTML = nowNum - 3 + i;
                    a.className = "active";
                } else {
                    a.innerHTML = '[' + (nowNum - 3 + i) + ']';
                }
                a.href = '#' + (nowNum - 3 + i);
            }
            frag.appendChild(a);
        }
        elem.appendChild(frag);
    }
    if((allNum - nowNum) !== 0){
        var a = document.createElement('a');
        a.href = "#" + (nowNum + 1);
        a.innerHTML = "下一页";
        a.className = "first-last";
        elem.appendChild(a);
    }
    if( (allNum - nowNum) > 2 && allNum >= 6){
        var a = document.createElement('a');
        a.href = "#" + (allNum);
        a.innerHTML = "尾页";
        a.className = "first-last";
        elem.appendChild(a);
    }
    /* 获取所有的 a 并绑定点击事件 */
    var allA = elem.getElementsByTagName('a');
    for(var i = 0 ; i < allA.length ; i++){
        allA[i].onclick = function(e){
            e.preventDefault();
            var pageId = parseInt(this.getAttribute('href').slice(1));
            elem.innerHTML = "";
            page({
                id: opt.id,
                nowNum: pageId,
                allNum: opt.allNum
            });
        }
    }

}







