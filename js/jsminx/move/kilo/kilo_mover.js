
class KilominxMover extends MinxMover {

    constructor(){
        this.ulrfMoves = new KilominxULRFMoves();
        this.dMoves = new KilominxDMoves();
        this.axisMoves = new KilominxAxisMoves();
    }
    
    simpleMove(minx, mv){
        switch(mv){
            case "U": return this.ulrfMoves.moveU(minx);
            case "U'": return this.ulrfMoves.moveUPrime(minx);
            case "U2": return this.ulrfMoves.moveU2(minx);

            case "L": return this.ulrfMoves.moveL(minx);
            case "L'": return this.ulrfMoves.moveLPrime(minx);
            case "L2": return this.ulrfMoves.moveL2(minx);

            case "R": return this.ulrfMoves.moveR(minx);
            case "R'": return this.ulrfMoves.moveRPrime(minx);
            case "R2": return this.ulrfMoves.moveR2(minx);

            case "F": return this.ulrfMoves.moveF(minx);
            case "F'": return this.ulrfMoves.moveFPrime(minx);
            case "F2": return this.ulrfMoves.moveF2(minx);

            case "DL": return this.dMoves.moveDL(minx);
            case "DL'": return this.dMoves.moveDLPrime(minx);

            case "y": return this.axisMoves.moveY(minx);
            case "y'": return this.axisMoves.moveYPrime(minx);

            default: return minx;
        }
    }
}