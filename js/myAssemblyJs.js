var doc = document;

/*
    按钮
    传入id、背景颜色bgColor、按钮圆角度radius、字体颜色color、字体大小size、字体距上下左右框的距离border
*/
function getBtn(obj){
    var bid =  doc.getElementById(obj.id);
    bid.style.cssText ="background-color:" + obj.bgColor + ";border-radius:" + obj.radius +";color:" + obj.color + ";font-size:" + obj.size +";border:" + obj.border;
}

/*
    显示隐藏元素 
    传入点击的id1、隐藏或显示的id2
*/
function getClick(obj){ 
    var id1 =  doc.getElementById(obj.id1),
        id2 = doc.getElementById(obj.id2);
    id1.onclick = function(){
        if (id2.style.display != "block") {id2.style.display = "block";}
        else{id2.style.display = "none";}
    }
}

/*
    设置元素居中 
    传入大元素id1，小元素id2
    大元素减去小元素的宽的差除以2！水平居中
    大元素减去小元素的高的差除以2！垂直居中
*/
function getAuto(obj){
    var id1 =  doc.getElementById(obj.id1),
        id2 = doc.getElementById(obj.id2);
    id2.style.left = ((id1.offsetWidth-id2.offsetWidth)/2) + "px";
    id2.style.top = ((id1.offsetHeight-id2.offsetHeight)/2) + "px";
}

/*
    轮播图片
    传入要放入图片的rid、下一张的left、上一张的right、要传入的图片数组img、
*/
function getRollPic(obj){
    var rid = doc.getElementById(obj.rid),
        left = doc.getElementById(obj.left),
        right = doc.getElementById(obj.right),
        initId = 0,
        image = obj.img;
    for(var i=0;  i<image.length; i++){
        var li = doc.createElement("li"),
            img = doc.createElement("img");
        li.setAttribute("id","rollPic" + i);
        img.src = image[i];
        li.appendChild(img);
        rid.appendChild(li);
    }
    var sum = rid.getElementsByTagName("li"); 
    for(var i=0;  i<image.length; i++){
        sum[i].style.opacity = 0;
        sum[0].style.opacity = 1;  
    }       
    left.onclick = function(){
        initId --;
        if (initId<0) {initId = image.length-1;}
        for(var i=0;  i<image.length; i++){
            sum[i].style.opacity = 1; 
            sum[i].style.cssText =  "transition-duration:" + obj.time;
        }
        sum[initId].style.opacity = 0;
    }
    right.onclick = function(){
        initId ++;
        if (initId>image.length-1) {initId = 0;}
        for(var i=0;  i<image.length; i++){
            sum[i].style.opacity = 1;   
            sum[i].style.cssText =  "transition-duration:" + obj.time;
        }
        sum[initId].style.opacity = 0;   
    }
}

/*
    进度条（长方形简单）
    传入大div框id1、小div框id2、宽度width、长度height、边框颜色border、圆角radius、进度条颜色bgColor
*/
function getProBar(obj){
    var id1 = doc.getElementById(obj.id1),
        id2 = doc.getElementById(obj.id2);
    // //兼容于chrome，Safari等基于webkit的浏览器
    // d2.style.webkitAnimationPlayState="running";
    // //兼容firefox浏览器
    // d2.style.mozAnimationPlayState="running";

    id1.style.cssText = "width:" + obj.width + ";height:" + obj.height + ";border:" + obj.border + ";border-radius:" + obj.radius ;
    id2.style.cssText = "width:0px;" + "height:" + obj.height + ";background-color:" + obj.bgColor +";border-radius:" + obj.radius + ";transition-duration:" + obj.time;
    var a = id1.clientWidth;
    for(var i=0; i <= a; i++){
        id2.style.width = i + "px";
    }
}

/*
    format方法
*/
function getFormat(){
    if (!String.prototype.format) {
        function format() {
            var e = arguments;
            return this.replace(/{(\d+)}/g,function(t,n) {
                return typeof e[n] != "undefined" ? e[n] : t;
            })
        };
    }
    // var template = "今天的天气很{0}，大家一起去{1}!";
    // alert(template.format("晴朗","郊游"));
}

/*
    正则表达式全局搜索替换
*/
function replaceAll(oldStr,newStr){
    var reg = new RegExp(oldStr,'g');
    return this.replace(reg,newStr);
}
// var wrapDom = document.getElementById('wrap');
// var text = wrapDom.innerHTML;
// text = text.replaceAll('aaa','<span style=\'font-size:larger;\'>aaa</span>');
// wrapDom.innerHTML = text;


/*
    获取0~num的随机数(闭区间)
*/
function randomNum(num){
    return Math.floor(Math.random()*(num+1));
}

/*
    获取范围随机数(闭区间)
*/
function randomRange(obj){
    return Math.floor(Math.random()*(end-start+1))+start;
}