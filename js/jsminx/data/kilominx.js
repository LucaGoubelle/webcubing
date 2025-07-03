
class KilominxBuilder extends MinxBuilder {
    constructor(){
        super();
        this.kilo_face_size = 5;
    }

    createKilominxFace(elem){
        let face = [];
        for(let i=0;i<this.kilo_face_size;i++) face.push(this.DICT_COLORS[elem]);
        return face;
    }

    createKilominx(){
        return {
            up: this.createKilominxFace("gray"),
            front: this.createKilominxFace("magenta"),
            left: this.createKilominxFace("lime"),
            right: this.createKilominxFace("beige"),
            downLeft: this.createKilominxFace("blue"),
            downRight: this.createKilominxFace("red"),
    
            absLeft: this.createKilominxFace("yellow"),
            absRight: this.createKilominxFace("green"),
            backLeft: this.createKilominxFace("orange"),
            backRight: this.createKilominxFace("cyan"),
            back: this.createKilominxFace("purple"),
            down: this.createKilominxFace("white")
        }
    }
}
