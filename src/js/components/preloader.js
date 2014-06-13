(function(app) {
  'use strict';
  var CONSTANTS = app.CONSTANTS;
  var manifest = app.manifest;

  var skyCol = 0x7AD4FF;
  var greenCol = 0xC8DD78;



  function Preloader() {
    this.asset = null;
    this.ready     = false;
    this.readyDone = false;
    this.obj = {};
    this.obj.height = 50;
  }

  Preloader.prototype = {

    preload: function () {
      this.alpha = 0;
      var width =  this.game.width;
      var height = this.game.height;

      this.graphics = this.add.graphics( 0, 0 );
      this.graphics.beginFill(skyCol);
      this.graphics.moveTo( 0, 0);
      this.graphics.lineTo( width, 0);
      this.graphics.lineTo( width, height);
      this.graphics.lineTo( 0, height);
      this.graphics.alpha = 1;

      this.graphics.endFill();

      this.loader = this.add.graphics( 0, 0);
      this.loader.beginFill(greenCol);
      

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.image('player', 'assets/player.png');

      for(var i = 0; i < manifest.length; i++){
         var srcID = manifest[i].id;
         var srcDir= manifest[i].dir;

         this.load.image(srcID, srcDir);
      }

      console.log('preload');
    },

    create: function () {
      //this.asset.cropEnabled = false;
    },

    update: function () {
      if(this.readyDone) return;

      if (!!this.ready) {
        this.loader.clear();
        this.loader.beginFill(greenCol);
        //console.log(this.obj.height);
        this.loader.drawRect(0, CONSTANTS.GREEN_PT_Y, CONSTANTS.STAGE_WIDTH, this.obj.height);

        //this.game.state.start('menu');
        // this.readyDone = true;

        this.add.tween(this.obj).to({ height: 300}, 50, Phaser.Easing.Circular.InOut, true);
        
      }else{
        var width = CONSTANTS.STAGE_WIDTH * this.load.progress / 100;
        this.loader.clear();
        this.loader.beginFill(greenCol);
        this.loader.drawRect(0, CONSTANTS.GREEN_PT_Y, width, 50);
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  app.components.Preloader = Preloader;

})((window.__scope || window).ksGame);
