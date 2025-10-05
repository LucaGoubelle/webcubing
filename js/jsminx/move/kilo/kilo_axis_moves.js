
class KilominxAxisMoves extends KilominxMoves {
    moveY(minx){
        minx.up = this.rh.rotate(minx.up);
        minx.down = this.rh.rotateAsync(minx.down);

        //TODO: can use this.rh.copyFace()
        let newFront = JSON.parse(JSON.stringify(minx.right));
        let newLeft = JSON.parse(JSON.stringify(minx.front));
        let newRight = JSON.parse(JSON.stringify(minx.backRight));
        let newBackLeft = JSON.parse(JSON.stringify(minx.left));
        let newBackRight = JSON.parse(JSON.stringify(minx.backLeft));

        //TODO: can use this.rh.copyFace()
        let newDownLeft = JSON.parse(JSON.stringify(minx.downRight));
        let newDownRight = JSON.parse(JSON.stringify(minx.absRight));
        let newAbsRight = JSON.parse(JSON.stringify(minx.back));
        let newBack = JSON.parse(JSON.stringify(minx.absLeft));
        let newAbsLeft = JSON.parse(JSON.stringify(minx.downLeft));

        minx.front = this.rh.transfert(minx.front, newFront);
        minx.right = this.rh.transfert(minx.right, newRight);
        minx.left = this.rh.transfert(minx.left, newLeft);
        minx.backLeft = this.rh.transfert(minx.backLeft, newBackLeft);
        minx.backRight = this.rh.transfert(minx.backRight, newBackRight);

        minx.downLeft = this.rh.transfert(minx.downLeft, newDownLeft);
        minx.downRight = this.rh.transfert(minx.downRight, newDownRight);
        minx.back = this.rh.transfert(minx.back, newBack);
        minx.absLeft = this.rh.transfert(minx.absLeft, newAbsLeft);
        minx.absRight = this.rh.transfert(minx.absRight, newAbsRight);

        return minx;
    }

    moveYPrime(minx){
        for(let i=0;i<4;i++)
            minx = this.moveY(minx);
        return minx;
    }
}
