controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Babypenguin.tileKindAt(TileDirection.Left, assets.tile`myTile32`)) {
        tiles.setTileAt(tiles.getTileLocation(1, 14), assets.tile`myTile28`)
    } else if (Babypenguin.tileKindAt(TileDirection.Left, assets.tile`myTile28`)) {
        info.changeScoreBy(1)
    } else {
    	
    }
})
function levels () {
    scene.setTile(1, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(5, assets.tile`myTile28`, false)
}
let Babypenguin: Sprite = null
Babypenguin = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . d d f f f f d d . . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d 1 1 1 d 1 1 1 d . . . 
    . . . d d 1 f f 1 f f 1 d . . . 
    . . . d d 1 1 1 1 1 1 1 d . . . 
    . . . f d 1 1 f f f 1 1 f . . . 
    . . . f d d 1 1 f 1 1 d f . . . 
    . . . f d d d d d d d d f . . . 
    . . . f d 1 1 1 1 1 1 d f . . . 
    . . . d d 1 f 1 f f 1 d d . . . 
    . . . d d 1 1 1 1 1 1 d d . . . 
    . . . d d 1 f f 1 f 1 d d . . . 
    . . . . d d 1 1 1 1 d d . . . . 
    . . . . f f f . . f f f . . . . 
    . . . . f . f . . f . f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Babypenguin)
info.setScore(0)
Babypenguin.setStayInScreen(true)
scene.cameraFollowSprite(Babypenguin)
tiles.setTilemap(tilemap`level1`)
