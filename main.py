@namespace
class SpriteKind:
    tools = SpriteKind.create()
    NPC = SpriteKind.create()
# items:
# 
# key,
# 
# hint,
# 
# diamond,
# 
# coin,
# 
# bow and arrow,
# 
# torch.

def on_b_pressed():
    global BHandTool
    if inventoryVisible:
        BHandTool = item[selectedIndex]
    elif not (keyPadVisible):
        if sprites.read_data_string(BHandTool, "name") == "hint":
            story.sprite_say_text(Babypenguin, "The secret pin number for the door is a177ji")
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_create_renderable(screen2):
    if Bhandtoolon:
        screen2.fill_rect(2, 98, 20, 20, 8)
        screen2.draw_rect(2, 98, 20, 20, 3)
        if BHandTool:
            spriteutils.draw_transparent_image(BHandTool.image, screen2, 4, 100)
spriteutils.create_renderable(99, on_create_renderable)

def closeInventory():
    global inventoryVisible
    inventoryVisible = False
    controller.move_sprite(Babypenguin)

def on_a_pressed():
    global existItem
    if Babypenguin.tile_kind_at(TileDirection.LEFT, assets.tile("""
        myTile32
    """)):
        tiles.set_tile_at(tiles.get_tile_location(1, 14),
            assets.tile("""
                myTile28
            """))
    elif Babypenguin.tile_kind_at(TileDirection.LEFT, assets.tile("""
        myTile28
    """)):
        story.sprite_say_text(Babypenguin,
            "\"Key is hidden under a secret tile 5 steps down and 5 step right from washbasin\"")
    elif Babypenguin.tile_kind_at(TileDirection.CENTER, assets.tile("""
        myTile26
    """)):
        for value in item:
            if sprites.read_data_string(value, "name") == "key":
                existItem = True
        if not (existItem):
            music.magic_wand.play()
            makeItem(assets.tile("""
                myTile29
            """), "key", 1, existItem)
            story.sprite_say_text(Babypenguin, "Hey! I found a key*")
    elif Babypenguin.tile_kind_at(TileDirection.BOTTOM, assets.tile("""
        myTile30
    """)):
        if sprites.read_data_string(BHandTool, "name") == "key":
            for value2 in item:
                if sprites.read_data_string(value2, "name") == "hint":
                    existItem = True
            if not (existItem):
                music.magic_wand.play()
                makeItem(assets.tile("""
                    myTile28
                """), "hint", 1, False)
                story.sprite_say_text(Babypenguin, "I found the letter!")
        else:
            story.sprite_say_text(Babypenguin, "Where is the key??")
    elif Babypenguin.tile_kind_at(TileDirection.LEFT, assets.tile("""
        myTile33
    """)):
        if keyPadVisible:
            closeKeyPad()
        else:
            openKeyPad()
    elif Babypenguin.tile_kind_at(TileDirection.CENTER, assets.tile("""
        myTile5
    """)):
        ghostAppearTime()
    elif Babypenguin.tile_kind_at(TileDirection.LEFT, assets.tile("""
        myTile33
    """)):
        pass
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def makeItem(image2: Image, name: str, amount: number, dontAddToInventory: bool):
    global newItem
    newItem = sprites.create(image2, SpriteKind.tools)
    newItem.set_flag(SpriteFlag.GHOST, True)
    newItem.set_flag(SpriteFlag.INVISIBLE, True)
    sprites.set_data_string(newItem, "name", name)
    sprites.set_data_number(newItem, "amount", amount)
    if not (dontAddToInventory):
        item.append(newItem)
    return newItem
def makingItems():
    global item, existItem
    item = []
    existItem = False
    makeItem(img("""
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
        """),
        "diamond",
        1,
        False)
    makeItem(img("""
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
        """),
        "coin",
        1,
        False)
    makeItem(img("""
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
        """),
        "bow and arrow",
        1,
        False)
    makeItem(img("""
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
        """),
        "torch",
        1,
        False)
def intro():
    global Bhandtoolon
    Bhandtoolon = False
    game.set_dialog_cursor(img("""
        111.........111..1...1.1111...11.........11................1
                1..1........1..1.1...1.1...1.1..1.......1..1...............1
                111...111...111..1...1.1...1.1..1.......1..1.......1.......1
                1..1.1...1..1..1..111..1111...11..1......11..1...1...1.....1
                1..1.1...1..1..1.....1.1.....1.....111.....1.1...1.1..111..1
                1..1.1...1..1..1.....1.1.....1....1...1....1.1...1.1.1...1.1
                1..1..111.1.1..1.....1.1......111.1...1....1..111..1.1...1..
                111.........111..1111..1..........1...1.111..1.....1.1...1.1
    """))
    game.splash("where am I?")
    game.splash("oh no!")
    game.splash("I'm locked in this room!")
    game.splash("SOMEBODY HELP ME!!!!")
    game.splash("I must do this!")

def on_left_pressed():
    global selectedIndex
    selectedIndex = max(selectedIndex - 1, 0)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def closeKeyPad():
    global keyPadVisible
    keyPadVisible = False
    controller.move_sprite(Babypenguin)
def makePlayer():
    global Bhandtoolon, Babypenguin
    Bhandtoolon = True
    Babypenguin = sprites.create(img("""
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
        """),
        SpriteKind.player)
    controller.move_sprite(Babypenguin)
    Babypenguin.set_stay_in_screen(True)
    scene.camera_follow_sprite(Babypenguin)
    tiles.set_tilemap(tilemap("""
        level1
    """))
    tiles.place_on_random_tile(Babypenguin, assets.tile("""
        myTile34
    """))
    tiles.cover_all_tiles(assets.tile("""
            myTile34
        """),
        assets.tile("""
            myTile5
        """))
    animation.run_image_animation(Babypenguin,
        [img("""
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
            """),
            img("""
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
            """)],
        500,
        True)

def on_right_pressed():
    global selectedIndex
    selectedIndex = min(selectedIndex + 1, len(item) - 1)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_menu_pressed():
    if inventoryVisible:
        closeInventory()
    else:
        openInventory()
controller.menu.on_event(ControllerButtonEvent.PRESSED, on_menu_pressed)

def on_create_renderable2(screen2):
    global item_top, keyPadNumber
    if inventoryVisible:
        screen2.fill_rect(10, 10, 140, 100, 11)
        screen2.draw_rect(10, 10, 140, 100, 15)
        images.print(screen2, "INVENTORY", 14, 14, 15)
        images.print(screen2,
            sprites.read_data_string(item[selectedIndex], "name"),
            70,
            14,
            1)
        screen2.fill_rect(14, 24, 132, 1, 15)
        item_top = 28
        index = 0
        while index <= len(item) - 1:
            spriteutils.draw_transparent_image(item[index].image, screen2, 14 + index * 20, item_top)
            index += 1
        spriteutils.draw_transparent_image(img("""
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
            """),
            screen2,
            14 + selectedIndex * 20 - 2,
            item_top - 2)
    if keyPadVisible:
        keyPadNumber = game.ask_for_string("crack this code...it might be hard!")
        if keyPadVisible:
            closeKeyPad()
        else:
            openKeyPad()
        if keyPadNumber == "a177ji":
            game.splash("you did it! you unlocked the door! congratulations!")
            game.over(True)
        if not (keyPadNumber == "a177ji"):
            game.splash("nice try! so next time, try hard enough to unlock the door!")
            game.over(False)
spriteutils.create_renderable(100, on_create_renderable2)

def ghostAppearTime():
    global ghost
    color.start_fade(color.original_palette, color.gray_scale, 500)
    
    def on_queue_story_part():
        story.sprite_say_text(Babypenguin, "oh, is this a dream or not?")
    story.queue_story_part(on_queue_story_part)
    
    pause(1000)
    ghost = sprites.create(img("""
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
        """),
        SpriteKind.NPC)
    tiles.place_on_random_tile(ghost, assets.tile("""
        myTile26
    """))
    
    def on_queue_story_part2():
        story.sprite_say_text(ghost, "I am your NPC.")
    story.queue_story_part(on_queue_story_part2)
    
    
    def on_queue_story_part3():
        story.sprite_say_text(ghost, "I only appear at night.")
    story.queue_story_part(on_queue_story_part3)
    
    
    def on_queue_story_part4():
        story.sprite_say_text(ghost, "Why I'm here is...")
    story.queue_story_part(on_queue_story_part4)
    
    
    def on_queue_story_part5():
        story.sprite_say_text(ghost, "when you give me a coin,")
    story.queue_story_part(on_queue_story_part5)
    
    
    def on_queue_story_part6():
        story.sprite_say_text(ghost, "then I will give you a item")
    story.queue_story_part(on_queue_story_part6)
    
    
    def on_queue_story_part7():
        story.sprite_say_text(ghost, "which is a bow and arrow.")
    story.queue_story_part(on_queue_story_part7)
    
    pause(20000)
    color.start_fade(color.gray_scale, color.original_palette)
    ghost.destroy()
def openInventory():
    global inventoryVisible, selectedIndex
    inventoryVisible = True
    controller.move_sprite(Babypenguin, 0, 0)
    selectedIndex = 0
def openKeyPad():
    global keyPadVisible, selectedKey
    keyPadVisible = True
    controller.move_sprite(Babypenguin, 0, 0)
    selectedKey = 0
selectedKey = 0
ghost: Sprite = None
keyPadNumber = ""
newItem: Sprite = None
existItem = False
Bhandtoolon = False
Babypenguin: Sprite = None
keyPadVisible = False
inventoryVisible = False
item_top = 0
selectedIndex = 0
item: List[Sprite] = []
BHandTool: Sprite = None
intro()
makePlayer()
makingItems()

def on_update_interval():
    pass
game.on_update_interval(500, on_update_interval)
