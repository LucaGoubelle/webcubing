
class Cube6x6Drawer extends CubeDrawer {
    constructor(){
        super();
    }

    draw(canvas, cube, x=100, y=150, size=30){
        let offset = 2; 
        let sizeDepth = size / 2;
        
        this._drawFront(
            canvas, cube.front, x,y, size, offset
        );
        this._drawUp(
            canvas, cube.up, x,y, size, sizeDepth, offset
        );
        this._drawRight(
            canvas, cube.right, x,y, size,sizeDepth, offset
        );
    }

    _drawUp(canvas, face, x,y, size, sizeDepth, offset){
        for(let i=0;i<face.length;i++){
            let x0 = x+sizeDepth+size*i+offset*i;
            let x1 = x+size*(i+1)+offset*(i+1);
            let x2 = x+size*(i+1)+offset*(i+2)+sizeDepth;
            let x3 = x+size*(i+2)+offset*(i+3);
            let x4 = x+size*(i+2)+offset*(i+4)+sizeDepth;
            let x5 = x+size*(i+3)+offset*(i+5);

            let y0 = y-sizeDepth*1-offset*1;
            let y1 = y-sizeDepth*2-offset*2;
            let y2 = y-sizeDepth*3-offset*3;
            let y3 = y-sizeDepth*4-offset*4;
            let y4 = y-sizeDepth*5-offset*5;
            let y5 = y-sizeDepth*6-offset*6;

            this.stickerDrawer.drawUpSticker(canvas, face[5][i], x0, y0, size);
            this.stickerDrawer.drawUpSticker(canvas, face[4][i], x1, y1, size);
            this.stickerDrawer.drawUpSticker(canvas, face[3][i], x2, y2, size);
            this.stickerDrawer.drawUpSticker(canvas, face[2][i], x3, y3, size);
            this.stickerDrawer.drawUpSticker(canvas, face[1][i], x4, y4, size);
            this.stickerDrawer.drawUpSticker(canvas, face[0][i], x5, y5, size);
        }
    }
}
