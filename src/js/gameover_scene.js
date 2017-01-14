var GameOver = {
    create: function () {
        console.log("Game Over");
        var button = this.game.add.button(400, 300,
                                          'button',
                                          this.restart,
                                          this, 2, 1, 0);
        button.anchor.set(0.5);
        var goText = this.game.add.text(400, 100, "¡Has muerto!");
        goText.font = 'MedievalSharp';
        goText.fontSize = 70;
        var text = this.game.add.text(0, 0, "Reintentar");
        text.font = 'Astloch';
        text.fontSize = 40;
        //text.fontVariant = 'Bold';
        text.anchor.set(0.5);
        goText.anchor.set(0.5);
        button.addChild(text);

  //DONE 8 crear un boton con el texto 'Return Main Menu' que nos devuelva al menu del juego
        var button2 = this.game.add.button(400, 200,
                                          'button',
                                          this.goMenu,
                                          this, 2, 1, 0);
        button2.anchor.set(0.5);
        var text2 = this.game.add.text(0, 0, "Menu");
        text2.font = 'Astloch';
        text2.fontSize = 40;
        text2.anchor.set(0.5);
        button2.addChild(text2);


        button.anchor.set(0.5);


    },
    restart: function(){
      this.game.click.play(false);
      this.game.state.start('play');
    },

    goMenu: function(){
      this.game.click.play(false);
      this.game.state.start('menu');
    }
};

module.exports = GameOver;
