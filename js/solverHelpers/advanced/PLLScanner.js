
class PLLScanner {

    constructor(){
        this.hmap = {
            "blue": "B",
            "orange": "O",
            "green": "G",
            "red": "R",
            "yellow": "Y",
            "white": "W"
        }
    }

    scanPLL(cube){
        let result = "";
        for(let elem of cube.front[0])
            result += this.hmap[elem];
        result += "_";
        for(let elem of cube.right[0])
            result += this.hmap[elem];
        result += "_";
        for(let elem of cube.back[0])
            result += this.hmap[elem];
        result += "_";
        for(let elem of cube.left[0])
            result += this.hmap[elem];
        return result;
    }
}