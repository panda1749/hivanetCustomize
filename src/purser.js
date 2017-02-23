goog.provide('vanet.purser');

goog.require('goog.dom');
goog.require('goog.array');

/**
 * @enum {string}
 */
vanet.purser.PageType = {
    ZAIKOSEARCH:'H6CH160R',
};

/**
 * @constructor
 */
vanet.purser = function(){
    this.pageType_ = null;
    this.url_  = window.location.pathname.split('/')[2];

    var scripts = goog.dom.getElementsByTagNameAndClass(goog.dom.TagName.SCRIPT);

    this.scriptsSrc_ = goog.array.reduce(scripts,function(rslt,script){
        var src = script.src;
        if(goog.string.startsWith(script.src,'/vnt/js/')){
            goog.array.insert(rslt,src);
        }
        return rslt;
    },[]);
};

/**
 * @return {string}
 */
vanet.purser.prototype.getPageType = function(){
    if(goog.isDefAndNotNull(this.pageType_)){
        return this.pageType_;
    }

    var url = this.url_;
    var type = null;

    if(url === vanet.purser.PageType.ZAIKOSEARCH){
        type = vanet.purser.PageType.ZAIKOSEARCH;
    }

    return type;
};
