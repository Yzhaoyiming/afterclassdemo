var $timerButton =(function(){
    var $btn = $('<input class="timer-button" type="button">'),
    cfg = {
            container:'body',
            tLength:6,
            enable:true,
            title:'同意'
        },
        timer,
        enable;
    function show(conf){
        $(cfg.container).append($btn);
        $.extend(cfg,conf);
        enable = cfg.enable;
        num = cfg.tLength;
        if(!enable){
            $btn.attr("disabled",true);
            timer = setInterval(function(){
                num--;
                if(num === 0){
                    clearInterval(timer);
                    $btn.val(cfg.title);
                    $btn.removeAttr('disabled');//去掉禁用属性
                }else{
                    $btn.val(cfg.title+'('+num+'s)');
                }
            },1000);
        }
        else{
            $btn.val(cfg.title);
            $btn.click(function(){
                $btn.attr("disabled",true);
                timer = setInterval(function(){
                    num--;
                    if(num === 0){
                        clearInterval(timer);
                        $btn.val(cfg.title);
                        num = cfg.tLength;
                        $btn.removeAttr('disabled');//去掉禁用属性
                    }else{
                        $btn.val(cfg.title+'('+num+'s)');
                    }
                },1000);
            });
            
        }
        
    }

    
    
    return{
        show:show
    }
}());
//不用page load event
/*封装成对象，有几种方案
1.全局对象
var timerBtn={
    show:function()
}
2.工厂函数，一个函数返回值是一个简单对象
var timerBtn = (function(){
    return{
        show:function(){}
    }
}())匿名函数
3.构造函数
function TimerBtn(){

}
var tb=new TimerBtn()
*/