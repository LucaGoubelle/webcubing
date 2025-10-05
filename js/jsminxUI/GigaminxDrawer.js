// TODO: implement this

class GigaminxDrawer extends MinxDrawer {
    constructor(){
        super();
    }

    draw(canvas, minx){
        this._drawFrontFace(canvas, minx.front);
        this._drawUpFace(canvas, minx.up);
        this._drawLeftFace(canvas, minx.left);
        this._drawRightFace(canvas, minx.right);
        this._drawDownLeftFace(canvas, minx.downLeft);
        this._drawDownRightFace(canvas, minx.downRight);
    }

    _drawFrontFace(canvas, face){
        drawPolygon(canvas, [[161,128], [196,128], [185,162], [151,161]], this.DICT_COLORS[face[0][0]]);
        drawPolygon(canvas, [[197,128], [232,128], [221,162], [186,162]], this.DICT_COLORS[face[0][1]]);
        drawPolygon(canvas, [[232,128], [267,128], [278,162], [221,162]], this.DICT_COLORS[face[0][2]]);
        drawPolygon(canvas, [[268,128], [303,128], [313,162], [278,162]], this.DICT_COLORS[face[0][3]]);
        drawPolygon(canvas, [[303,128], [338,128], [348,162], [314,162]], this.DICT_COLORS[face[0][4]]);
        //todo: implement remaining code
    }

    _drawUpFace(canvas, face){
        //todo: implement this
    }

    _drawLeftFace(canvas, face){
        //todo: implement this
    }

    _drawRightFace(canvas, face){
        //todo: implement this
    }

    _drawDownLeftFace(canvas, face){
        //todo: implement this
    }
    
    _drawDownRightFace(canvas, face){
        //todo: implement this
    }
}