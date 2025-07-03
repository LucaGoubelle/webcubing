
class Corner3Seeker {

    constructor(){
        this.scanner = new Cube3x3Scanner();
    }
    
    seekCorner(cube, posibilities){
        let targetedOrients = "";
        let targetedColors = "";
        let corners = this.scanner.scanCorners(cube);
        for(let key in corners){
            if(posibilities.includes(corners[key])){
                targetedOrients = key;
                targetedColors = corners[key];
                break;
            }
        }
        return targetedOrients+"::"+targetedColors;
    }
}
