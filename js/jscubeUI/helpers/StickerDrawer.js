// ------------- --------- --------------------------
// ------------- draw stickers ----------------------
// ------------- --------- --------------------------


/**
 * Provide methods for drawing stickers (up, front, right)
 * @author: LucaGoubelle
 */
class StickerDrawer {
    constructor(){
        this.hmap = {
            "white": '#ffffff',
            "blue": '#0000ff',
            "green": '#00ff00',
            "red": '#ff0000',
            "orange": '#ff9600',
            "yellow": '#ffff00'
        };
    }

    drawFrontSticker(canvas, elem, x,y, size){
        let points = [
            [x,y], 
            [x+size,y], 
            [x+size,y+size], 
            [x,y+size]
        ];
        drawPolygon(canvas, points, this.hmap[elem]);
    }

    drawUpSticker(canvas, elem, x,y, size){
        let sizeDepth = size / 2;
        let points = [
            [x,y], 
            [x+size,y], 
            [x+size-sizeDepth,y+sizeDepth], 
            [x-sizeDepth,y+sizeDepth]
        ];
        drawPolygon(canvas, points, this.hmap[elem]);
    }

    drawRightSticker(canvas, elem, x,y, size){
        let sizeDepth = size / 2;
        let points = [
            [x,y], 
            [x+sizeDepth,y-sizeDepth], 
            [x+sizeDepth,y+sizeDepth], 
            [x,y+size]
        ];
        drawPolygon(canvas, points, this.hmap[elem]);
    }
}
