var Magic = Magic || {};

Magic.StoryState = {
    create: function ()
    {
        this.add.sprite(0, 0, 'chooseScreen');
        this.fairy = this.add.sprite(0, 620, 'fairy');
        this.fairy.scale.x = -1;
        this.fairy.anchor.setTo(0, 1);
        this.witch = this.add.sprite(700, 300, 'witch');
        this.playing = false;
        this.who = null;
        //Set the state -> fairy or witch
        Magic.SaveState = "Witch";
        //this.game.state.start('Game');
        this.peekaboo('fairy');
    },
    peekaboo: function()
    {
        this.playing = true;
        
        let peekTween = this.add.tween(this.fairy).to({rotation: 0.3}, 1500, "Linear", true);
        peekTween.onComplete.add(function()
        {
            let resetTween = this.add.tween(this.fairy).to({rotation: 0}, 100, "Linear");
            let pauseTween = this.add.tween(this.fairy).to({x: 200}, 1000, "Linear");
            let rotateTween = this.add.tween(this.fairy).to({rotation: 0.2}, 100, "Linear");
            let flyTween = this.add.tween(this.fairy).to({x: 400, y: 0}, 2000, "Linear");
            flyTween.onComplete.add(function()
            {
                this.fairy.x = 0;
                this.fairy.y = 620;
                this.fairy.rotation = 0;
                this.playing = false;
            }, this);
            
            resetTween.chain(pauseTween);
            pauseTween.chain(rotateTween);
            rotateTween.chain(flyTween);
            
            resetTween.start();
        }, this);
    },
    update: function()
    {
        //console.log()
        if(this.game.device.desktop && !this.playing)//wrong if not playing replay self if playing and not self stop old play self
        {
            if(this.input.x > 487)
            {
                console.log('witch');
            }
            else
            {
                if(this.who != "fairy")
                {
                    this.who = "fairy";
                    this.peekaboo();
                }
            }
        }
        else
        {
            console.log('NOT');
        }
    }
};
/*Copyright (C) Wayside Co. - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written and maintained by Wayside Co <info@waysideco.ca>, 2018*/