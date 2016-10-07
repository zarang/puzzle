

var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        //var sprite = new cc.Sprite.create(res.CloseNormal_png);
        //sprite.setAnchorPoint(cc.p(0.5, 0.5));
        //sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        //this.addChild(sprite, 0);
        ////backgound Layer
        var colorLayer = new cc.LayerColor(cc.color(255, 32, 32, 128), size.width, size.height);
        colorLayer.ignoreAnchorPointForPosition(false);

        //Set Position
        colorLayer.x = size.width / 2;
        colorLayer.y = size.height / 2;
        this.addChild(colorLayer,0);

        var title = new cc.LabelTTF("Rounds", "Arial", 200*size.scale);
        title.setPosition(size.width * 0.5, size.height * 0.95);
        title.setFontFillColor(cc.color(0,0,0, 0));
        this.addChild(title, 1);

        for(var ii=1; ii<=4; ii++){
            for(var jj=1; jj<=7; jj++ ){

                var button = new ccui.Button();
                button.loadTextures(buttonOff[(4-ii)*7 + jj],buttonOn[(4-ii)*7 + jj]);
                button.x = size.width *1.2* jj/ 10;
                button.y = size.height*2*ii/ 10;

                if(ii==1 && jj>4 && jj<8){

                }else{
                    this.addChild(button);
                }
                button.addTouchEventListener(this.onPlay, this);
            }
          }
    },


    onPlay: function(sender, type)
    {
        switch (type)
        {
            case ccui.Widget.TOUCH_BEGAN:
                cc.log("Touch Down");
                break;


            case ccui.Widget.TOUCH_ENDED:
                cc.log("Touch Ended");
                cc.director.runScene(new cc.TransitionFade(0.3, new MainWorkScene()));
                break;
        }
    }

});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

