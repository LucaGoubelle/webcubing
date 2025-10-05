
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
        return new Minx(
            this._createFaceMegaminx("gray"),
            this._createFaceMegaminx("magenta"),
            this._createFaceMegaminx("lime"),
            this._createFaceMegaminx("beige"),
            this._createFaceMegaminx("blue"),
            this._createFaceMegaminx("red"),

            this._createFaceMegaminx("yellow"),
            this._createFaceMegaminx("green"),
            this._createFaceMegaminx("orange"),
            this._createFaceMegaminx("cyan"),
            this._createFaceMegaminx("purple"),
            this._createFaceMegaminx("white")
        );
    }
}
