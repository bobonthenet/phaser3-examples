var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.atlas('cards', 'assets/atlas/cards.png', 'assets/atlas/cards.json');
}

function create ()
{
    //  Create some random cards

    var frames = this.textures.get('cards').getFrameNames();

    for (var i = 0; i < 64; i++)
    {
        var x = Phaser.Math.Between(0, 800);
        var y = Phaser.Math.Between(0, 600);
        var s = Phaser.Math.FloatBetween(0.5, 1);

        this.add.image(x, y, 'cards', Phaser.Math.RND.pick(frames)).setScale(s).setInteractive();
    }

    this.input.events.on('POINTER_DOWN_EVENT', function (event) {

        if (event.gameObject)
        {
            event.gameObject.destroy();
        }

    });
}
