goog.provide('vanet.main');

goog.require('vanet.purser');
goog.require('vanet.zaikosearch');

vanet.main = function(){
    this.purser_ = new vanet.purser();

    switch (this.purser_.getPageType()) {
        case vanet.purser.PageType.ZAIKOSEARCH:
            new vanet.zaikosearch();
            break;
    }

};
vanet.main();
//seni-btnare
