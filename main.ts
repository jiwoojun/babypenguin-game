spriteutils.createRenderable(99, function (screen2) {
    screen2.fillRect(2, 98, 20, 20, 8)
    screen2.drawRect(2, 98, 20, 20, 3)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    blocks = [sprites.create(img`
        . . . f f f f f f . . . . . . . 
        . . . f 7 7 7 7 f . . . . . . . 
        f f f f 7 7 7 7 f f f . . . . . 
        f 7 7 7 7 7 7 7 7 7 f . . . . . 
        f 7 7 7 7 7 7 7 7 7 f f f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        f 7 7 7 f 7 7 7 f 7 7 7 f f f f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 f 7 7 7 f 7 7 7 f f f f 
        f 7 7 7 f 7 7 7 f 7 7 7 f . . . 
        f 7 7 7 f f f f f 7 7 7 f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f f . . 
        f f f f f 7 7 7 7 7 7 7 7 f . . 
        . . . . f f f f f f f f f f . . 
        `, SpriteKind.Player), sprites.create(img`
        . . . . f f f f f f f f f f . . 
        f f f f f 7 7 7 7 7 7 7 7 f . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f f . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        f 7 7 7 f 7 7 7 f 7 7 7 f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        f 7 7 7 f 7 7 7 f 7 7 7 f f f f 
        f 7 7 7 f 7 7 7 f 7 7 7 7 7 7 f 
        f 7 7 7 f f f f f 7 7 7 f f f f 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        f 7 7 7 7 7 7 7 7 7 f f f . . . 
        f 7 7 7 7 7 7 7 7 7 f . . . . . 
        f f f f 7 7 7 7 f f f . . . . . 
        . . . f 7 7 7 7 f . . . . . . . 
        . . . f f f f f f . . . . . . . 
        `, SpriteKind.Player), sprites.create(img`
        . f f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f f f 
        f f 7 7 7 f 7 7 7 f 7 7 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 7 f 7 7 7 f 7 7 7 7 7 f 
        f 7 7 7 7 f 7 7 7 f 7 7 7 7 7 f 
        f 7 7 7 7 f f f f f 7 7 7 f f f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
        f 7 7 7 7 7 7 7 7 7 7 f f f . . 
        f 7 7 7 7 7 7 7 7 7 7 f . . . . 
        f 7 f f f f f f 7 f f f . . . . 
        f f f . . . . f 7 f . . . . . . 
        . . . . . . . f 7 f . . . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Player), sprites.create(img`
        . . . . . . f f f . . . . . . . 
        . . . . . . f 7 f . . . . . . . 
        . . . . . . f 7 f . . . . f f f 
        . . . . f f f 7 f f f f f f 7 f 
        . . . . f 7 7 7 7 7 7 7 7 7 7 f 
        . . f f f 7 7 7 7 7 7 7 7 7 7 f 
        . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f f f 7 7 7 f 7 7 7 f 7 7 7 7 f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 7 7 7 f 7 7 7 f 7 7 7 7 f 
        f 7 7 7 7 7 f 7 7 7 f 7 7 7 7 f 
        f 7 7 7 7 7 f f f f f 7 7 7 f f 
        f f f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f f f f f f f f f f f f . 
        `, SpriteKind.Player)]
    controller.moveSprite(blocks[0])
    controller.moveSprite(blocks[1])
    controller.moveSprite(blocks[2])
    controller.moveSprite(blocks[3])
})
function makeItem (image2: Image, name: string, amount: number, dontAddToInventory: boolean) {
    newItem = sprites.create(image2, SpriteKind.Player)
    newItem.setFlag(SpriteFlag.Ghost, true)
    newItem.setFlag(SpriteFlag.Invisible, true)
    sprites.setDataString(newItem, "name", name)
    sprites.setDataNumber(newItem, "amount", amount)
    if (!(dontAddToInventory)) {
        blocks.push(newItem)
    }
    return newItem
}
let newItem: Sprite = null
let blocks: Sprite[] = []
tiles.setTilemap(tilemap`level8`)
makeItem(img`
    . . . . f f f f f f f f f f . . 
    f f f f f 7 7 7 7 7 7 7 7 f . . 
    f 7 7 7 7 7 7 7 7 7 7 7 f f . . 
    f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
    f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
    f 7 7 7 f 7 7 7 f 7 7 7 f . . . 
    f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
    f 7 7 7 f 7 7 7 f 7 7 7 f f f f 
    f 7 7 7 f 7 7 7 f 7 7 7 7 7 7 f 
    f 7 7 7 f f f f f 7 7 7 f f f f 
    f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
    f 7 7 7 7 7 7 7 7 7 f f f . . . 
    f 7 7 7 7 7 7 7 7 7 f . . . . . 
    f f f f 7 7 7 7 f f f . . . . . 
    . . . f 7 7 7 7 f . . . . . . . 
    . . . f f f f f f . . . . . . . 
    `, "abc", 1, true)
