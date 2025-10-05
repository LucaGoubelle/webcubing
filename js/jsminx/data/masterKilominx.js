
class MasterKilominxBuilder extends MinxBuilder {
    
    constructor(){
        super();
        this.ring1 = 15;
        this.ring2 = 5;
    }

    _createFaceMasterKilominx(elem){
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
            this._createFaceMasterKilominx("gray"),
            this._createFaceMasterKilominx("magenta"),
            this._createFaceMasterKilominx("lime"),
            this._createFaceMasterKilominx("beige"),
            this._createFaceMasterKilominx("blue"),
            this._createFaceMasterKilominx("red"),

            this._createFaceMasterKilominx("yellow"),
            this._createFaceMasterKilominx("green"),
            this._createFaceMasterKilominx("orange"),
            this._createFaceMasterKilominx("cyan"),
            this._createFaceMasterKilominx("purple"),
            this._createFaceMasterKilominx("white")
        );
    }
}
