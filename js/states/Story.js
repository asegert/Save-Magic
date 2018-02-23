var Magic = Magic || {};

Magic.StoryState = {
    create: function ()
    {
        //Set the state -> fairy or witch
        Magic.SaveState = "Witch";
        this.game.state.start('Game');
    }
};
/*Copyright (C) Wayside Co. - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written and maintained by Wayside Co <info@waysideco.ca>, 2018*/