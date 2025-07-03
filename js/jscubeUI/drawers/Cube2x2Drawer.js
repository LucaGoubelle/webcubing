
class Cube2x2Drawer extends CubeDrawer {
    constructor(){
        super();
    }

    draw(canvas, cube, x=100,y=100, size=50){
        let offset = 2;
        let sizeDepth = size / 2;

        this._drawFront(canvas, cube.front, x,y, size, offset);
        this._drawUp(canvas, cube.up, x,y, size, sizeDepth, offset);
        this._drawRight(canvas, cube.right, x,y,size, sizeDepth, offset);    
    }

    _drawUp(canvas, face, x,y, size, sizeDepth, offset){
        let faceLen = face.length;
        for(let i=0;i<faceLen;i++){
            let x0 = x+size*(i+1)+offset*(i+1);
            let x1 = x+sizeDepth+size*i+offset*i;
            let y0 = y-sizeDepth*faceLen-offset*faceLen;
            let y1 = y-sizeDepth-offset;

            this.stickerDrawer.drawUpSticker(canvas, cube.up[0][i], x0, y0, size);
            this.stickerDrawer.drawUpSticker(canvas, cube.up[1][i], x1, y1, size);
        }
    }
}
