var Magic = Magic || {};

Magic.GameState = {
    
    create: function ()
    {
        //Stops the game from being played if it will still be reloading after transition completes
        if(Magic.displayGroup != undefined)
        {
            this.input.enabled = false;
            this.magicData = JSON.parse(this.game.cache.getText('magicData'));
            Magic.audio.stop();
            Magic.audio = this.add.audio(this.magicData[Magic.SaveState].Audio);
            Magic.audio.play('', 0, 1, true);
            this.world.bringToTop(Magic.displayGroup);
            Magic.StoryState.transitionScreen(null);
        }
        else
        {
            this.input.enabled = true;
            
            this.magicData = JSON.parse(this.game.cache.getText('magicData'));
        }
        //Holds the function that will be called by Items, must be stored as a variable as is passed as a variable for improved flexibility
        //A little repetitive, but improves readability
        let selected = function(item){Magic.GameState.selected(item)};
        
        this.itemsToFind = this.magicData[Magic.SaveState].ItemsToFind;
        this.itemsFound = 0;
        this.items = new Array();
        //Witch Version
        this.background=this.add.sprite(0, 0, this.magicData[Magic.SaveState].Background);
        this.blackout = this.add.sprite(350, 0, this.magicData[Magic.SaveState].Blackout);
        //Hint buttons
        this.hintChar = this.add.button(this.magicData[Magic.SaveState].HintX, 0, this.magicData[Magic.SaveState].Hint, this.hint, this);
        this.hintSign = this.add.button(this.magicData[Magic.SaveState].HintX + 20, (0.15 * this.magicData[Magic.SaveState].HintX), 'hint', this.hint, this);
        
        //Items
        for(let i = 0, len = this.magicData[Magic.SaveState].Items.length; i<len; i++)
        {
            let data = this.magicData[Magic.SaveState].Items[i];
            
            //Note: data[3] must be evaluated as it is a string that will represent the variable holding the function to be called when the item is selected
            let Item = new Magic.Item(this);
            this.items[this.items.length] = Item.init(data[0], data[1], data[2], eval(data[3]), data[4], data[5], data[6], data[7], data[8], data[9], data[10]);
        }
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
            Magic.StoryState.transitionScreen('End');
        }
    },
    hint: function()
    {
        //Finds the next unfound item and plays an emitter over it for a brief time    
        for(let i=0, len=this.items.length; i<len; i++)
        {
            if(!this.items[i].found)
            {
                let emitter = this.add.emitter(this.items[i].item.x + (this.items[i].item.width/2), this.items[i].item.y + (this.items[i].item.height/2), 100);
                emitter.makeParticles(this.magicData[Magic.SaveState].Particle, [0, 1, 2, 3, 4, 5, 6, 7]);
                emitter.start(true, 2000, null, 50);
                //Once one item is 'hinted' no more need to be found    
                break;
            }
        }
    }
};
/*Copyright (C) Wayside Co. - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written and maintained by Wayside Co <info@waysideco.ca>, 2018*/