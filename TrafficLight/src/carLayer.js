var stopWest = 100;
var stopEast;
var stopNorth;
var stopSouth;
var spriteCar1;
var pos1 = -50;
var time = 54;
var carArrayWE;
var carArrayEW;
var carArrayNS;
var carArraySN;
var draw;
var label1;
var text1 = 0;
var carLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        this._super();

        var centerPos1 = cc.p(-50, 100);
        //cerate the hero sprite
        spriteCar1 = cc.Sprite.create(s_car_WE);
        spriteCar1.setPosition(centerPos1);
        this.addChild(spriteCar1);
		draw = cc.DrawNode.create();
		//WE
		draw.drawDot( cc.p(250,50), 10, cc.c4f( 1, 0, 0, 0.2) );
		draw.drawDot( cc.p(275,50), 10, cc.c4f( 0, 1, 0, 0.2) );
		draw.drawDot( cc.p(300,50), 10, cc.c4f( 1, 1, 0, 0.2) );

		//NS
		draw.drawDot( cc.p(150,100), 10, cc.c4f( 1, 0, 0, 0.2) );
		draw.drawDot( cc.p(150,125), 10, cc.c4f( 1, 1, 0, 0.2) );
		draw.drawDot( cc.p(150,150), 10, cc.c4f( 0, 1, 0, 0.2) );

		label1 = cc.LabelTTF.create("00", "Microsoft Yahei", 20);  
		label1.setPosition(cc.p(150,60));  
		this.addChild(label1);  

		this.addChild(draw);
		this.schedule(this.timeCallback, 1);
    },
	
	timeCallback:function(dt){
		time++;
		
		if(time == 20) {
			draw.drawDot( cc.p(150,125), 10, cc.c4f( 0, 0.2, 0, 1) );
		}
		else if(time == 21) {
			text1--;
			draw.drawDot( cc.p(150,125), 10, cc.c4f( 0, 1, 0, 1) );
		} 
		else if(time == 22) {
			text1--;
			draw.drawDot( cc.p(150,125), 10, cc.c4f( 0, 0.2, 0, 1) );
		} 
		else if(time == 23) {
			text1=2;
			draw.drawDot( cc.p(150,150), 10, cc.c4f( 1, 1, 0, 1) );

		}
		else if(time == 25) {
			draw.drawDot( cc.p(150,150), 10, cc.c4f( 0.2, 0.2, 0, 1) );
			draw.drawDot( cc.p(150,100), 10, cc.c4f( 1, 0, 0, 1) );
			text1=30;
			
			draw.drawDot( cc.p(250,50), 10, cc.c4f( 0.2, 0, 0, 1) );
			draw.drawDot( cc.p(300,50), 10, cc.c4f( 0, 1, 0, 1) );
		}
		else if(time == 50) {
			text1--;
			draw.drawDot( cc.p(300,50), 10, cc.c4f( 0,  0.2, 0, 1) );
		}
		else if(time == 51) {
			text1--;
			draw.drawDot( cc.p(300,50), 10, cc.c4f( 0,  1, 0, 1) );
		}
		else if(time == 52) {
			text1--;
			draw.drawDot( cc.p(300,50), 10, cc.c4f( 0,  0.2, 0, 1) );
		}
		else if(time == 53) {
			text1--;
			draw.drawDot( cc.p(275,50), 10, cc.c4f( 1, 1, 0, 2) );
		}	
		else if(time == 55) {
			draw.drawDot( cc.p(150,100), 10, cc.c4f( 0.2, 0, 0, 1) );
			draw.drawDot( cc.p(150,125), 10, cc.c4f( 0, 1, 0, 1) );
			draw.drawDot( cc.p(150,150), 10, cc.c4f( 0.2, 0.2, 0, 1) );
			
			draw.drawDot( cc.p(250,50), 10, cc.c4f( 1, 0, 0, 1) );
			draw.drawDot( cc.p(275,50), 10, cc.c4f( 0.2, 0.2, 0, 2) );
			draw.drawDot( cc.p(300,50), 10, cc.c4f( 0, 0.2, 0, 1) );
			
			text1 = 23;
			time = 0;
		}
		else text1--;
		label1.setString(text1);
		if(time >= 0 && time <= 23) {
			var actionTo = cc.MoveBy.create(1, cc.p(100, 0));
			pos1+=100;
			spriteCar1.runAction(cc.Sequence.create(actionTo));
			if(pos1 >= 600) {
				pos1 = -50;
				var centerPos1 = cc.p(-50, 100);
				//cerate the hero sprite
				spriteCar1.setPosition(centerPos1);
			}
		}
		else if(pos1 >= stopWest ) {
			var actionTo = cc.MoveBy.create(1, cc.p(100, 0));
			pos1+=100;
			spriteCar1.runAction(cc.Sequence.create(actionTo));
			if(pos1 >= 600) {
				pos1 = -50;
				var centerPos1 = cc.p(-50, 100);
				//cerate the hero sprite
				spriteCar1.setPosition(centerPos1);
			}
		}
    }
	
	
});