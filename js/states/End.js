var Magic = Magic || {};

Magic.EndState = {
    create: function ()
    {
        this.background = this.add.sprite(0, 0, 'responseFairy');
        this.coverSprites = this.add.group();
        
        if(Magic.displayGroup != undefined)
        {
            this.world.bringToTop(Magic.displayGroup);
            Magic.StoryState.transitionScreen(null);
        }
        else
        {
            this.character = this.add.sprite(1000, -50, 'storyFairy');
            this.anim = this.character.animations.add('fly');
            let flyTween = this.add.tween(this.character).to({x: this.world.centerX, y: this.world.centerY - 100}, 2000, "Linear", true);
            flyTween.onComplete.add(function()
            {
                this.anim.stop();
                this.character.loadTexture('endFairy');
                
                this.couponAnim();
                this.world.bringToTop(this.coverSprites);
            }, this);
            this.anim.play(8, true);
        }
    },
    couponAnim: function()
    {
        this.coupon = this.add.sprite(50, 300, 'coupon');
        this.coupon.scale.setTo(0.7, 0.7);
        this.coupon.alpha = 0;
        this.revealTween = this.add.tween(this.coupon).to({alpha: 1}, 5000, "Linear", true);
        this.revealTween.onComplete.add(function()
        {
            this.coverSprites.removeAll();
        }, this);
        
        for(let i=50, max=(this.coupon.texture.width*0.7)+50; i<=max; i=i+13)//13x12.5
        {
            for(let j=300, maxy=(this.coupon.texture.height*0.7)+300; j<=maxy; j=j+13)
            {
                let cover = this.add.sprite(i, j, 'fairyEmit', 0);
                let coverAnim = cover.animations.add('flash');
                coverAnim.play(Math.floor(Math.random() * 10) + 1, true);
                this.coverSprites.add(cover);
            }
        }
    }
}