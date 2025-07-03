
class Cube3x3Drawer extends CubeDrawer {
    constructor(){
        super();
    }

    draw(canvas, cube, x=100,y=150, size=45){
        let offset = 2; 
        let sizeDepth = size / 2;

        this._drawFront(canvas, cube.front, x, y, size,offset);
        this._drawUp(canvas, cube.up, x, y, size, sizeDepth, offset);
        this._drawRight(canvas, cube.right, x, y, size, sizeDepth, offset);
    }

    _drawUp(canvas, face, x, y, size, sizeDepth, offset){
        let faceLen = face.length;
        for(let i=0;i<faceLen;i++){
            let xSize1 = x+size*(i+1);
            let lastIndex = faceLen-1;

            let x0 = xSize1+sizeDepth+offset*(lastIndex+i);
            let x1 = xSize1+offset*(i+1);
            let x2 = x+size*i+sizeDepth+offset*i;

            let y0 = y-sizeDepth*faceLen-offset*faceLen;
            let y1 = y-sizeDepth*lastIndex-offset*lastIndex;
            let y2 = y-sizeDepth-offset;

            this.stickerDrawer.drawUpSticker(
                canvas, face[0][i], x0, y0, size
            );
            this.stickerDrawer.drawUpSticker(
                canvas, face[1][i], x1, y1, size
            );
            this.stickerDrawer.drawUpSticker(
                canvas, face[2][i], x2, y2, size
            );
        }
    }
}
