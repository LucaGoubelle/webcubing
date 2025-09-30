
class CubeStrDumper {

    constructor(){
        this.hmap = {
            "green": "G",
            "blue": "B",
            "red": "R",
            "orange": "O",
            "white": "W",
            "yellow": "Y"
        };
    }

    _dumpFace(face){
        let content = "";
        for(let row of face)
            for(let elem of row)
                content += (elem in this.hmap) ? this.hmap[elem] : "?";
        return content;
    }

    dump(cube){
        let content = "";
        content += this._dumpFace(cube.back) + "_";
        content += this._dumpFace(cube.up) + "_";
        content += this._dumpFace(cube.front) + "_";
        content += this._dumpFace(cube.left) + "_";
        content += this._dumpFace(cube.right) + "_";
        content += this._dumpFace(cube.down);
        return content;
    }

}
