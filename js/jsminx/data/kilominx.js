
class KilominxBuilder extends MinxBuilder {
    constructor(){
        super();
        this.kilo_face_size = 5;
    }

    _createKilominxFace(elem){
        let face = [];
        for(let i=0;i<this.kilo_face_size;i++) 
            face.push(elem);
        return face;
    }

    build(){
        return {
            up: this._createKilominxFace("gray"),
            front: this._createKilominxFace("magenta"),
            left: this._createKilominxFace("lime"),
            right: this._createKilominxFace("beige"),
            downLeft: this._createKilominxFace("blue"),
            downRight: this._createKilominxFace("red"),
    
            absLeft: this._createKilominxFace("yellow"),
            absRight: this._createKilominxFace("green"),
            backLeft: this._createKilominxFace("orange"),
            backRight: this._createKilominxFace("cyan"),
            back: this._createKilominxFace("purple"),
            down: this._createKilominxFace("white")
        }
    }
}
