/*
    按钮
    传入class、背景颜色bgColor、按钮圆角度radius、字体颜色color、字体大小size、字体距上下左右框的距离border
*/
function getBtn(obj){
    $(obj.class).css({
        "background-color":obj.bgColor,
        "borderRadius":obj.radius,
        "color":obj.color,
        "font-size":obj.size,
    })
}


/*
    显示隐藏元素 
    class1要点击的class、 class2要显示隐藏的class 
*/
function getClick(obj){  
    $(obj.class1).click(function(){
        $(obj.class2).toggle(); 
    });    
}

/*
    设置元素居中 
    传入大元素class1，小元素class2
    大元素减去小元素的宽的差除以2！水平居中
    大元素减去小元素的高的差除以2！垂直居中
*/
function getAuto(obj){
    $(obj.class2).css({"left":($(obj.class1).width()-$(obj.class2).width())/2});
    $(obj.class2).css({"top":($(obj.class1).height()-$(obj.class2).height())/2});  
}

/*
    轮播图片
    传入要放入图片的class、下一张的left、上一张的right、要传入的图片数组img、
*/
function getRollPic(obj){
    var image = obj.img,
        initId = 0;
    for(var i=0; i<image.length; i++){   
        lis += '<li> <img src="'+ image[i] +'" id = "rollPic'+ i +'"></li>';
    }
    $(obj.class).append(lis);
    $(obj.class+" li img").css({"opacity":"0"});
    $("#rollPic0").css({"opacity":"1"});
    $(obj.left).click(function(){
        initId -- ;
        if (initId<0) {initId = image.length-1;}
        $(obj.class+" li img").animate({opacity:"0"},1000,function(){
                $("#rollPic" + initId).animate({opacity:1},3000);
            })
    }); 
    $(obj.right).click(function(){
        initId ++;
        if (initId>image.length-1) {initId = 0;}
        $(obj.class+" li img").animate({opacity:"0"},1000,function(){
                 $("#rollPic" + initId).animate({opacity:1},3000);
        })
    });    
}

/*
    进度条（长方形简单）
    传入class、宽度width、长度height、边框颜色border、圆角radius、进度条颜色bgColor,时间time
*/
function getProBar(obj){
    $(obj.class).css({
        "width":obj.width,
        "height":obj.height,
        "border":obj.border,
        "borderRadius":obj.radius
    });
    $(obj.class).append("<div id='sProBar'></div>");
    $("#sProBar").css({
        "width": "0px",
        "height":obj.height,
        "background-color": obj.bgColor,
        "borderRadius":obj.radius
    });
    $("#sProBar").animate({width:obj.width},obj.time);
}

/*
    根据数据加载同步进行的进度条
    传入class、宽度width、长度height、边框颜色border、圆角radius、进度条颜色bgColor,时间time
*/
function getLoadBar(obj){
    $(obj.class).css({
        "width":obj.width,
        "height":obj.height,
        "border":obj.border,
        "borderRadius":obj.radius
    });
    $(obj.class).append("<div id='sProBar'></div>");
    $("#sProBar").css({
        "width": "0px",
        "height":obj.height,
        "background-color": obj.bgColor,
        "borderRadius":obj.radius
    });
    setTimeout(function(){
        $("#sProBar").animate({width:obj.width},obj.time);
        $("#sProBar").animate({width:"0px"},obj.time);
    },0); 
    document.onreadystatechange = function(){
        if(document.readyState == "complete"){
            //你想跳转到的页面
        }
    }
}

/*
    预加载图片
    传入图片链接img
*/
function cacheImg(obj){
    var cache = [];
    var args_len = obj.img.length;
    for(var i = args_len; ;i--){
        var cacheImage = document.createElement('img');
        cacheImage.src = obj.img[i];
        cache.push(cacheImage);
    }
}