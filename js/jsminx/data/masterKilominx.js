
class MasterKilominxBuilder {
    
    constructor(){
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

    createMasterKilominx(){
        return {
            up: this._createFaceMasterKilominx("gray"),
            front: this._createFaceMasterKilominx("magenta"),
            left: this._createFaceMasterKilominx("lime"),
            right: this._createFaceMasterKilominx("beige"),
            downLeft: this._createFaceMasterKilominx("blue"),
            downRight: this._createFaceMasterKilominx("red"),

            backLeft: this._createFaceMasterKilominx("orange"),
            backRight: this._createFaceMasterKilominx("cyan"),
            back: this._createFaceMasterKilominx("purple"),
            absLeft: this._createFaceMasterKilominx("yellow"),
            absRight: this._createFaceMasterKilominx("green"),
            down: this._createFaceMasterKilominx("white"),
        };
    }
}
