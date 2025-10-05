
class GigaminxBuilder extends MinxBuilder {
    constructor(){
        super();
        this.ring1 = 20;
        this.ring2 = 10;
        this.ring3 = 1;
    }

    _createFaceGigaminx(elem){
        let face = [];
        let layer1 = [];
        let layer2 = [];
        let layer3 = [];
        for(let i=0;i<this.ring1;i++) layer1.push(elem);
        for(let i=0;i<this.ring2;i++) layer2.push(elem);
        for(let i=0;i<this.ring3;i++) layer3.push(elem);
        face.push(layer1);
        face.push(layer2);
        face.push(layer3);
        return face;
    }

    build(){
        return {
            up: this._createFaceGigaminx("gray"),
            front: this._createFaceGigaminx("magenta"),
            left: this._createFaceGigaminx("lime"),
            right: this._createFaceGigaminx("beige"),
            downLeft: this._createFaceGigaminx("blue"),
            downRight: this._createFaceGigaminx("red"),

            backLeft: this._createFaceGigaminx("orange"),
            backRight: this._createFaceGigaminx("cyan"),
            back: this._createFaceGigaminx("purple"),
            absLeft: this._createFaceGigaminx("yellow"),
            absRight: this._createFaceGigaminx("green"),
            down: this._createFaceGigaminx("white"),
        };
    }
}
