
class MegaminxAxisMoves {
    moveY(minx){
        minx.up = MegaminxRotateUtils.rotate(minx.up);
        minx.down = MegaminxRotateUtils.rotateAsync(minx.down);

        let newFront = JSON.parse(JSON.stringify(minx.right));
        let newLeft = JSON.parse(JSON.stringify(minx.front));
        let newRight = JSON.parse(JSON.stringify(minx.backRight));
        let newBackLeft = JSON.parse(JSON.stringify(minx.left));
        let newBackRight = JSON.parse(JSON.stringify(minx.backLeft));

        let newDownLeft = JSON.parse(JSON.stringify(minx.downRight));
        let newDownRight = JSON.parse(JSON.stringify(minx.absRight));
        let newAbsRight = JSON.parse(JSON.stringify(minx.back));
        let newBack = JSON.parse(JSON.stringify(minx.absLeft));
        let newAbsLeft = JSON.parse(JSON.stringify(minx.downLeft));

        minx.front = MegaminxRotateUtils.transfert(minx.front, newFront);
        minx.right = MegaminxRotateUtils.transfert(minx.right, newRight);
        minx.left = MegaminxRotateUtils.transfert(minx.left, newLeft);
        minx.backLeft = MegaminxRotateUtils.transfert(minx.backLeft, newBackLeft);
        minx.backRight = MegaminxRotateUtils.transfert(minx.backRight, newBackRight);

        minx.downLeft = MegaminxRotateUtils.transfert(minx.downLeft, newDownLeft);
        minx.downRight = MegaminxRotateUtils.transfert(minx.downRight, newDownRight);
        minx.back = MegaminxRotateUtils.transfert(minx.back, newBack);
        minx.absLeft = MegaminxRotateUtils.transfert(minx.absLeft, newAbsLeft);
        minx.absRight = MegaminxRotateUtils.transfert(minx.absRight, newAbsRight);

        return minx;
    }

    moveYPrime(minx){
        for(let i=0;i<4;i++)
            minx = this.moveY(minx);
        return minx;
    }
}