
class KilominxDMoves extends KilominxMoves {
    moveDL(minx){
        minx.downLeft = this.rh.rotate(minx.downLeft);
    
        let newFront = ["", "", "", minx.left[2], minx.left[3]];
        let newLeft = ["", "", minx.absLeft[1], minx.absLeft[2], ""];
        let newAbsLeft = ["", minx.down[4], minx.down[0], "", ""];
        let newDownRight = ["", "", "", minx.front[3], minx.front[4]];
        let newDown = [minx.downRight[4], "", "", "", minx.downRight[3]];
    
        minx.front = this.rh.transfert(minx.front, newFront);
        minx.left = this.rh.transfert(minx.left, newLeft);
        minx.absLeft = this.rh.transfert(minx.absLeft, newAbsLeft);
        minx.downRight = this.rh.transfert(minx.downRight, newDownRight);
        minx.down = this.rh.transfert(minx.down, newDown);
    
        return minx;
    }

    moveDLPrime(minx){
        for(let i=0;i<4;i++) 
            minx = this.moveDL(minx);
        return minx;
    }
}
