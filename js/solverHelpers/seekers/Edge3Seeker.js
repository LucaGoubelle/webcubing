
class Edge3Seeker {

    constructor(){
        this.scanner = new Cube3x3Scanner();
    }

    seekeEdge(cube, posibilities){
        let targetedOrients = "";
        let targetedColors = "";
        let edges = this.scanner.scanEdges(cube);
        for(let key in edges){
            if(posibilities.includes(edges[key])){
                targetedOrients = key;
                targetedColors = edges[key];
                break;
            }
        }
        return targetedOrients+"::"+targetedColors;
    }
}