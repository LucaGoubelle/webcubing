
class MegaminxMover {

    constructor(){
        this.ulrfMoves = new MegaminxULRFMoves();
        this.dMoves = new MegaminxDMoves();
        this.axisMoves = new MegaminxAxisMoves();
    }

    simpleMove(minx, mv){
        switch(mv){
            case "U": return this.ulrfMoves.moveU(minx);
            case "U'": return this.ulrfMoves.moveUPrime(minx);
            case "U2": return this.ulrfMoves.moveU2(minx);

            case "R": return this.ulrfMoves.moveR(minx);
            case "R'": return this.ulrfMoves.moveRPrime(minx);
            case "R2": return this.ulrfMoves.moveR2(minx);

            case "L": return this.ulrfMoves.moveL(minx);
            case "L'": return this.ulrfMoves.moveLPrime(minx);
            case "L2": return this.ulrfMoves.moveL2(minx);

            case "F": return this.ulrfMoves.moveF(minx);
            case "F'": return this.ulrfMoves.moveFPrime(minx);
            case "F2": return this.ulrfMoves.moveF2(minx);

            case "D": return this.dMoves.moveD(minx);
            case "D'": return this.dMoves.moveDPrime(minx);
            case "D2": return this.dMoves.moveD2(minx);

            case "y": return this.axisMoves.moveY(minx);
            case "y'": return this.axisMoves.moveYPrime(minx);
            default: return minx;
        }
    }

    multiMoves(minx, mvs){
        let mvArr = mvs.split(" ");
        for(let mv of mvArr)
            minx = this.simpleMove(minx, mv);
        return minx;
    }
}
