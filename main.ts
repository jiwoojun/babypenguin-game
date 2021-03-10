controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function closeInventory () {
    inventoryVisible = false
    controller.moveSprite(Babypenguin)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Babypenguin.tileKindAt(TileDirection.Left, assets.tile`myTile32`)) {
        tiles.setTileAt(tiles.getTileLocation(1, 14), assets.tile`myTile28`)
    } else if (Babypenguin.tileKindAt(TileDirection.Left, assets.tile`myTile28`)) {
        story.spriteSayText(Babypenguin, "\"Key is hidden under a secret tile 5 steps down and 5 step right from washbasin\"")
    } else if (Babypenguin.tileKindAt(TileDirection.Right, assets.tile`myTile26`)) {
        tiles.setTileAt(tiles.getTileLocation(10, 5), assets.tile`myTile25`)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    selectedIndex = Math.max(selectedIndex - 1, 0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    selectedIndex = Math.min(selectedIndex + 1, item.length - 1)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inventoryVisible) {
        closeInventory()
    } else {
        openInventory()
    }
})
function openInventory () {
    inventoryVisible = true
    controller.moveSprite(Babypenguin, 0, 0)
    selectedIndex = 0
}
spriteutils.createRenderable(100, function (screen2) {
    if (inventoryVisible) {
        screen2.fillRect(10, 10, 140, 100, 11)
        screen2.drawRect(10, 10, 140, 100, 15)
        images.print(screen2, "INVENTORY", 14, 14, 15)
        images.print(screen2, item_name[selectedIndex], 70, 14, 1)
        screen2.fillRect(14, 24, 132, 1, 15)
        item_top = 28
        for (let index = 0; index <= item.length - 1; index++) {
            spriteutils.drawTransparentImage(item[index], screen2, 14 + index * 20, item_top)
        }
        spriteutils.drawTransparentImage(img`
            ff.ff.ff.ff.ff.ff.ff
            f..................f
            ....................
            f..................f
            f..................f
            ....................
            f..................f
            f..................f
            ....................
            f..................f
            f..................f
            ....................
            f..................f
            f..................f
            ....................
            f..................f
            f..................f
            ....................
            f..................f
            ff.ff.ff.ff.ff.ff.ff
            `, screen2, 14 + selectedIndex * 20 - 2, item_top - 2)
    }
})
let item_top = 0
let selectedIndex = 0
let inventoryVisible = false
let item_name: string[] = []
let item: Image[] = []
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
animation.runImageAnimation(
Babypenguin,
[img`
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
    . . . . . . f . . f . f . . . . 
    `,img`
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
    . . . . f . f . . f . . . . . . 
    `],
500,
true
)
item = [
assets.tile`myTile29`,
assets.tile`myTile28`,
img`
    . . . . . 9 9 9 1 9 9 . . . . . 
    . . . . 9 9 9 9 1 9 9 9 . . . . 
    . . . 1 9 9 9 9 1 9 9 9 1 . . . 
    . . 9 1 9 9 9 9 1 9 9 9 1 9 . . 
    . 1 1 1 1 9 9 9 1 9 9 9 1 1 1 . 
    . 9 9 1 1 9 9 9 1 9 9 1 1 9 9 . 
    . 9 9 1 9 1 9 9 1 1 1 9 1 9 9 . 
    . 9 9 1 9 9 1 1 1 9 9 9 1 9 9 . 
    . 9 9 1 9 9 9 9 1 9 9 9 1 9 9 . 
    . 9 9 1 9 9 9 9 1 9 9 9 1 9 9 . 
    . . 9 1 9 9 9 9 1 9 9 9 1 9 . . 
    . . . 1 9 9 9 9 1 9 9 9 1 . . . 
    . . . . 9 9 9 9 1 9 9 9 . . . . 
    . . . . . 9 9 9 1 9 9 . . . . . 
    . . . . . . 9 9 1 9 . . . . . . 
    . . . . . . . 9 1 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 1 . . . . . 
    . . . 5 5 5 5 f 5 5 5 1 . . . . 
    . . 5 5 5 5 f f f 5 5 5 1 . . . 
    . . 5 5 5 f 5 f 5 5 5 5 1 . . . 
    . . 5 5 5 5 f f 5 5 5 5 1 . . . 
    . . 5 5 5 5 5 f f 5 5 5 1 . . . 
    . . 5 5 5 f f f 5 5 5 5 1 . . . 
    . . 5 5 5 5 5 f 5 5 5 5 1 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 1 . . . 
    . . . 5 5 5 5 5 5 5 5 1 . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . 9 . . . . . . . . . . . . . . 
    6 9 9 . . . . . . . . . . . . . 
    6 9 9 . e e e . . . . . . . . . 
    6 6 9 . f . e e . . . . . . . . 
    . 2 . . f . . e e e . . . . . . 
    . 2 . . f . . . . e e . . . . . 
    . 2 . . f . . . . . e e . . . . 
    . 2 . . f . . . . . . e . . . . 
    . 2 . . f . . . . . . e . . . . 
    . 2 . . f . . . . . e e . . . . 
    . 2 . . f . . . . e e . . . . . 
    . 2 . . f . . e e e . . . . . . 
    . 2 . . f . e e . . . . . . . . 
    . 2 . . e e e . . . . . . . . . 
    . 2 . . . . . . . . . . . . . . 
    . 2 . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 5 . . 1 
    . . . . . . . . . . . 5 5 . 1 1 
    . 2 2 2 2 2 2 2 2 2 2 5 5 1 1 1 
    d 2 2 2 2 2 2 2 2 2 2 5 5 1 1 1 
    . 2 2 2 2 2 2 2 2 2 2 5 5 1 1 1 
    . . . . . . . . . . . 5 5 . 1 1 
    . . . . . . . . . . . . 5 . . 1 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
]
item_name = [
"key",
"hint",
"diamond",
"coin",
"bow and arrow",
"torch"
]
