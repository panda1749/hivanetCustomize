goog.provide('vanet.main');

goog.require('vanet.purser');
goog.require('vanet.zaikosearch');

vanet.main = function(){
    var purser_ = new vanet.purser();

    switch (purser_.getPageType()) {
        case vanet.purser.PageType.ZAIKOSEARCH:
            var zaiko = new vanet.zaikosearch();
            break;
    }

    document.onkeydown = function(){
        var key = event.keyCode;
        var srcElement = event.srcElement;
        if(
        (key == 40 || key == 38) && 
        srcElement.tagName == 'INPUT' && 
        srcElement.type == 'text'
        ){
        var inputName = srcElement.name;
        var inputNameNo = parseInt(inputName.slice(-1),10);
        if(!isNaN(inputNameNo)){
            if(key == 40){
                var nextInputNo = inputNameNo + 1
            }else{
            var nextInputNo = inputNameNo - 1
            }
            var nextInputName = inputName.slice(0,inputName.length-1) + nextInputNo;
            var nextInput = document.getElementsByName(nextInputName).item(0);
    
            if(nextInput != null){
            nextInput.focus();
            }
        }
        }
    }
};
vanet.main();
//seni-btnare
