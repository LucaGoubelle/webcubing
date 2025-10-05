
class MegaminxBuilder extends MinxBuilder {
    constructor(){
        super();
        this.ring1 = 10;
        this.ring2 = 1;
    }

    _createFaceMegaminx(elem){
        let face = [];
        let layer1 = [];
        let layer2 = [];

        for(let i=0;i<this.ring1;i++) 
            layer1.push(elem);
        for(let i=0;i<this.ring2;i++) 
            layer2.push(elem);

        face.push(layer1);
        face.push(layer2);
        
        return face;
    }

    build(){
        return {
            up: this._createFaceMegaminx("gray"),
            front: this._createFaceMegaminx("magenta"),
            left: this._createFaceMegaminx("lime"),
            right: this._createFaceMegaminx("beige"),
            downLeft: this._createFaceMegaminx("blue"),
            downRight: this._createFaceMegaminx("red"),

            backLeft: this._createFaceMegaminx("orange"),
            backRight: this._createFaceMegaminx("cyan"),
            back: this._createFaceMegaminx("purple"),
            absLeft: this._createFaceMegaminx("yellow"),
            absRight: this._createFaceMegaminx("green"),
            down: this._createFaceMegaminx("white"),
        };
    }
}
