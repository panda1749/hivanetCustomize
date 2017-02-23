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

};
vanet.main();
//seni-btnare
