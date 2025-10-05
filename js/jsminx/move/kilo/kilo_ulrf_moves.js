
class KilominxULRFMoves extends KilominxMoves {

    moveU(minx){
        minx.up = this.rh.rotate(minx.up);
    
        let newLeft = this.rh.genEmptyFace(5);
        let newFront = this.rh.genEmptyFace(5);
        let newRight = this.rh.genEmptyFace(5);
        let newBackLeft = this.rh.genEmptyFace(5);
        let newBackRight = this.rh.genEmptyFace(5);
    
        for(let i = 0; i < 2; i++){
            newLeft[i] = minx.front[i];
            newRight[i] = minx.backRight[i];
            newFront[i] = minx.right[i];
            newBackLeft[i] = minx.left[i];
            newBackRight[i] = minx.backLeft[i];
        }
    
        minx.left = this.rh.transfert(minx.left, newLeft);
        minx.right = this.rh.transfert(minx.right, newRight);
        minx.front = this.rh.transfert(minx.front, newFront);
        minx.backLeft = this.rh.transfert(minx.backLeft, newBackLeft);
        minx.backRight = this.rh.transfert(minx.backRight, newBackRight);
    
        return minx;
    }

    moveUPrime(minx){
        for(let i=0;i<4;i++) minx = this.moveU(minx);
        return minx;
    }

    moveU2(minx){
        for(let i=0;i<2;i++) minx = this.moveU(minx);
        return minx;
    }

    moveL(minx){
        minx.left = this.rh.rotate(minx.left);
    
        let newUp = ["", "", "", minx.backLeft[1], minx.backLeft[2]];
        let newFront = [minx.up[4], "", "", "", minx.up[3]];
        let newDownLeft = [minx.front[0], "", "", "", minx.front[4]];
        let newBackLeft = ["", minx.absLeft[0], minx.absLeft[1], "", ""];
        let newAbsLeft = [minx.downLeft[4], minx.downLeft[0], "", "", ""];
    
        minx.up = this.rh.transfert(minx.up, newUp);
        minx.front = this.rh.transfert(minx.front, newFront);
        minx.downLeft = this.rh.transfert(minx.downLeft, newDownLeft);
        minx.backLeft = this.rh.transfert(minx.backLeft, newBackLeft);
        minx.absLeft = this.rh.transfert(minx.absLeft, newAbsLeft);
    
        return minx;
    }
    
    moveLPrime(minx){
        for(let i=0;i<4;i++) minx = this.moveL(minx);
        return minx;
    }

    moveL2(minx){
        for(let i=0;i<2;i++) minx = this.moveL(minx);
        return minx;
    }

    moveR(minx){
        minx.right = this.rh.rotate(minx.right);
    
        let newUp = ["", minx.front[1], minx.front[2], "", ""];
        let newFront = ["", minx.downRight[0], minx.downRight[1], "", ""];
        let newBackRight = [minx.up[2], "", "", "", minx.up[1]];
        let newAbsRight = [minx.backRight[0], "", "", "", minx.backRight[4]];
        let newDownRight = [minx.absRight[4], minx.absRight[0], "", "", ""];
        
        minx.up = this.rh.transfert(minx.up, newUp);
        minx.front = this.rh.transfert(minx.front, newFront);
        minx.backRight = this.rh.transfert(minx.backRight, newBackRight);
        minx.absRight = this.rh.transfert(minx.absRight, newAbsRight);
        minx.downRight = this.rh.transfert(minx.downRight, newDownRight);
    
        return minx;
    }
    
    moveRPrime(minx){
        for(let i=0;i<4;i++) minx = this.moveR(minx);
        return minx;
    }

    moveR2(minx){
        for(let i=0;i<2;i++) minx = this.moveR(minx);
        return minx;
    }

    moveF(minx){
        minx.front = this.rh.rotate(minx.front);
    
        let newUp = ["", "", minx.left[1], minx.left[2], ""];
        let newLeft = ["", minx.downLeft[0], minx.downLeft[1], "", ""];
        let newRight = [minx.up[3], "", "", "", minx.up[2]];
        let newDownLeft = [minx.downRight[4], minx.downRight[0], "", "", ""];
        let newDownRight = [minx.right[0], "", "", "", minx.right[4]];
    
        minx.up = this.rh.transfert(minx.up, newUp);
        minx.left = this.rh.transfert(minx.left, newLeft);
        minx.right = this.rh.transfert(minx.right, newRight);
        minx.downLeft = this.rh.transfert(minx.downLeft, newDownLeft);
        minx.downRight = this.rh.transfert(minx.downRight, newDownRight);
    
        return minx;
    }
    
    moveFPrime(minx){
        for(let i=0;i<4;i++) minx = this.moveF(minx);
        return minx;
    }

    moveF2(minx){
        for(let i=0;i<2;i++) minx = this.moveF(minx);
        return minx;
    }

}
