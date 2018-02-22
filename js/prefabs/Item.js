//Sets up items
var Magic = Magic || {};


Magic.Item = function(state) {
     //Intalizes state side data locally
     this.state = state;
     this.game = state.game; 
     
     Magic.Item.prototype.init = function(x, y, texture, func, coordX, coordY, scaleNum, initScale, fnd, animation, stopFrame)
     {
         if(!animation)
         {
             this.item = this.state.add.button(x, y, texture, function()
             {
                 func(this);
             }, this);
         }
         else
         {
             this.item = this.state.add.sprite(x, y, texture, 0);
             let anim = this.item.animations.add('anim');
             this.item.play('anim', 10, true);
             this.item.inputEnabled = true;
             this.item.animStop = stopFrame;
             this.item.events.onInputDown.add(function()
             {
                 func(this);
             }, this);
         }
         this.item.scale.setTo(initScale, initScale);
         this.dropCoordX = coordX;
         this.dropCoordY = coordY;
         this.scaleXY = scaleNum;
         this.found = fnd;
         
         return this;
     };
};
/*Copyright (C) Wayside Co. - All Rights Reserved
* Unauthorized copying of this file, via any medium is strictly prohibited
* Proprietary and confidential
* Written and maintained by Wayside Co <info@waysideco.ca>, 2018*/