(function(scope){
    scope.ksGame = {
        // cocomponentstants

        CONSTANTS : {
            'STAGE_WIDTH' : 320,
            'STAGE_HEIGHT': 460,

            'GREEN_PT_Y'  : (460 - 300), 
        },

        // =================

        manifest :[
            // numbers
            {id : 'numbers/0-zero', dir : 'assets/numbers/0-zero.png'},
            {id : 'numbers/1-one',  dir : 'assets/numbers/1-one.png'},
            {id : 'numbers/2-two',  dir : 'assets/numbers/2-two.png'},
            {id : 'numbers/3-three',  dir : 'assets/numbers/3-three.png'},
            {id : 'numbers/4-four',  dir : 'assets/numbers/4-four.png'},
            {id : 'numbers/5-five',  dir : 'assets/numbers/5-five.png'},
            {id : 'numbers/6-six',  dir : 'assets/numbers/6-six.png'},
            {id : 'numbers/7-seven',  dir : 'assets/numbers/7-seven.png'},
            {id : 'numbers/8-eight',  dir : 'assets/numbers/8-eight.png'},
            {id : 'numbers/9-nine',  dir : 'assets/numbers/9-nine.png'},

            // logo
            {id : 'logo', dir : 'assets/logo.png'},

            // tree
            {id : 'tree', dir : 'assets/tree.png'}, 
        ],

        // ---------
        components : {
            game : {}
        }
    };

    window.onload = function () {
      'use strict';
      var CONSTANTS = scope.ksGame.CONSTANTS; 
      var components = scope.ksGame.components;
      var game;

      game = new Phaser.Game( CONSTANTS.STAGE_WIDTH, CONSTANTS.STAGE_HEIGHT, Phaser.AUTO, 'kuruma-one-game');
      game.state.add('boot', components.Boot);
      game.state.add('preloader', components.Preloader);
      game.state.add('menu', components.Menu);
      game.state.add('game', components.Game);

      
      game.state.start('boot');
    };

})(window.__scope || window);
