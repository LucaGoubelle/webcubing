
class KilominxULRFMoves {

    moveU(minx){
        minx.up = KilominxRotateUtils.rotate(minx.up);
    
        let newLeft = KilominxRotateUtils.genEmptyFace(5);
        let newFront = KilominxRotateUtils.genEmptyFace(5);
        let newRight = KilominxRotateUtils.genEmptyFace(5);
        let newBackLeft = KilominxRotateUtils.genEmptyFace(5);
        let newBackRight = KilominxRotateUtils.genEmptyFace(5);
    
        for(let i = 0; i < 2; i++){
            newLeft[i] = minx.front[i];
            newRight[i] = minx.backRight[i];
            newFront[i] = minx.right[i];
            newBackLeft[i] = minx.left[i];
            newBackRight[i] = minx.backLeft[i];
        }
    
        minx.left = KilominxRotateUtils.transfert(minx.left, newLeft);
        minx.right = KilominxRotateUtils.transfert(minx.right, newRight);
        minx.front = KilominxRotateUtils.transfert(minx.front, newFront);
        minx.backLeft = KilominxRotateUtils.transfert(minx.backLeft, newBackLeft);
        minx.backRight = KilominxRotateUtils.transfert(minx.backRight, newBackRight);
    
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
        minx.left = KilominxRotateUtils.rotate(minx.left);
    
        let newUp = ["", "", "", minx.backLeft[1], minx.backLeft[2]];
        let newFront = [minx.up[4], "", "", "", minx.up[3]];
        let newDownLeft = [minx.front[0], "", "", "", minx.front[4]];
        let newBackLeft = ["", minx.absLeft[0], minx.absLeft[1], "", ""];
        let newAbsLeft = [minx.downLeft[4], minx.downLeft[0], "", "", ""];
    
        minx.up = KilominxRotateUtils.transfert(minx.up, newUp);
        minx.front = KilominxRotateUtils.transfert(minx.front, newFront);
        minx.downLeft = KilominxRotateUtils.transfert(minx.downLeft, newDownLeft);
        minx.backLeft = KilominxRotateUtils.transfert(minx.backLeft, newBackLeft);
        minx.absLeft = KilominxRotateUtils.transfert(minx.absLeft, newAbsLeft);
    
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
        minx.right = KilominxRotateUtils.rotate(minx.right);
    
        let newUp = ["", minx.front[1], minx.front[2], "", ""];
        let newFront = ["", minx.downRight[0], minx.downRight[1], "", ""];
        let newBackRight = [minx.up[2], "", "", "", minx.up[1]];
        let newAbsRight = [minx.backRight[0], "", "", "", minx.backRight[4]];
        let newDownRight = [minx.absRight[4], minx.absRight[0], "", "", ""];
        
        minx.up = KilominxRotateUtils.transfert(minx.up, newUp);
        minx.front = KilominxRotateUtils.transfert(minx.front, newFront);
        minx.backRight = KilominxRotateUtils.transfert(minx.backRight, newBackRight);
        minx.absRight = KilominxRotateUtils.transfert(minx.absRight, newAbsRight);
        minx.downRight = KilominxRotateUtils.transfert(minx.downRight, newDownRight);
    
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
        minx.front = KilominxRotateUtils.rotate(minx.front);
    
        let newUp = ["", "", minx.left[1], minx.left[2], ""];
        let newLeft = ["", minx.downLeft[0], minx.downLeft[1], "", ""];
        let newRight = [minx.up[3], "", "", "", minx.up[2]];
        let newDownLeft = [minx.downRight[4], minx.downRight[0], "", "", ""];
        let newDownRight = [minx.right[0], "", "", "", minx.right[4]];
    
        minx.up = KilominxRotateUtils.transfert(minx.up, newUp);
        minx.left = KilominxRotateUtils.transfert(minx.left, newLeft);
        minx.right = KilominxRotateUtils.transfert(minx.right, newRight);
        minx.downLeft = KilominxRotateUtils.transfert(minx.downLeft, newDownLeft);
        minx.downRight = KilominxRotateUtils.transfert(minx.downRight, newDownRight);
    
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
