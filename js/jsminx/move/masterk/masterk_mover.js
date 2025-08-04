
class MasterKilominxMover extends MinxMover {
    constructor(){
        super();
        this.ulrfMoves = new MasterKilominxULRFMoves();
        this.wMoves = new MasterKilominxWMoves();
        this.axisMoves = new MasterKilominxAxisMoves();
    }

    simpleMove(minx, mv){
        switch(mv){
            case "U": return this.ulrfMoves.moveU(minx);
            case "U'": return this.ulrfMoves.moveUPrime(minx);
            case "Uw": return this.wMoves.moveUw(minx);
            case "Uw'": return this.wMoves.moveUwPrime(minx);
            case "y": return this.axisMoves.moveY(minx);
            case "y'": return this.axisMoves.moveYPrime(minx);

            default: return minx;
        }
    }
}