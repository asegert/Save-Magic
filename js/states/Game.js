var Magic = Magic || {};

Magic.GameState = {
    
    create: function ()
    {
        let selected = function(item)
        {
            //Anchor the game state to this.this
            this.this = Magic.GameState;
            //Increments the number of items found
            this.this.itemsFound++;
            //Set item boolean to found
            item.found = true;
            //Tweens to send the item to the 'found' items
            this.this.add.tween(item.item).to({x: item.dropCoordX, y: item.dropCoordY}, 1000, "Linear", true);
            this.this.add.tween(item.item.scale).to({x: item.scaleXY, y: item.scaleXY}, 1000, "Linear", true);
            //If the item has an animation stop the animation and set the frame to the one specified
            if(item.item.animStop != undefined)
            {
                item.item.animations.stop(false, true);
                item.item.frame = item.item.animStop;
            }
            //Stop input on the item so it cannot be found again
            item.item.inputEnabled=false;
            //Check if all items are found and game should end
            if(this.this.itemsFound === this.this.itemsToFind)
            {
                console.log("end game");
            }
        };
        
        
        this.itemsToFind = 6;//pull from json
        this.itemsFound = 0;
        this.items = new Array();
        //Witch Version
        this.background=this.add.sprite(0, 0, 'witchBackground');
        this.witchBlackout = this.add.sprite(350, 0, 'witchBlackout');
        this.witchHint = this.add.button(700, 0, 'witch', function()
        {
            for(let i=0, len=this.items.length; i<len; i++)
            {
                if(!this.items[i].found)
                {
                    let emitter = this.add.emitter(this.items[i].item.x + (this.items[i].item.width/2), this.items[i].item.y + (this.items[i].item.height/2), 100);
                    emitter.makeParticles('witchEmit', [0, 1, 2, 3, 4, 5, 6, 7]);
                    emitter.start(true, 2000, null, 50);
                    
                    break;
                }
            }
        }, this);
        
        //Items
        let Item = new Magic.Item(this);
        this.items[this.items.length] = Item.init(120, 120, 'witchHome', selected, 596, 8, 0.4, 1, false, false, null);
        
        Item = new Magic.Item(this);
        this.items[this.items.length] = Item.init(770, 540, 'magicBook', selected, 455, 18, 0.8, 1, false, false, null);
        
        Item = new Magic.Item(this);
        this.items[this.items.length] = Item.init(260, 280, 'blackCat', selected, 355, 16, 0.7, 1, false, false, null);
        
        Item = new Magic.Item(this);
        this.items[this.items.length] = Item.init(70, 410, 'cauldron', selected, 404.5, 16, 0.6, 1, false, false, null);
        
        Item = new Magic.Item(this);
        this.items[this.items.length] = Item.init(320, 450, 'witchHat', selected, 546, 18, 1, 1, false, false, null);
        
        Item = new Magic.Item(this);
        this.items[this.items.length] = Item.init(610, 375, 'potions', selected, 512.5, 19.5, 0.21, 0.3, false, true, 6);
        
        //Fairy Version
       /* this.background = this.add.sprite(0, 0, 'fairyBackground');
        this.fairyBlackout = this.add.sprite(350, 0, 'fairyBlackout');
        this.fairyHint = this.add.button(800, 0, 'fairy', function()
        {
            for(let i=0, len=this.items.length; i<len; i++)
            {
                if(!this.items[i].found)
                {
                    let emitter = this.add.emitter(this.items[i].item.x + (this.items[i].item.width/2), this.items[i].item.y + (this.items[i].item.height/2), 100);
                    emitter.makeParticles('fairyEmit', [0, 1, 2, 3, 4, 5, 6, 7]);
                    emitter.start(true, 2000, null, 50);
                    
                    break;
                }
            }
        }, this);
        
        
        //Items
        let Item = new Magic.Item(this);
        this.items[this.items.length] = Item.init(860, 340, 'fairyHome', selected, 454.3, 3, 0.45, 1, false, false, null);
        
        Item = new Magic.Item(this);
        this.items[this.items.length] = Item.init(210, 100, 'magicCarpet', selected, 547, 21, 0.7, 1, false, false, null);
        
        Item = new Magic.Item(this);
        this.items[this.items.length] = Item.init(420, 550, 'pixieDoor', selected, 415, 18, 0.45, 1, false, false, null);
        
        Item = new Magic.Item(this);
        this.items[this.items.length] = Item.init(20, 20, 'spell', selected, 517.3, 21, 0.5, 1, false, false, null);
        
        Item = new Magic.Item(this);
        this.items[this.items.length] = Item.init(780, 500, 'unicorn', selected, 588, 4, 0.45, 1, false, false, null);
        
        Item = new Magic.Item(this);
        this.items[this.items.length] = Item.init(480, 430, 'wand', selected, 358.4, 18, 0.25, 0.3, false, true, 8);*/
    },
    update: function ()
    {
        
    }
};
/*Copyright (C) Wayside Co. - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written and maintained by Wayside Co <info@waysideco.ca>, 2018*/