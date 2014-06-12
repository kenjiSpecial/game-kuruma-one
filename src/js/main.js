(function(scope){
    scope.ksGame = {
        // cocomponentstants
        
        COcomponentsTANTS : {
        },

        // ---------
        
        components : {
        }
    };

    window.onload = function () {
      'use strict';

      var game
        , components = scope.ksGame.components;

      game = new Phaser.Game(640, 480, Phaser.AUTO, 'kuruma-one-game');
      game.state.add('boot', components.Boot);
      game.state.add('preloader', components.Preloader);
      game.state.add('menu', components.Menu);
      game.state.add('game', components.Game);

      game.state.start('boot');
    };

})(window.__scope || window);
