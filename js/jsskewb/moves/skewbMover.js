
class SkewbMover {
    constructor(){}
    simpleMove(skewb, mv){
        switch(mv){
            case "U": return SkewbMoves.moveU(skewb);
            case "U'": return SkewbMoves.moveUPrime(skewb);
            case "F": return SkewbMoves.moveF(skewb);
            case "F'": return SkewbMoves.moveFPrime(skewb);
            case "L": return SkewbMoves.moveL(skewb);
            case "L'": return SkewbMoves.moveLPrime(skewb);
            case "R": return SkewbMoves.moveR(skewb);
            case "R'": return SkewbMoves.moveRPrime(skewb);
            default: return skewb;
        }
    }

    multiMoves(skewb, mvs){
        let movesArr = mvs.split(' ');
        for(let mv of movesArr)
            skewb = this.simpleMove(skewb, mv);
        return skewb;
    }
}
