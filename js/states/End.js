var Magic = Magic || {};

Magic.EndState = {
    create: function ()
    {
        if(Magic.displayGroup != undefined)
        {
            this.world.bringToTop(Magic.displayGroup);
            Magic.StoryState.transitionScreen(null);
        }
        this.game.stage.backgroundColor = "#4488AA";//I think l8
        this.add.sprite(0, 0, 'witch');
    }
}