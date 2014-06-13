(function(app) {
  'use strict';
  
  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Menu.prototype = {
    background : null,
    sky        : null,

    create: function () {
        var BgSky =  app.components.game.Background;
        this.sky = new BgSky(this);
        console.log(this.sky);
     
        var width  = this.game.width;
        var height = this.game.height;

        this.add.existing(this.sky);
    },

    update: function () {

    },

    onDown: function () {
      this.game.state.start('game');
    }
  };

  app.components.Menu = Menu;

})((window.__scope || window).ksGame);
