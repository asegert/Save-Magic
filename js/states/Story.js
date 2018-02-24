var Magic = Magic || {};

Magic.StoryState = {
    create: function ()
    {
        //Sets the dual Background
        this.background = this.add.sprite(0, 0, 'chooseScreen');
        this.background.inputEnabled = true;
        //When the background is clicked set ending to true and store the mouse position
        this.background.events.onInputDown.add(function()
        {
            //If the game is on mobile playing needs to be turned off so ending animation will play
            if(!this.game.device.desktop)
            {
                this.playing = false;
            }
            //Set the ending to true
            this.ending = true;
            //Store X
            this.inputX = this.input.x;
        }, this);
        //Create the fairy
        this.fairy = this.add.sprite(this.world.centerX - 150, this.world.centerY - 200, 'storyFairy', 0);
        //Add animation
        this.fairyAnim = this.fairy.animations.add('fly');
        //Flip the fairy
        this.fairy.scale.x = -1;
        //Turn off visibility
        this.fairy.alpha = 0;
        //Create the witch
        this.witch = this.add.sprite(this.world.centerX + 100, this.world.centerY - 50, 'storyWitch', 0);
        //Add animation
        this.witchAnim = this.witch.animations.add('fly');
        //Turn off visibility
        this.witch.alpha = 0;
        //Boolean for if an animation is currently playing
        this.playing = false;
        //Boolean for if the ending sequence has been activated
        this.ending = false;
        //Stores who should be playing the fairy or the witch
        this.who = 'null';
        //Will store the 'fade in' effect for desktop
        this.poof = null;
        //Set the state -> fairy or witch, witch by default
        Magic.SaveState = "Witch";
    },
    peekaboo: function(chosen)
    {
        //If poof is storing something stop the tween
        if(this.poof != null)
            this.poof.stop();
        //Reset the visibility
        this.fairy.alpha = 0;
        this.witch.alpha = 0;
        
        if(this.who === "witch")
        {
            //If the ending sequnce should be played
            if(chosen)
            {
                //An animation is active
                this.playing = true;
                //Set the state
                Magic.SaveState = "Witch";
                //Make visible
                this.witch.alpha = 1;
                //Run the animation
                this.witchAnim.play(8, true);
                //Make her fly
                let flyTween = this.add.tween(this.witch).to({x: 0, y: -300}, 5000, "Linear", true);
                flyTween.onComplete.add(function()
                {
                    //Once she had 'flown away' start the game
                    Magic.StoryState.transitionScreen('Game');
                }, this);
            }
            //If it is not the ending
            else
            {
                //Fade her in and play her animation
                this.poof = this.add.tween(this.witch).to({alpha: 1}, 2000, "Linear", true);
                this.witchAnim.play(8, true);   
            }
        }
        else if(this.who === "fairy")
        {
            //If the ending sequnce should be played
            if(chosen)
            {
                //An animation is active
                this.playing = true;
                //Set the state
                Magic.SaveState = "Fairy";
                //Make visible
                this.fairy.alpha = 1;
                //Run the animation
                this.fairyAnim.play(8, true);
                //Make her fly
                let flyTween = this.add.tween(this.fairy).to({x: 900, y: -200}, 5000, "Linear", true);
                flyTween.onComplete.add(function()
                {
                    //Once she had 'flown away' start the game
                    Magic.StoryState.transitionScreen('Game');
                }, this);
            }
            //If it is not the ending
            else
            {
                //Fade her in and play her animation
                this.poof = this.add.tween(this.fairy).to({alpha: 1}, 2000, "Linear", true);
                this.fairyAnim.play(8, true);  
            }
        }
        //If on mobile and both need to play
        else if(this.who === "dual")
        {
            //An animation is active
            this.playing = true;
            //Turn on visibility
            this.fairy.alpha = 1;
            this.witch.alpha = 1;
            //Play animations
            this.fairyAnim.play(8, true); 
            this.witchAnim.play(8, true); 
        }
    },
    update: function()
    {
        //Check for desktop where mouseover can occur and that it is not the end sequence
        if(this.game.device.desktop && !this.ending)
        {
            //Check which side of the screen is 'active'
            if(this.input.x > 490)
            {
                //Set the witch to play and run the animation
                if(this.who != "witch" && !this.playing)
                {
                    this.who = "witch";
                    this.peekaboo(false);
                }
            }
            else
            {
                //Set the fairy to play and run the animation
                if(this.who != "fairy" && !this.playing)
                {
                    this.who = "fairy";
                    this.peekaboo(false);
                }
            }
        }
        //If on mobile and not the end sequence and the animation is not yet playing
        else if(!this.game.device.desktop && !this.ending && !this.playing)
        {
            //Run the animation for both
            this.who = "dual";
            this.peekaboo(false);
        }
        //If the ending sequence is active and nothing is playing
        else if(this.ending && !this.playing)
        {
            //Check which side of the screen is 'active' and run correct animation
            if(this.inputX > 490)
            {
                this.who = "witch";
                this.peekaboo(true);
            }
            else
            {
                this.who = "fairy";
                this.peekaboo(true);
            }
        }
    },
    transitionScreen: function(state)
    {
        //Set for removal
        if(Magic.displayGroup === undefined || Magic.displayGroup.length < 1)
        {
            this.remove = false;
            Magic.displayGroup = Magic.game.add.group();
        }
        else
        {
            this.remove = true;
        }
        
        this.currentX = 0;
        this.minY = 0;
        this.startX = 0;
        this.startY = 0;
        this.maxX = 12;
        this.maxY = 8;
        this.up = true;
        this.nextState = state;
        
        this.img = 'witchBubble';
        if(Magic.SaveState === "Fairy")
        {
            this.img = 'fairyDust';
        }
        
        this.displayItem();
    },
    displayItem: function()
    {
        if(!this.remove)
        {
            var dust = this.add.sprite((this.startX * 80), (this.startY * 80), this.img);
            Magic.displayGroup.add(dust);
            
            if(this.startY === this.maxY)
            {
                if(this.currentX === this.maxX)
                {
                    this.minY++;
                    this.startX = this.maxX;
                }
                this.startY = this.minY;
            }
            if(this.startX === this.maxX-1)
            {
                if(this.up)
                {
                    this.up = !this.up;
                }
                else
                {
                    this.currentX = this.maxX;
                }
            }
            if(this.startX === this.maxX && this.startY ===this.maxY && !this.up)
            {
                this.count = 0;
                this.remove = true;
                if(this.nextState != null)
                {
                    this.state.start(this.nextState, false, false);
                }
            }
            else if (this.startX > 0)
            {
                this.startX--;
                this.startY++;
                this.time.events.add(0, this.displayItem, this);
            }
            else if(this.startX === 0 || this.startY === 0)
            {
                this.currentX++;
                this.startX = this.currentX;
                this.startY = this.minY;
                this.time.events.add(0, this.displayItem, this);
            }
            else if(this.currentX === 0)
            {
                if(this.up)
                {
                    this.currentX = 1;
                    this.time.events.add(0, this.displayItem, this);
                }
            }
            else
            {
                this.time.events.add(0, this.displayItem, this);
            }
        }
        else
        {
            if(Magic.displayGroup.length > 1)
            {
                Magic.displayGroup.removeChildAt(0);
                this.time.events.add(1, this.displayItem, this);
            }
            else
            {
                Magic.displayGroup = undefined;
            }
        }
    }
};
/*Copyright (C) Wayside Co. - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written and maintained by Wayside Co <info@waysideco.ca>, 2018*/