namespace SpriteKind {
    export const accessary = SpriteKind.create()
}
function makeAccessary (image2: Image, name: string) {
    newItem = sprites.create(image2, SpriteKind.accessary)
    newItem.setFlag(SpriteFlag.Invisible, true)
    sprites.setDataString(newItem, "name", name)
    accessaries.push(newItem)
}
spriteutils.createRenderable(0, function (screen2) {
    screen2.fillRect(72, 5, 85, 110, 10)
    screen2.drawRect(72, 5, 85, 110, 15)
    index = 0
    item_top = 7
    while (index <= accessaries.length - 1) {
        spriteutils.drawTransparentImage(accessaries[index].image, screen2, 73 + index * 20, item_top)
        index += 1
    }
})
let item_top = 0
let index = 0
let accessaries: Sprite[] = []
let newItem: Sprite = null
scene.setBackgroundColor(14)
let soyeon = sprites.create(img`
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    .............................fffffffffff........................................
    ...........................fffffffffffffff..f...................................
    .....................ffffffffdddddddddddfff.f...................................
    ..................fffffffffddddddddddddddfffff..................................
    ................ffff.ffffddddddddddddddddddfffff................................
    ................f.f.fffddddddddddddddddddddddffffffffff.........................
    ...............f.ffffdddddddddddddddddddddddddffff.....ff.......................
    ...............f.fffdddddddddddddddddddddddddddffff......f......................
    ...............ffffddddddddddddddddddddddddddddfffffff....f.....................
    ..............ffffddddddddddddddddddddddddddddddf.ff..ff..ff....................
    ............ff.ffddddddddddddddddddddfffffdddddddffff..f...f....................
    ...........f.fffddddfffffddddddddddddfef1fddddddddffff..ff.f....................
    ..........f.ffffddddf1fefddddddddddddfefffdddddddddf.ff...ff....................
    ..........f.fffdddddffeefddddddddddddfeeffddddddddddffff...f....................
    ..........fffffddddffeeefddddddddddddfffffddddddddddf.fff..fff..................
    ..........ffffdddddffffffddddddddddddddddddddddddddddf.fff..ff..................
    ..........ffffdddddddddddddddddddddddddddddddddddddddf..ffffff..................
    ..........ff.fdddddddddddddddddddddddddddddddddddddddf..f.ffffff................
    .........fffffddddddddddddddddddfdffdddddddddddddddddf..fffffffff...............
    ........ff.fffddddddddddddddddddfdfddddddddddddddddddf.......fffff..............
    .......fff.f.fddddddddddddddddddfdfddddddddddddddddddf.........ff...............
    ...fffffff.f.fdddddddddddddddddfddfddddddddddddddddddf.........f.f..............
    .......ff.ff.fddddddddfffdddddffddfdddddddddfffddddddf..........f.ff............
    ...ffff.ff...fddddddddf2ffdddffddddfddddddddffdddddddf..........f..ff...........
    ...fffff.....fddddddddff2ffddddddddffdddddddffdddddddf..........ffff............
    ......ff.....fdddddddddf22ffddddddddddddddddffdddddddf..........................
    .............fdddddddddf222fffddddddddddddddffdddddddf..........................
    .............fdddddddddff2222fffdddddddddddfffdddddddf..........................
    ..............fdddddddddff22222fffdddddddff2ffddddddf...........................
    ..............fddddddddddffff22222ffffdff222fdddddddf........ff..f..............
    ......ff.......fddddddddddddfff222222fff222ffddddddf......fffff.ff..............
    .....ffffff....fddddddddddddddfff2222222222fdddddddf....fffdfdffddf.............
    .....fdffdff....fddddddddddddddddfffffffffffddddddf.....fdfffdfddff.............
    ....ffdfdffff...fdddddddddddddddddddddddddddddddddf.....fdfffffddf..............
    ...fdfdfffddf....fdddddddddddddddddddddddddddddddf......fdffffddfff.............
    ...fdfdfffdfff....fdddddddddddddddddddddddddddddf.......fddddfddfdff............
    ...fdfdddfffdf.....fdddddddddddddddddddddddddddf........fddddddddddf............
    ..ffffdddddddf......fdddddddddddddddddddddddddf..........fffdddddddf............
    ..fdfdddddddff.......ffdddddddddddddddddddddff............fdfdddffff............
    ..fdfddddffff..........ffdddddddddddddddddff.............fdddffff...............
    ..fffdddfdf..............ffdddddddddddddff..............fddddff.................
    ...fddddfddf...............fffffffffffff................fddddf..................
    ....ffffdddf..............fdddddddddddddf..............fddddf...................
    .......fddddf.............fdddddddddddddf.............fddddf....................
    ........fddddf............fdddddddddddddf............fdddddf....................
    .........fddddf..........fdddddddddddddddf..........fdddddf.....................
    .........fddddf..........fdddddddddddddddf..........fddddf......................
    ..........fddddf.........fddddddddddddddddf........fdddddf......................
    ...........fddddf.......fdddddddddddddddddf.......fdddddf.......................
    ............fdddf.......fddddddddddddddddddf.....fdddddf........................
    .............fdddf......fddddddddddddddddddf....fddddddf........................
    .............fddddf....fddddddddddddddddddddf..fddddddf.........................
    ..............fddddf...fddddddddddddddddddddf..fdddddf..........................
    ...............fdddf..fddddddddddddddddddddddffddddddf..........................
    ................fdddf.fddddddddddddddddddddddfddddddf...........................
    .................fdddffdddddddddddddddddddddddfddddf............................
    .................fdddfddddddddddddddddddddddddfddddf............................
    ..................fddfdddddddddddddddddddddddddfddf.............................
    ...................fdfdddddddddddddddddddddddddfdf..............................
    ....................fddddddddddddddddddddddddddfdf..............................
    ....................fdddddddddddddddddddddddddddf...............................
    ....................fdddddddddddddddddddddddddddf...............................
    ...................fdddddddddddddddddddddddddddddf..............................
    ...................fdddddddddddddddddddddddddddddf..............................
    ...................fddddddddddddddddddddddddddddddf.............................
    ..................fdddddddddddddddddddddddddddddddf.............................
    ..................fddddddddddddddddddddddddddddddddf............................
    ..................fddddddddddddddddddddddddddddddddf............................
    .................fddddddddddddddddddddddddddddddddddf...........................
    .................fddddddddddddddddddddddddddddddddddf...........................
    ................fddddddddddddddddddddddddddddddddddddf..........................
    ................fddddddddddddddddddddddddddddddddddddf..........................
    ................fdddddddddddddddddddddddddddddddddddddf.........................
    ...............fddddddddddddddddddddddddddddddddddddddf.........................
    ...............fdddddddddddddddddddddddddddddddddddddddf........................
    ...............fdddddddddddddddddddfffffffffffffffffffff........................
    ..............fffffffffffffffffffff......fddf...................................
    .....................fdf..................fddf..................................
    .....................fdf..................fddf..................................
    .....................fdf...................fddf.................................
    ....................fdf....................fdddf................................
    ....................fdf.....................fddf................................
    ...................fdf.......................fddf...............................
    ...................fdf.......................fddf...............................
    ...................fdf........................fddf..............................
    ..................fdf.........................fddf..............................
    ..................fdf..........................fddf.............................
    ..................fdf..........................fddf.............................
    .................fdf............................fddf............................
    .................fdf............................fddf............................
    ................fddf.............................fddf...........................
    ................fdf..............................fdddf..........................
    ................fdf...............................fddf..........................
    ...............fdf.................................fddf.........................
    ...............fdf.................................fddf.........................
    ..............fddf..................................fdffffffff..................
    ..............fdf...................................ffffddddff..................
    ..............fdf....................................fddddddf...................
    ........fffffffdf....................................ffdddddf...................
    ........fdddddfff.....................................fffffff...................
    ........fddddddf................................................................
    ........fddddddf................................................................
    ........fffffddf................................................................
    ............ffff................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    `, SpriteKind.Player)
soyeon.setPosition(42, 57)
makeAccessary(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f . . . . . . . . . . . . f . 
    . . f . . . . . . . . . . f . . 
    . . . f . . . . . . . . f . . . 
    . . . . f . . . . . . f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, "necklaceG")
makeAccessary(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f . . . . . . . . . . . . f . 
    . . f . . . . . . . . . . f . . 
    . . . f . . . . . . . . f . . . 
    . . . . f . . . . . . f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, "necklaceY")
