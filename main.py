def on_create_renderable(screen2):
    screen2.fill_rect(2, 98, 20, 20, 8)
    screen2.draw_rect(2, 98, 20, 20, 3)
spriteutils.create_renderable(99, on_create_renderable)

def makeItem(image2: Image, name: str, amount: number, dontAddToInventory: bool):
    global blocks
    newItem = sprites.create(image2, SpriteKind.player)
    newItem.set_flag(SpriteFlag.GHOST, True)
    newItem.set_flag(SpriteFlag.INVISIBLE, True)
    sprites.set_data_string(newItem, "name", name)
    sprites.set_data_number(newItem, "amount", amount)
    if not (dontAddToInventory):
        blocks.append(newItem)
    return newItem

def on_a_pressed():
    global blocks
    blocks = [sprites.create(img("""
                . . . f f f f f f . . . . . . . 
                        . . . f 7 7 7 7 f . . . . . . . 
                        f f f f 7 7 7 7 f f f . . . . . 
                        f 7 7 7 7 7 7 7 7 7 f . . . . . 
                        f 7 7 7 7 7 7 7 7 7 f f f . . . 
                        f 7 7 f 7 7 7 f 7 7 7 7 f . . . 
                        f 7 7 7 7 7 7 7 7 7 7 7 f f f f 
                        f 7 7 f 7 7 7 f 7 7 7 7 7 7 7 f 
                        f 7 7 f 7 7 7 f 7 7 7 7 f f f f 
                        f 7 7 f f f f f 7 7 7 7 f . . . 
                        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
                        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
                        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
                        f 7 7 7 7 7 7 7 7 7 7 7 f f . . 
                        f f f f f 7 7 7 7 7 7 7 7 f . . 
                        . . . . f f f f f f f f f f . .
            """),
            SpriteKind.player),
        sprites.create(img("""
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
            """),
            SpriteKind.player),
        sprites.create(img("""
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
            """),
            SpriteKind.player),
        sprites.create(img("""
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
            """),
            SpriteKind.player)]
    controller.move_sprite(blocks[0])
    controller.move_sprite(blocks[1])
    controller.move_sprite(blocks[2])
    controller.move_sprite(blocks[3])
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

blocks: List[Sprite] = []
tiles.set_tilemap(tilemap("""
    level8
"""))