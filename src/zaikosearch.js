goog.provide('vanet.zaikosearch');

goog.require('goog.dom');
goog.require('goog.events.EventType');
goog.require('goog.events');

/**
 * @constructor
 */
vanet.zaikosearch = function(){
    this.setAllCheckButton();
};

vanet.zaikosearch.prototype.setAllCheckButton = function(){
    var seniBtnarea = goog.dom.getElementByClass('seni-btnarea');

    //null(検索結果項目が無い)の時は処理しない
    if(goog.isNull(seniBtnarea)){
        return void 0;
    }

    var btn = goog.dom.createDom(
        goog.dom.TagName.INPUT,
        {
            'type':'button',
            'class':'btn',
            'value':'全✔'
        }
    );
    goog.events.listen(
        btn,
        goog.events.EventType.CLICK,
        this.allCheckClickHandler
    );

    goog.dom.append(seniBtnarea,btn);
};

/**
 * @param {goog.events.BrowserEvent} e
 */
vanet.zaikosearch.prototype.allCheckClickHandler = function(e){
    var inputs = goog.dom.getElementsByTagNameAndClass(goog.dom.TagName.INPUT);

    goog.array.forEach(inputs,function(input){
        if(input.name === 'choice'){
            input.checked = true;
        }
    });

    //choice

};
