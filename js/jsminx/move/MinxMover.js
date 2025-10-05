
class MinxMover {

    multiMoves(minx, mvs){
        let mvArr = mvs.split(" ");
        for(let mv of mvArr)
            minx = this.simpleMove(minx, mv);
        return minx;
    }

    simpleMove(minx, mv){
        throw new Error("NotImplementedError");
    }
}
