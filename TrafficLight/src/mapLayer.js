var mapLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },

    init:function () {
        this._super();
		
		var director = cc.Director.getInstance();
		var winSize = director.getWinSize();
        //create the background image and position it at the center of screen
        var centerPos = cc.p(winSize.width / 2, winSize.height / 2);
        var spriteBG = cc.Sprite.create(s_map);
        spriteBG.setPosition(centerPos);
        this.addChild(spriteBG);
    }
});