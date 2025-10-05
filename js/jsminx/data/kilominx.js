
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
        return new Minx(
            this._createKilominxFace("gray"),
            this._createKilominxFace("magenta"),
            this._createKilominxFace("lime"),
            this._createKilominxFace("beige"),
            this._createKilominxFace("blue"),
            this._createKilominxFace("red"),

            this._createKilominxFace("yellow"),
            this._createKilominxFace("green"),
            this._createKilominxFace("orange"),
            this._createKilominxFace("cyan"),
            this._createKilominxFace("purple"),
            this._createKilominxFace("white")
        );
    }
}
