var scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        this.addChild(new mapLayer());
        this.addChild(new carLayer());
        //this.addChild(new StatusLayer());
    }
});