goog.provide('vanet.zaikosearch');

goog.require('goog.dom');
goog.require('goog.events.EventType');
goog.require('goog.events');
goog.require('goog.array');

/**
 * @constructor
 */
vanet.zaikosearch = function(){
    this.setAllCheckButton();
    /**
     * @type {boolean}
     */
    this.checked_ = false;
};

vanet.zaikosearch.prototype.setAllCheckButton = function(){
    //既にbuttonがある場合は処理しない
    var btn = goog.dom.getElement('AllCheckButton');
    if(!goog.isNull(btn)) return 0;

    var seniBtnarea = goog.dom.getElementByClass('seni-btnarea');
    //null(検索結果項目が無い)の時は処理しない
    if(goog.isNull(seniBtnarea)){
        return void 0;
    }

    btn = goog.dom.createDom(
        goog.dom.TagName.INPUT,
        {
            'id':'AllCheckButton',
            'type':'button',
            'class':'btn',
            'value':'☑'
        }
    );
    goog.events.listen(
        btn,
        goog.events.EventType.CLICK,
        this.allCheckClickHandler,
        false,
        this
    );

    goog.dom.append(seniBtnarea,btn);
};

/**
 * @param {goog.events.BrowserEvent} e
 */
vanet.zaikosearch.prototype.allCheckClickHandler = function(e){
    var btn = e.target;
    var inputs = goog.dom.getElementsByTagNameAndClass(goog.dom.TagName.INPUT);
    var checked = this.checked_ = !this.checked_;

    btn.value = checked?'☒':'☑';

    goog.array.forEach(inputs,function(input){
        if(input.name === 'choice'){
            input.checked = checked;
        }
    });
};
