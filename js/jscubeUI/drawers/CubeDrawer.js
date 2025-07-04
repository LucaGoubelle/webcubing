
class CubeDrawer {

    constructor(){
        this.stickerDrawer = new StickerDrawer();
    }

    /**
     * draw front face
     * @author: LucaGoubelle 
     */
    _drawFront(canvas, face, x, y, size, offset){
        for(let i=0;i<face.length;i++)
            for(let j=0;j<face.length;j++) {
                let xActual = x+size*j+offset*j;
                let yActual = y+size*i+offset*i;
                
                this.stickerDrawer.drawFrontSticker(
                    canvas, face[i][j], xActual, yActual, size
                );
            }
    }

    /**
     * draw right face
     * @author: LucaGoubelle 
     */
    _drawRight(canvas, face, x, y, size, sizeDepth, offset){
        let faceLen = face.length;
        
        for(let i=0;i<faceLen;i++){
            let totalOffsetI = offset*i;
            let totalSizeDepth = sizeDepth*i;
            let allSize = size*faceLen;
            let allOffset = offset*(faceLen+i);
            let xFinal = x+allSize+totalSizeDepth+allOffset;

            for(let j=0;j<face.length;j++){
                let totalOffsetJ = offset*j;
                let totalSize = size*j;
                let y0 = y+totalSize+totalOffsetJ;
                let yFinal = y0-totalSizeDepth-totalOffsetI;

                this.stickerDrawer.drawRightSticker(
                    canvas, face[j][i], xFinal, yFinal, size
                );
            }
        } 
    }
}
