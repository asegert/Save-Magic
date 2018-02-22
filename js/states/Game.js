var Magic = Magic || {};

Magic.GameState = {
    
    create: function ()
    {
        this.itemsToFind = 6;
        this.itemsFound = 0;
        this.items = this.add.group();
        //Witch Version
        this.background=this.add.sprite(0, 0, 'witchBackground');
        this.witchBlackout = this.add.sprite(350, 0, 'witchBlackout');
        this.witchHint = this.add.button(700, 0, 'witch', function()
        {
            for(let i=0, len=this.items.length; i<len; i++)
            {
                if(!this.items.children[i].found)
                {
                    let emitter = this.add.emitter(this.items.children[i].x + (this.items.children[i].width/2), this.items.children[i].y + (this.items.children[i].height/2), 100);
                    emitter.makeParticles('witchEmit', [0, 1, 2, 3, 4, 5, 6, 7]);
                    emitter.start(true, 2000, null, 50);
                    
                    break;
                }
            }
        }, this);
        
        //Items
        this.witchHome=this.add.button(120, 120, 'witchHome', this.selected);
            this.witchHome.dropCoordX = 596;
            this.witchHome.dropCoordY = 8;
            this.witchHome.scaleXY = 0.4;
            this.witchHome.found = false;
        this.items.add(this.witchHome);
        this.book = this.add.button(770, 540, 'magicBook', this.selected);
            this.book.dropCoordX = 455;
            this.book.dropCoordY = 18;
            this.book.scaleXY = 0.8;
            this.book.found = false;
        this.items.add(this.book);
        this.cat = this.add.button(260, 280, 'blackCat', this.selected);
            this.cat.dropCoordX = 355;
            this.cat.dropCoordY = 16;
            this.cat.scaleXY = 0.7;
            this.cat.found = false;
        this.items.add(this.cat);
        this.cauldron = this.add.button(70, 410, 'cauldron', this.selected);
            this.cauldron.dropCoordX = 404.5;
            this.cauldron.dropCoordY = 16;
            this.cauldron.scaleXY = 0.6;
            this.cauldron.found = false;
        this.items.add(this.cauldron);
        this.hat = this.add.button(320, 450, 'witchHat', this.selected, this.hat);
            this.hat.dropCoordX = 546;
            this.hat.dropCoordY = 18;
            this.hat.scaleXY = 1;
            this.hat.found = false;
        this.items.add(this.hat);
        
        this.potion = this.add.sprite(610, 375, 'potions', 0);
        this.potion.scale.setTo(0.3, 0.3);
        let mix = this.potion.animations.add('mix');
        this.potion.animations.play('mix', 10, true);
        this.potion.inputEnabled = true;
        this.potion.dropCoordX = 512.5;
        this.potion.dropCoordY = 19.5;
        this.potion.scaleXY = 0.21;
        this.potion.animStop = 6;
        this.potion.found = false;
        this.potion.events.onInputDown.add(function()
        {
            this.selected(this.potion);
        }, this);
        this.items.add(this.potion);
        //Bring the buttons to the top
        this.world.bringToTop(this.items);
        
        //Fairy Version
        /*this.background = this.add.sprite(0, 0, 'fairyBackground');
        this.fairyBlackout = this.add.sprite(350, 0, 'fairyBlackout');
        this.fairyHint = this.add.button(800, 0, 'fairy', function()
        {
            for(let i=0, len=this.items.length; i<len; i++)
            {
                if(!this.items.children[i].found)
                {
                    let emitter = this.add.emitter(this.items.children[i].x + (this.items.children[i].width/2), this.items.children[i].y + (this.items.children[i].height/2), 100);
                    emitter.makeParticles('fairyEmit', [0, 1, 2, 3, 4, 5, 6, 7]);
                    emitter.start(true, 2000, null, 50);
                    
                    break;
                }
            }
        }, this);
        
        this.fairyHome = this.add.button(860, 340, 'fairyHome', this.selected);
            this.fairyHome.dropCoordX = 454.3;
            this.fairyHome.dropCoordY = 3;
            this.fairyHome.scaleXY = 0.45;
            this.fairyHome.found = false;
        this.items.add(this.fairyHome);
        this.carpet = this.add.button(210, 100, 'magicCarpet', this.selected);
            this.carpet.dropCoordX = 547;
            this.carpet.dropCoordY = 21;
            this.carpet.scaleXY = 0.7;
            this.carpet.found = false;
        this.items.add(this.carpet);
        this.door = this.add.button(420, 550, 'pixieDoor', this.selected);
            this.door.dropCoordX = 415;
            this.door.dropCoordY = 18;
            this.door.scaleXY = 0.45;
            this.door.found = false;
        this.items.add(this.door);
        this.spell = this.add.button(20, 20, 'spell', this.selected);
            this.spell.dropCoordX = 517.3;
            this.spell.dropCoordY = 21;
            this.spell.scaleXY = 0.5;
            this.spell.found = false;
        this.items.add(this.spell);
        this.unicorn = this.add.button(780, 500, 'unicorn', this.selected);
            this.unicorn.dropCoordX = 588;
            this.unicorn.dropCoordY = 4;
            this.unicorn.scaleXY = 0.45;
            this.unicorn.found = false;
        this.items.add(this.unicorn);
        
        this.wand = this.add.sprite(480, 430, 'wand', 0);
        this.wand.scale.setTo(0.3, 0.3);
        let wave = this.wand.animations.add('wave');
        this.wand.animations.play('wave', 10, true);
        this.wand.inputEnabled = true;
        this.wand.dropCoordX = 358.4;
        this.wand.dropCoordY = 18;
        this.wand.scaleXY = 0.25;
        this.wand.animStop = 8;
        this.wand.found = false;
        this.wand.events.onInputDown.add(function()
        {
            this.selected(this.wand);
        }, this);
        this.items.add(this.wand);
        //Bring the buttons to the top
        this.world.bringToTop(this.items);*/
    },
    selected: function(item)
    {
        //Anchor the game state to this.this
        this.this = Magic.GameState;
        //Increments the number of items found
        this.this.itemsFound++;
        //Set item boolean to found
        item.found = true;
        //Tweens to send the item to the 'found' items
        this.this.add.tween(item).to({x: item.dropCoordX, y: item.dropCoordY}, 1000, "Linear", true);
        this.this.add.tween(item.scale).to({x: item.scaleXY, y: item.scaleXY}, 1000, "Linear", true);
        //If the item has an animation stop the animation and set the frame to the one specified
        if(item.animStop != undefined)
        {
            item.animations.stop(false, true);
            item.frame = item.animStop;
        }
        //Stop input on the item so it cannot be found again
        item.inputEnabled=false;
        //Check if all items are found and game should end
        if(this.this.itemsFound === this.this.itemsToFind)
        {
            console.log("end game");
        }
    },
    update: function ()
    {
        
    }
};
/*Copyright (C) Wayside Co. - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written and maintained by Wayside Co <info@waysideco.ca>, 2018*/