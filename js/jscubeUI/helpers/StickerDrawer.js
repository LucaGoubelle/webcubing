// ------------- --------- --------------------------
// ------------- draw stickers ----------------------
// ------------- --------- --------------------------

class StickerDrawer {
    drawFrontSticker(canvas, elem, x,y, size){
        let points = [
            [x,y], 
            [x+size,y], 
            [x+size,y+size], 
            [x,y+size]
        ];
        drawPolygon(canvas, points, elem);
    }

    drawUpSticker(canvas, elem, x,y, size){
        let sizeDepth = size / 2;
        let points = [
            [x,y], 
            [x+size,y], 
            [x+size-sizeDepth,y+sizeDepth], 
            [x-sizeDepth,y+sizeDepth]
        ];
        drawPolygon(canvas, points, elem);
    }

    drawRightSticker(canvas, elem, x,y, size){
        let sizeDepth = size / 2;
        let points = [
            [x,y], 
            [x+sizeDepth,y-sizeDepth], 
            [x+sizeDepth,y+sizeDepth], 
            [x,y+size]
        ];
        drawPolygon(canvas, points, elem);
    }
}
