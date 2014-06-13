(function(app) {
  'use strict';
  var CONSTANTS = app.CONSTANTS;

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {

    preload: function () {
      this.asset = this.add.sprite(320, 240, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);
      this.load.image('player', 'assets/player.png');
      this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');

      for(var i = 0; i < CONSTANTS.length; i++){
         var srcID = CONSTANTS[i].id;
         var srcDir= CONSTANTS[i].dir;

         this.load.image(srcID, srcDir);
      }

    },

    create: function () {
      this.asset.cropEnabled = false;
    },

    update: function () {
      if (!!this.ready) {
        this.game.state.start('menu');
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  app.components.Preloader = Preloader;

})((window.__scope || window).ksGame);
