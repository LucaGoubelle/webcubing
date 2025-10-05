
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
        return new Minx(
            this._createFaceGigaminx("gray"),
            this._createFaceGigaminx("magenta"),
            this._createFaceGigaminx("lime"),
            this._createFaceGigaminx("beige"),
            this._createFaceGigaminx("blue"),
            this._createFaceGigaminx("red"),

            this._createFaceGigaminx("yellow"),
            this._createFaceGigaminx("green"),
            this._createFaceGigaminx("orange"),
            this._createFaceGigaminx("cyan"),
            this._createFaceGigaminx("purple"),
            this._createFaceGigaminx("white")
        );
    }
}
