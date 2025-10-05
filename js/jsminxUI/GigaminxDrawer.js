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
        //todo: implement this
        drawPolygon(canvas, [[161,128], [196,128], [185,162], [151,161]], this.DICT_COLORS[face[0][0]]);
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