namespace SpriteKind {
    export const tools = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inventoryVisible) {
        BHandTool = item[selectedIndex]
    } else {
        if (sprites.readDataString(BHandTool, "name") == "hint") {
            story.spriteSayText(Babypenguin, "The secret pin number for the door is 1 7 2")
        }
    }
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
    } else if (Babypenguin.tileKindAt(TileDirection.Center, assets.tile`myTile26`)) {
        music.magicWand.play()
        makeItem(assets.tile`myTile29`, "key", 1, false)
        story.spriteSayText(Babypenguin, "Hey! I found a key*")
    } else if (Babypenguin.tileKindAt(TileDirection.Bottom, assets.tile`myTile30`)) {
        if (sprites.readDataString(BHandTool, "name") == "key") {
            music.magicWand.play()
            story.spriteSayText(Babypenguin, "I found the letter!")
            makeItem(assets.tile`myTile28`, "hint", 1, false)
        } else {
            story.spriteSayText(Babypenguin, "Where is the key??")
        }
    } else if (Babypenguin.tileKindAt(TileDirection.Left, assets.tile`myTile33`)) {
        if (keyPadVisible) {
            closeKeyPad()
        } else {
            openKeyPad()
        }
    }
})
function makeItem (image2: Image, name: string, amount: number, dontAddToInventory: boolean) {
    newItem = sprites.create(image2, SpriteKind.tools)
    newItem.setFlag(SpriteFlag.Ghost, true)
    newItem.setFlag(SpriteFlag.Invisible, true)
    sprites.setDataString(newItem, "name", name)
    sprites.setDataNumber(newItem, "amount", amount)
    if (!(dontAddToInventory)) {
        item.push(newItem)
    }
    return newItem
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    selectedIndex = Math.max(selectedIndex - 1, 0)
})
spriteutils.createRenderable(99, function (screen2) {
    screen2.fillRect(2, 98, 20, 20, 8)
    screen2.drawRect(2, 98, 20, 20, 3)
    if (BHandTool) {
        spriteutils.drawTransparentImage(BHandTool.image, screen2, 4, 100)
    }
})
function closeKeyPad () {
    keyPadVisible = false
    controller.moveSprite(Babypenguin)
}
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
function openKeyPad () {
    keyPadVisible = true
    controller.moveSprite(Babypenguin, 0, 0)
    selectedKey = 0
}
spriteutils.createRenderable(100, function (screen2) {
    if (inventoryVisible) {
        screen2.fillRect(10, 10, 140, 100, 11)
        screen2.drawRect(10, 10, 140, 100, 15)
        images.print(screen2, "INVENTORY", 14, 14, 15)
        images.print(screen2, sprites.readDataString(item[selectedIndex], "name"), 70, 14, 1)
        screen2.fillRect(14, 24, 132, 1, 15)
        item_top = 28
        for (let index = 0; index <= item.length - 1; index++) {
            spriteutils.drawTransparentImage(item[index].image, screen2, 14 + index * 20, item_top)
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
    if (keyPadVisible) {
        let index = 0
        screen2.fillRect(10, 10, 140, 100, 9)
        screen2.drawRect(10, 10, 140, 100, 12)
        images.print(screen2, "KeyPad", 14, 14, 15)
        spriteutils.drawTransparentImage(img`
            77777777777777777777
            77777777777777777777
            77777777777777777777
            777..............777
            777..............777
            777..............777
            777..............777
            777..............777
            777..............777
            777..............777
            777..............777
            777..............777
            777..............777
            777..............777
            777..............777
            777..............777
            777..............777
            77777777777777777777
            77777777777777777777
            77777777777777777777
            `, screen2, 14 + selectedIndex * 20 - 2, item_top - 2)
        spriteutils.drawTransparentImage(item[index].image, screen2, 14 + index * 20, item_top)
    }
})
let item_top = 0
let selectedKey = 0
let newItem: Sprite = null
let keyPadVisible = false
let selectedIndex = 0
let BHandTool: Sprite = null
let inventoryVisible = false
let item: Sprite[] = []
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
tiles.placeOnRandomTile(Babypenguin, assets.tile`myTile34`)
tiles.coverAllTiles(assets.tile`myTile34`, assets.tile`myTile5`)
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
item = []
makeItem(img`
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
    `, "diamond", 1, false)
makeItem(img`
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
    `, "coin", 1, false)
makeItem(img`
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
    `, "bow and arrow", 1, false)
makeItem(img`
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
    `, "torch", 1, false)
