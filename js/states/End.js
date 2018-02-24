var Magic = Magic || {};

Magic.EndState = {
    create: function ()
    {
        if(Magic.displayGroup != undefined)
        {
            this.world.bringToTop(Magic.displayGroup);
            Magic.StoryState.transitionScreen(null);
        }
        this.add.sprite(0, 0, 'witch');
    }
}