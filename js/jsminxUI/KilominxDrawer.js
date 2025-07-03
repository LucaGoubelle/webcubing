
class KilominxDrawer {

    draw(canvas, minx){
        this._drawFrontFace(canvas, minx.front);
        this._drawUpFace(canvas, minx.up);
        this._drawLeftFace(canvas, minx.left);
        this._drawRightFace(canvas, minx.right);
        this._drawDownLeft(canvas, minx.downLeft);
        this._drawDownRight(canvas, minx.downRight);
    }

    _drawFrontFace(canvas, face){
        drawPolygon(canvas, [[161,128], [250,128], [250,250], [134,212]], face[0]);
        drawPolygon(canvas, [[250,128], [338,128], [365,212], [250,250]], face[1]);
        drawPolygon(canvas, [[365,212], [392,296], [321,348], [250,250]], face[2]);
        drawPolygon(canvas, [[321,348], [250,399], [178,348], [250,250]], face[3]);
        drawPolygon(canvas, [[178,348], [107,296], [134,212], [250,250]], face[4]);
    }

    _drawUpFace(canvas, face){
        drawPolygon(canvas, [[250,7], [320,30], [250,73], [179,30]], face[0]);
        drawPolygon(canvas, [[320,30], [392,53], [365,91], [250,73]], face[1]);
        drawPolygon(canvas, [[365,91], [338,128], [250,128], [250,73]], face[2]);
        drawPolygon(canvas, [[250,128], [161,128], [135,91], [250,73]], face[3]);
        drawPolygon(canvas, [[135,91], [107,53], [179,30], [250,73]], face[4]);
    }

    _drawLeftFace(canvas, face){
        drawPolygon(canvas, [[107,53], [135,91], [83,194], [63,114]], face[0]);
        drawPolygon(canvas, [[135,91], [161,128], [134,212], [83,194]], face[1]);
        drawPolygon(canvas, [[134,212], [107,296], [63,310], [83,194]], face[2]);
        drawPolygon(canvas, [[63,310], [19,325], [19,249], [83,194]], face[3]);
        drawPolygon(canvas, [[19,249], [19,174], [63,114], [83,194]], face[4]);
    }

    _drawRightFace(canvas, face){
        drawPolygon(canvas, [[338,128], [365,91], [417,194], [365,212]], face[0]);
        drawPolygon(canvas, [[365,91], [392,53], [437,114], [417,194]], face[1]);
        drawPolygon(canvas, [[437,114], [480,174], [480,250], [417,194]], face[2]);
        drawPolygon(canvas, [[480,250], [480,325], [436,310], [417,194]], face[3]);
        drawPolygon(canvas, [[436,310], [392,296], [365,212], [417,194]], face[4]);
    }

    _drawDownLeft(canvas, face){
        drawPolygon(canvas, [[107,296], [178,348], [146,392], [63,310]], face[0]);
        drawPolygon(canvas, [[178,348], [250,399], [250,446], [146,392]], face[1]);
        drawPolygon(canvas, [[250,446], [250,492], [177,469], [146,392]], face[2]);
        drawPolygon(canvas, [[177,469], [107,446], [63,386], [146,392]], face[3]);
        drawPolygon(canvas, [[63,386], [19,325], [63,310], [146,392]], face[4]);
    }

    _drawDownRight(canvas, face){
        drawPolygon(canvas, [[392,296], [436,310], [353,392], [321,348]], face[0]);
        drawPolygon(canvas, [[436,310], [480,325], [436,386], [353,392]], face[1]);
        drawPolygon(canvas, [[436,386], [392,446], [321,469], [353,392]], face[2]);
        drawPolygon(canvas, [[321,469], [250,492], [250,446], [353,392]], face[3]);
        drawPolygon(canvas, [[250,446], [250,399], [321,348], [353,392]], face[4]);
    }
}
