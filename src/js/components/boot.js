(function (app) {
  'use strict';
  var skyCol = 0x7AD4FF;
  var greenCol = 0xC8DD78;


  function Boot() {}

  Boot.prototype = {
    preload : function(){
      var width  = this.game.width;
      var height = this.game.height;
        
      this.graphics = this.add.graphics( 0, 0 );
      this.graphics.beginFill(skyCol);
      this.graphics.moveTo( 0, 0);
      this.graphics.lineTo( width, 0);
      this.graphics.lineTo( width, height);
      this.graphics.lineTo( 0, height);
      this.graphics.alpha = 1;

      this.graphics.endFill()


    },

    create: function () {
      this.game.input.maxPointers = 1;
      // this.game.stage.disableVisibilityChange = true;

      if (this.game.device.desktop) {
        this.game.stage.scale.pageAlignHorizontally = true;
      } else {
        this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
        this.game.stage.scale.minWidth =  480;
        this.game.stage.scale.minHeight = 260;
        this.game.stage.scale.maxWidth = 640;
        this.game.stage.scale.maxHeight = 480;
        this.game.stage.scale.forceLandscape = true;
        this.game.stage.scale.pageAlignHorizontally = true;
        this.game.stage.scale.setScreenSize(true);
      }

     this.game.state.start('preloader');
    }
  };

  app.components.Boot = Boot;

})((window.__scope || window).ksGame);
