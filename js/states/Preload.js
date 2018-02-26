var Magic = Magic || {};

Magic.PreloadState = {
    preload: function ()
    {
        var preloadBG = this.add.sprite((this.world.width - 580) * 0.5, (this.world.height + 150) * 0.5, 'loading-background');
        var preloadProgress = this.add.sprite((this.world.width - 540) * 0.5, (this.world.height + 170) * 0.5, 'loading-progress');
        this.load.setPreloadSprite(preloadProgress);

        this.load.image('chooseScreen', 'assets/images/chooseScreen.png');
        this.load.image('coupon', 'assets/images/saveMagic_coupon.jpg');
        //Witch Version
        this.load.image('witchBackground', 'assets/images/witchBackground.png'); 
        this.load.image('responseWitch', 'assets/images/responseScreenWitch.png'); 
        this.load.image('witch', 'assets/images/witch.png'); 
        this.load.image('witchBlackout', 'assets/images/witchBlackout.png');
        
        this.load.image('witchHome', 'assets/images/witchHome.png');
        this.load.image('magicBook', 'assets/images/magicBook.png');
        this.load.image('witchHat', 'assets/images/witchHat.png');
        this.load.image('cauldron', 'assets/images/cauldron.png');
        this.load.image('blackCat', 'assets/images/blackCat.png');
        this.load.image('witchBubble', 'assets/images/witchBubble.png');
        
        this.load.spritesheet('potions', 'assets/images/potionsSprite.png', 75, 100, 9);
        
        //Fairy Verison
        this.load.image('fairyBackground', 'assets/images/fairyBackground.png');   
        this.load.image('responseFairy', 'assets/images/responseScreenFairy.png'); 
        this.load.image('endFairy', 'assets/images/endFairy.png');  
        this.load.image('fairy', 'assets/images/fairy.png');  
        this.load.image('fairyBlackout', 'assets/images/fairyBlackout.png');
        
        this.load.image('fairyHome', 'assets/images/fairyHome.png');
        this.load.image('spell', 'assets/images/script.png');
        this.load.image('pixieDoor', 'assets/images/pixieDoor.png');
        this.load.image('magicCarpet', 'assets/images/magicCarpet.png');
        this.load.image('unicorn', 'assets/images/unicorn.png');
        this.load.image('fairyDust', 'assets/images/fairyDust.png');
        
        this.load.spritesheet('wand', 'assets/images/wandSprite.png', 159, 100, 9);
        this.load.spritesheet('fairyEmit', 'assets/images/fairyEmit.png', 12.5, 13, 8);
        this.load.spritesheet('witchEmit', 'assets/images/witchEmit.png', 12.5, 11, 8);
        this.load.spritesheet('storyWitch', 'assets/images/storyWitch.png', 374, 226, 5);
        this.load.spritesheet('storyFairy', 'assets/images/storyFairy.png', 249, 226, 5);
        
        this.load.text('magicData', 'assets/data/magicData.json');
    },
    create: function ()
    {
        this.state.start('Story');
    }
};
/*Copyright (C) Wayside Co. - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written and maintained by Wayside Co <info@waysideco.ca>, 2018*/