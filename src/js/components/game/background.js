(function(app){
    'use strict'
    var skyCol = 0x7AD4FF;
    var greenCol = 0xC8DD78;
    var greenHeight = 300;

    function GameBackground(game){
        this.width  = game.game.width;
        this.height = game.game.height; 

        Phaser.Graphics.call(this, game, 0, 0);

        // sky

        this.beginFill(skyCol);

        this.moveTo( 0, 0);
        this.lineTo( this.width, 0);
        this.lineTo( this.width, this.height);
        this.lineTo( 0, this.height);
        this.lineTo( 0, 0);

        this.endFill();

        // green
        this.beginFill(greenCol);

        this.moveTo( 0, this.height - greenHeight); 
        this.lineTo( this.width, this.height - greenHeight); 
        this.lineTo( this.width, this.height); 
        this.lineTo( 0,  this.height); 
        
        this.endFill();
    };

    GameBackground.prototype = Object.create(Phaser.Graphics.prototype);
    GameBackground.prototype.constructor = GameBackground;

    app.components.game.Background = GameBackground;

})((window.__scope || window).ksGame);
