var Magic = Magic || {};

Magic.PreloadState = {
    preload: function ()
    {
        var preloadBG = this.add.sprite((this.world.width - 580) * 0.5, (this.world.height + 150) * 0.5, 'loading-background');
        var preloadProgress = this.add.sprite((this.world.width - 540) * 0.5, (this.world.height + 170) * 0.5, 'loading-progress');
        this.load.setPreloadSprite(preloadProgress);

        this.load.image('chooseScreen', 'assets/images/chooseScreen.png');
        this.load.image('instructions', 'assets/images/instructions.png');
        this.load.image('main', 'assets/images/main.png');
        this.load.image('start', 'assets/images/start.png');
        this.load.image('hint', 'assets/images/hint.png');
        this.load.image('coupon', 'assets/images/saveMagic_coupon.jpg');
        //Witch Version
        this.load.image('witchBackground', 'assets/images/witchBackground.png'); 
        this.load.image('responseWitch', 'assets/images/responseScreenWitch.png'); 
        this.load.image('endWitch', 'assets/images/endWitch.png'); 
        this.load.image('witch', 'assets/images/witch.png'); 
        this.load.image('witchBlackout', 'assets/images/witchBlackout.png');
        
        this.load.image('witchHome', 'assets/images/witchHome.png');
        this.load.image('magicBook', 'assets/images/magicBook.png');
        this.load.image('witchHat', 'assets/images/witchHat.png');
        this.load.image('cauldron', 'assets/images/cauldron.png');
        this.load.image('blackCat', 'assets/images/blackCat.png');
        this.load.image('witchBubble', 'assets/images/witchBubble.png');
        this.load.image('endTextWitch', 'assets/images/endTextWitch.png');
        
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
        this.load.image('endTextFairy', 'assets/images/endTextFairy.png');
        
        this.load.spritesheet('wand', 'assets/images/wandSprite.png', 159, 100, 9);
        this.load.spritesheet('fairyEmit', 'assets/images/fairyEmit.png', 12.5, 13, 8);
        this.load.spritesheet('witchEmit', 'assets/images/witchEmit.png', 12.5, 11, 8);
        this.load.spritesheet('storyWitch', 'assets/images/storyWitch.png', 374, 226, 5);
        this.load.spritesheet('storyFairy', 'assets/images/storyFairy.png', 249, 226, 5);
        
        //Audio
        this.load.audio('witchBackground', ['assets/audio/witchBackground.mp3', 'assets/audio/witchBackground.m4a', 'assets/audio/witchBackground.ogg']);
        this.load.audio('fairyBackground', ['assets/audio/fairyBackground.mp3', 'assets/audio/fairyBackground.m4a', 'assets/audio/fairyBackground.ogg']);
        this.load.audio('opening', ['assets/audio/opening.mp3', 'assets/audio/opening.m4a', 'assets/audio/opening.ogg']);
        this.load.audio('magic', ['assets/audio/magic.mp3', 'assets/audio/magic.m4a', 'assets/audio/magic.ogg']);
        
        this.load.text('magicData', 'assets/data/magicData.json');
        /*
        JSON:
        Character State is defined as an object, each object contains:
        Background: the texture for the 'world' of the character
        EndBackground: the texture for the final scene
        Blackout: the texure which has all the objects to find displayed in a box as black images, the ones filled when items are found
        Hint: the character texture to be used to offer hints
        EndChar: the character in the final screen that casts the 'reward spell'
        EndAnim: the spritesheet for the end screen animation
        EndText: the texture with the text to be displayed at the end
        Audio: the audio file that should be played during the game
        HintX: the x coordinate at which the hint texture should be displayed
        Particle: the spritesheet used for the emitter for the hints
        ItemsToFind: the number of items the player must find in the scene
        Items: An array of the items that must be found, each item...
            Is an array each containing...
            [0]: the x coordinate of the item
            [1]: the y coordinate of the item
            [2]: the item texture
            [3]: the name of the function to be called when the item is 'clicked'
            [4]: the x coordinate of where the item goes to line up with itself in the blackout box indicating it has been found
            [5]: the y coordinate of where the item goes to line up with itself in the blackout box indicating it has been found
            [6]: the number indicating the scale of the item once it gets to the blackout box indicating it has been found
            [7]: the scale of the item in the scene
            [8]: a boolean value indicating if an item has been found -> default false
            [9]: a boolean indicating whether or not the item has an animation meaning a sprite must be created rather than a button to accomodate the animation
            [10]: the frame that the animation should stop at (so it fills the blackout box image), use null if no animation
        */
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