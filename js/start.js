var Magic = Magic || {};//replace with game name variable

if(Phaser.Device.ie) //Checks that internet explorer is being used
{
    if(Phaser.Device.ieVersion < 10) //Check for old version
    {
        var error = document.createElement("DIV");
        error.setAttribute("id", "ieError");
        document.body.appendChild(error);
        document.getElementById("ieError").innerHTML = "Please upgrade your Browser <br><br> <a href = 'https://www.microsoft.com/en-ca/download/internet-explorer.aspx'>Internet Explorer</a><br><a href='https://www.google.com/chrome/browser/desktop/index.html'>Chrome</a><br><a href='https://www.mozilla.org/en-US/firefox/new/'>Firefox</a>";
    
    }
    else
    {
        Magic.game = new Phaser.Game(960, 640, Phaser.AUTO);

        Magic.game.state.add('Cache', Magic.CacheState);
        Magic.game.state.add('Boot', Magic.BootState); 
        Magic.game.state.add('Preload', Magic.PreloadState); 
        Magic.game.state.add('Game', Magic.GameState);
        Magic.game.state.add('Story', Magic.StoryState);
        Magic.game.state.add('End', Magic.EndState);

        Magic.game.state.start('Cache'); 
    }
}
else
{
    Magic.game = new Phaser.Game(960, 640, Phaser.AUTO);

    Magic.game.state.add('Cache', Magic.CacheState);
    Magic.game.state.add('Boot', Magic.BootState); 
    Magic.game.state.add('Preload', Magic.PreloadState); 
    Magic.game.state.add('Game', Magic.GameState);
    Magic.game.state.add('Story', Magic.StoryState);
    Magic.game.state.add('End', Magic.EndState);

    Magic.game.state.start('Cache');
}
/*Copyright (C) Wayside Co. - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written and maintained by Wayside Co <info@waysideco.ca>, 2018*/