// TODO: implement this

class GigaminxDrawer {
    constructor(){}

    draw(canvas, minx){
        this._drawFrontFace(canvas, minx);
        this._drawUpFace(canvas, minx);
        this._drawLeftFace(canvas, minx);
        this._drawRightFace(canvas, minx);
        this._drawDownLeftFace(canvas, minx);
        this._drawDownRightFace(canvas, minx);
    }

    _drawFrontFace(canvas, minx){
        //todo: implement this
        drawPolygon(canvas, [[161,128], [196,128], [185,162], [151,161]], minx.front[0][0]);
    }

    _drawUpFace(canvas, minx){
        //todo: implement this
    }

    _drawLeftFace(canvas, minx){
        //todo: implement this
    }

    _drawRightFace(canvas, minx){
        //todo: implement this
    }

    _drawDownLeftFace(canvas, minx){
        //todo: implement this
    }
    
    _drawDownRightFace(canvas, minx){
        //todo: implement this
    }
}