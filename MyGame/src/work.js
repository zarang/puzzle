var MainWorkLayer = cc.Layer.extend({
    sprite:null,

    mapData: null,
    levelData: [
        [
            1,2,2,3,3,3,4,4,
            1,2,2,3,3,3,4,4,
            1,2,2,5,5,5,4,4,
            1,6,6,5,5,5,7,8,
            1,9,10,5,5,5,7,8,
            1,9,10,5,5,5,7,11,
            1,9,10,5,5,5,12,11,
            1,9,13,13,13,13,13,11
        ]
    ],

    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var colorLayer = new cc.LayerColor(cc.color(255, 32, 32, 128), size.width, size.height);
        colorLayer.ignoreAnchorPointForPosition(false);

        //Set Position
        colorLayer.x = size.width / 2;
        colorLayer.y = size.height / 2;
        this.addChild(colorLayer,0);

        var title = new cc.LabelTTF("MainWork", "Arial", 200*size.scale);
        title.setPosition(size.width * 0.5, size.height * 0.9);
        title.setFontFillColor(cc.color(0,0,0, 0));
        this.addChild(title, 1);


        this.loadLevel(1);

    },

    loadLevel: function(level) {
        this.mapData = [];
        for (var i=0; i<8; i++) {
            var row = [];
            for (var j=0; j<8; j++) {
                row.push({
                    id: this.levelData[level-1][i*8+j],
                    color: 0,
                });
            }
            this.mapData.push(row);
        }

        for (var i=0; i<8; i++) {
            for (var j=0; j<8; j++) {
                var item = this.mapData[i][j];

                item.kind = "";
                item.kind += (i==0 || item.id != this.mapData[i-1][j].id) ? "1" : "0";
                item.kind += (j==7 || item.id != this.mapData[i][j+1].id) ? "1" : "0";
                item.kind += (i==7 || item.id != this.mapData[i+1][j].id) ? "1" : "0";
                item.kind += (j==0 || item.id != this.mapData[i][j-1].id) ? "1" : "0";

                item.button = new ccui.Button();
                item.button.setPosition(cc.p(80*j+350, 80*(7-i)+80));
                item.button.scaleX = 0.8;
                item.button.scaleY = 0.8;
                item.button.item = item;
                this.addChild(item.button);

                item.button.addTouchEventListener(this.onClickItem, this);

                this.drawItem(item);
            }
        }
    },

    drawItem: function(item) {
        var img = folder + item.kind + "_" + item.color + ".png";
        item.button.loadTextures(img, img);
    },

    onClickItem: function(sender, type) {
        switch (type)
        {
            case ccui.Widget.TOUCH_ENDED:
                var item = sender.item;
                var newColor = (item.color + 1) % 5 + 1;
                
                for (var i=0; i<8; i++) {
                    for (var j=0; j<8; j++) {
                        var tempItem = this.mapData[i][j];
                        if (item.id == tempItem.id) {
                            tempItem.color = newColor;
                            this.drawItem(tempItem);
                        }
                    }
                }
                break;
        }
    },

});

var MainWorkScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainWorkLayer();
        this.addChild(layer);
    }
});














