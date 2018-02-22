var Magic = Magic || {};

Magic.GameState = {
    create: function ()
    {
        //Witch Version
        this.background=this.add.sprite(0, 0, 'witchBackground');
        
        this.witchHint = this.add.button(700, 0, 'witch', function()
        {
            console.log('hint');
        }, this);
        
        //Items
        /*this.witchHome=this.add.button(120, 120, 'witchHome', this.selected);
        this.book = this.add.button(770, 540, 'magicBook', this.selected);
        this.cat = this.add.button(260, 280, 'blackCat', this.selected);
        this.cauldron = this.add.button(70, 410, 'cauldron', this.selected);
        this.hat = this.add.button(320, 450, 'witchHat', this.selected);
        
        this.potion = this.add.sprite(610, 375, 'potions', 0);
        this.potion.scale.setTo(0.3, 0.3);
        let mix = this.potion.animations.add('mix');
        this.potion.animations.play('mix', 10, true);
        this.potion.inputEnabled = true;
        this.potion.events.onInputDown.add(function()
        {
            this.selected(this.potion);
        }, this);*/
        
        //Fairy Version
        this.background = this.add.sprite(0, 0, 'fairyBackground');
        this.blackout = this.add.sprite(200, 500, 'fairyBlackout');
        this.fairyHint = this.add.button(800, 0, 'fairy', function()
        {
            console.log('hint');
        }, this);
        
        this.fairyHome = this.add.button(860, 340, 'fairyHome', this.selected);
        this.carpet = this.add.button(320, 170, 'magicCarpet', this.selected);
        this.door = this.add.button(420, 550, 'pixieDoor', this.selected);
        this.script = this.add.button(500, 50, 'script', this.selected);
        this.unicorn = this.add.button(780, 500, 'unicorn', this.selected);
        
        this.wand = this.add.sprite(480, 430, 'wand', 0);
        this.wand.scale.setTo(0.3, 0.3);
        let wave = this.wand.animations.add('wave');
        this.wand.animations.play('wave', 10, true);
        this.wand.inputEnabled = true;
        this.wand.events.onInputDown.add(function()
        {
            this.selected(this.wand);
        }, this);
    },
    selected: function(item)
    {
        item.destroy();
    },
    update: function ()
    {
        
    }
};
/*Copyright (C) Wayside Co. - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written and maintained by Wayside Co <info@waysideco.ca>, 2018*/