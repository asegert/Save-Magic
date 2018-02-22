var Magic = Magic || {};

Magic.GameState = {
    create: function ()
    {
        //Witch Version
        this.background=this.add.sprite(0, 0, 'witchBackground');
        this.witchBlackout = this.add.sprite(350, 0, 'witchBlackout');
        this.witchHint = this.add.button(700, 0, 'witch', function()
        {
            console.log('hint');
        }, this);
        
        //Items
        this.witchHome=this.add.button(120, 120, 'witchHome', this.selected);
            this.witchHome.dropCoordX = 596;
            this.witchHome.dropCoordY = 8;
            this.witchHome.scaleXY = 0.4;
        this.book = this.add.button(770, 540, 'magicBook', this.selected);
            this.book.dropCoordX = 455;
            this.book.dropCoordY = 18;
            this.book.scaleXY = 0.8;
        this.cat = this.add.button(260, 280, 'blackCat', this.selected);
            this.cat.dropCoordX = 355;
            this.cat.dropCoordY = 16;
            this.cat.scaleXY = 0.7;
        this.cauldron = this.add.button(70, 410, 'cauldron', this.selected);
            this.cauldron.dropCoordX = 404.5;
            this.cauldron.dropCoordY = 16;
            this.cauldron.scaleXY = 0.6;
        this.hat = this.add.button(320, 450, 'witchHat', this.selected);
            this.hat.dropCoordX = 546;
            this.hat.dropCoordY = 18;
            this.hat.scaleXY = 1;
        
        this.potion = this.add.sprite(610, 375, 'potions', 0);
        this.potion.scale.setTo(0.3, 0.3);
        let mix = this.potion.animations.add('mix');
        this.potion.animations.play('mix', 10, true);
        this.potion.inputEnabled = true;
        this.potion.dropCoordX = 512.5;
        this.potion.dropCoordY = 19.5;
        this.potion.scaleXY = 0.21;
        this.potion.animStop = 6;
        this.potion.events.onInputDown.add(function()
        {
            this.selected(this.potion);
        }, this);
        
        //Fairy Version
        /*this.background = this.add.sprite(0, 0, 'fairyBackground');
        this.fairyBlackout = this.add.sprite(350, 0, 'fairyBlackout');
        this.fairyHint = this.add.button(800, 0, 'fairy', function()
        {
            console.log('hint');
        }, this);
        
        this.fairyHome = this.add.button(860, 340, 'fairyHome', this.selected);
            this.fairyHome.dropCoordX = 454.3;
            this.fairyHome.dropCoordY = 3;
            this.fairyHome.scaleXY = 0.45;
        this.carpet = this.add.button(210, 100, 'magicCarpet', this.selected);
            this.carpet.dropCoordX = 547;
            this.carpet.dropCoordY = 21;
            this.carpet.scaleXY = 0.7;
        this.door = this.add.button(420, 550, 'pixieDoor', this.selected);
            this.door.dropCoordX = 415;
            this.door.dropCoordY = 18;
            this.door.scaleXY = 0.45;
        this.spell = this.add.button(20, 20, 'spell', this.selected);
            this.spell.dropCoordX = 517.3;
            this.spell.dropCoordY = 21;
            this.spell.scaleXY = 0.5;
        this.unicorn = this.add.button(780, 500, 'unicorn', this.selected);
            this.unicorn.dropCoordX = 588;
            this.unicorn.dropCoordY = 4;
            this.unicorn.scaleXY = 0.45;
        
        this.wand = this.add.sprite(480, 430, 'wand', 0);
        this.wand.scale.setTo(0.3, 0.3);
        let wave = this.wand.animations.add('wave');
        this.wand.animations.play('wave', 10, true);
        this.wand.inputEnabled = true;
        this.wand.dropCoordX = 358.4;
        this.wand.dropCoordY = 18;
        this.wand.scaleXY = 0.25;
        this.wand.animStop = 8;
        this.wand.events.onInputDown.add(function()
        {
            this.selected(this.wand);
        }, this);*/
    },
    selected: function(item)
    {
        Magic.GameState.add.tween(item).to({x: item.dropCoordX, y: item.dropCoordY}, 1000, "Linear", true);
        Magic.GameState.add.tween(item.scale).to({x: item.scaleXY, y: item.scaleXY}, 1000, "Linear", true);
        
        if(item.animStop != undefined)
        {
            item.animations.stop(false, true);
            item.frame = item.animStop;
        }
        
        item.inputEnabled=false;
    },
    update: function ()
    {
        
    }
};
/*Copyright (C) Wayside Co. - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written and maintained by Wayside Co <info@waysideco.ca>, 2018*/