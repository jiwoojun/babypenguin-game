namespace SpriteKind {
    export const tools = SpriteKind.create()
    export const NPC = SpriteKind.create()
}
// items:
// 
// key,
// 
// hint,
// 
// diamond,
// 
// coin,
// 
// bow and arrow,
// 
// torch.
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inventoryVisible) {
        BHandTool = item[selectedIndex]
    } else if (!(keyPadVisible)) {
        if (sprites.readDataString(BHandTool, "name") == "hint") {
            story.spriteSayText(Babypenguin, "The secret pin number for the door is a177ji")
        }
    }
})
spriteutils.createRenderable(99, function (screen2) {
    if (Bhandtoolon) {
        screen2.fillRect(2, 98, 20, 20, 8)
        screen2.drawRect(2, 98, 20, 20, 3)
        if (BHandTool) {
            spriteutils.drawTransparentImage(BHandTool.image, screen2, 4, 100)
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
        for (let value of item) {
            if (sprites.readDataString(value, "name") == "key") {
                existItem = true
            }
        }
        if (!(existItem)) {
            music.magicWand.play()
            makeItem(assets.tile`myTile29`, "key", 1, existItem)
            story.spriteSayText(Babypenguin, "Hey! I found a key*")
        }
    } else if (Babypenguin.tileKindAt(TileDirection.Bottom, assets.tile`myTile30`)) {
        if (sprites.readDataString(BHandTool, "name") == "key") {
            for (let value2 of item) {
                if (sprites.readDataString(value2, "name") == "hint") {
                    existItem = true
                }
            }
            if (!(existItem)) {
                music.magicWand.play()
                makeItem(assets.tile`myTile28`, "hint", 1, false)
                story.spriteSayText(Babypenguin, "I found the letter!")
            }
        } else {
            story.spriteSayText(Babypenguin, "Where is the key??")
        }
    } else if (Babypenguin.tileKindAt(TileDirection.Left, assets.tile`myTile33`)) {
        if (keyPadVisible) {
            closeKeyPad()
        } else {
            openKeyPad()
        }
    } else if (Babypenguin.tileKindAt(TileDirection.Center, assets.tile`myTile5`)) {
        ghostAppearTime()
    } else if (Babypenguin.tileKindAt(TileDirection.Center, assets.tile`myTile50`)) {
        if (!(existItem)) {
            music.magicWand.play()
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
            story.spriteSayText(Babypenguin, "I found the torch! This might light up the dark room!")
            tiles.replaceAllTiles(assets.tile`myTile50`, assets.tile`myTile1`)
        }
    }
    if (sprites.readDataString(BHandTool, "name") == "torch") {
        tiles.coverAllTiles(assets.tile`myTile41`, assets.tile`myTile46`)
        tiles.coverAllTiles(assets.tile`myTile44`, assets.tile`myTile47`)
        tiles.coverAllTiles(assets.tile`myTile43`, assets.tile`myTile45`)
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
function makingItems () {
    item = []
    existItem = false
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
}
function intro () {
    Bhandtoolon = false
    game.setDialogCursor(img`
        111.........111..1...1.1111...11.........11................1
        1..1........1..1.1...1.1...1.1..1.......1..1...............1
        111...111...111..1...1.1...1.1..1.......1..1.......1.......1
        1..1.1...1..1..1..111..1111...11..1......11..1...1...1.....1
        1..1.1...1..1..1.....1.1.....1.....111.....1.1...1.1..111..1
        1..1.1...1..1..1.....1.1.....1....1...1....1.1...1.1.1...1.1
        1..1..111.1.1..1.....1.1......111.1...1....1..111..1.1...1..
        111.........111..1111..1..........1...1.111..1.....1.1...1.1
        `)
    game.splash("where am I?")
    game.splash("oh no!")
    game.splash("I'm locked in this room!")
    game.splash("SOMEBODY HELP ME!!!!")
    game.splash("I must do this!")
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    selectedIndex = Math.max(selectedIndex - 1, 0)
})
function closeKeyPad () {
    keyPadVisible = false
    controller.moveSprite(Babypenguin)
}
function makePlayer () {
    Bhandtoolon = true
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
    Babypenguin.setStayInScreen(true)
    scene.cameraFollowSprite(Babypenguin)
    tiles.setTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(Babypenguin, assets.tile`myTile34`)
    tiles.coverAllTiles(assets.tile`myTile34`, assets.tile`myTile5`)
    tiles.coverAllTiles(assets.tile`myTile41`, assets.tile`myTile39`)
    tiles.coverAllTiles(assets.tile`myTile44`, assets.tile`myTile39`)
    tiles.coverAllTiles(assets.tile`myTile43`, assets.tile`myTile39`)
    tiles.coverAllTiles(assets.tile`myTile42`, assets.tile`myTile50`)
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
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    selectedIndex = Math.min(selectedIndex + 1, item.length - 1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite, location) {
    game.splash("Sorry. You fall into lava")
    game.reset()
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inventoryVisible) {
        closeInventory()
    } else {
        openInventory()
    }
})
spriteutils.createRenderable(100, function (screen2) {
    let index: number;
if (inventoryVisible) {
        screen2.fillRect(10, 10, 140, 100, 11)
        screen2.drawRect(10, 10, 140, 100, 15)
        images.print(screen2, "INVENTORY", 14, 14, 15)
images.print(screen2, sprites.readDataString(item[selectedIndex], "name"), 70, 14, 1)
screen2.fillRect(14, 24, 132, 1, 15)
        item_top = 28
        index = 0
        while (index <= item.length - 1) {
            spriteutils.drawTransparentImage(item[index].image, screen2, 14 + index * 20, item_top)
index += 1
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
        keyPadNumber = game.askForString("crack this code...it might be hard!")
        if (keyPadVisible) {
            closeKeyPad()
        } else {
            openKeyPad()
        }
        if (keyPadNumber == "a177ji") {
            game.splash("you did it! you unlocked the door! congratulations!")
            game.over(true)
        }
        if (!(keyPadNumber == "a177ji")) {
            game.splash("nice try! so next time, try hard enough to unlock the door!")
        }
    }
})
function ghostAppearTime () {
    color.startFade(color.originalPalette, color.GrayScale, 500)
    story.queueStoryPart(function () {
        story.spriteSayText(Babypenguin, "oh, is this a dream or not?")
    })
    pause(1000)
    ghost = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 f f f 1 1 1 f f f 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 f f f f 1 1 1 1 1 . 
        . 1 1 1 1 f f f f f f 1 1 1 1 . 
        . 1 1 1 1 f f f f f f 1 1 1 1 . 
        . 1 1 1 1 f f f f f f 1 1 1 1 . 
        . 1 1 1 1 1 f f f f 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 . 1 . 1 . 1 . 1 . 1 . . 1 . 
        . 1 . 1 . 1 . 1 . 1 . 1 . . 1 . 
        `, SpriteKind.NPC)
    tiles.placeOnRandomTile(ghost, assets.tile`myTile26`)
    story.queueStoryPart(function () {
        story.spriteSayText(ghost, "I am your NPC.")
    })
    story.queueStoryPart(function () {
        story.spriteSayText(ghost, "I only appear at night.")
    })
    story.queueStoryPart(function () {
        story.spriteSayText(ghost, "Why I'm here is...")
    })
    story.queueStoryPart(function () {
        story.spriteSayText(ghost, "when you give me a coin,")
    })
    story.queueStoryPart(function () {
        story.spriteSayText(ghost, "then I will give you a item")
    })
    story.queueStoryPart(function () {
        story.spriteSayText(ghost, "which is a bow and arrow.")
    })
    pause(20000)
    color.startFade(color.GrayScale, color.originalPalette)
    ghost.destroy()
}
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile41`, function (sprite, location) {
    game.splash("Sorry. You fall into lava")
    game.reset()
})
let selectedKey = 0
let ghost: Sprite = null
let keyPadNumber = ""
let newItem: Sprite = null
let existItem = false
let Bhandtoolon = false
let Babypenguin: Sprite = null
let keyPadVisible = false
let inventoryVisible = false
let item_top = 0
let selectedIndex = 0
let item : Sprite[] = []
let BHandTool : Sprite = null
intro()
makePlayer()
makingItems()
info.startCountdown(300)
