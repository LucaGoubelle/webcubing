
class CentersCaster {

    constructor(){
        this.size = 0;
    }

    _getActualFace(cube, face){
        switch(face){
            case "up": return cube.up;
            case "front": return cube.front;
            case "left": return cube.left;
            case "right": return cube.right;
            case "down": return cube.down;
            case "back": return cube.back;
            default: return cube.front;
        }
    }

    _getStringCenters(colorToFilter, centers){
        let content = "";
        for(let row of centers)
            for(let elem of row)
                content += (elem == colorToFilter) ? "1": "0";
        return content;
    }

    _extractCenters(actualFace){
        return [];
    }

    cast(cube, face, colorToFilter){
        if(cube.front.length != this.size)
            throw new Error(`Cube must be a ${this.size}x${this.size} to use CenterCaster class`);
        let actualFace = this._getActualFace(cube, face);
        let actualCenters = this._extractCenters(actualFace);
        return this._getStringCenters(colorToFilter, actualCenters);
    }
    
}
