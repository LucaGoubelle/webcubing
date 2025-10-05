
class KilominxAxisMoves {
    moveY(minx){
        minx.up = KilominxRotateUtils.rotate(minx.up);
        minx.down = KilominxRotateUtils.rotateAsync(minx.down);

        //TODO: can use KilominxRotateUtils.copyFace()
        let newFront = JSON.parse(JSON.stringify(minx.right));
        let newLeft = JSON.parse(JSON.stringify(minx.front));
        let newRight = JSON.parse(JSON.stringify(minx.backRight));
        let newBackLeft = JSON.parse(JSON.stringify(minx.left));
        let newBackRight = JSON.parse(JSON.stringify(minx.backLeft));

        //TODO: can use KilominxRotateUtils.copyFace()
        let newDownLeft = JSON.parse(JSON.stringify(minx.downRight));
        let newDownRight = JSON.parse(JSON.stringify(minx.absRight));
        let newAbsRight = JSON.parse(JSON.stringify(minx.back));
        let newBack = JSON.parse(JSON.stringify(minx.absLeft));
        let newAbsLeft = JSON.parse(JSON.stringify(minx.downLeft));

        minx.front = KilominxRotateUtils.transfert(minx.front, newFront);
        minx.right = KilominxRotateUtils.transfert(minx.right, newRight);
        minx.left = KilominxRotateUtils.transfert(minx.left, newLeft);
        minx.backLeft = KilominxRotateUtils.transfert(minx.backLeft, newBackLeft);
        minx.backRight = KilominxRotateUtils.transfert(minx.backRight, newBackRight);

        minx.downLeft = KilominxRotateUtils.transfert(minx.downLeft, newDownLeft);
        minx.downRight = KilominxRotateUtils.transfert(minx.downRight, newDownRight);
        minx.back = KilominxRotateUtils.transfert(minx.back, newBack);
        minx.absLeft = KilominxRotateUtils.transfert(minx.absLeft, newAbsLeft);
        minx.absRight = KilominxRotateUtils.transfert(minx.absRight, newAbsRight);

        return minx;
    }

    moveYPrime(minx){
        for(let i=0;i<4;i++)
            minx = this.moveY(minx);
        return minx;
    }
}
