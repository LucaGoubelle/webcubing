
class MasterKilominxAxisMoves {
    moveY(minx){
        minx.up = MasterKilominxRotateUtils.rotate(minx.up);
        minx.down = MasterKilominxRotateUtils.rotateAsync(minx.down);

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

        minx.front = MasterKilominxRotateUtils.transfert(minx.front, newFront);
        minx.right = MasterKilominxRotateUtils.transfert(minx.right, newRight);
        minx.left = MasterKilominxRotateUtils.transfert(minx.left, newLeft);
        minx.backLeft = MasterKilominxRotateUtils.transfert(minx.backLeft, newBackLeft);
        minx.backRight = MasterKilominxRotateUtils.transfert(minx.backRight, newBackRight);

        minx.downLeft = MasterKilominxRotateUtils.transfert(minx.downLeft, newDownLeft);
        minx.downRight = MasterKilominxRotateUtils.transfert(minx.downRight, newDownRight);
        minx.back = MasterKilominxRotateUtils.transfert(minx.back, newBack);
        minx.absLeft = MasterKilominxRotateUtils.transfert(minx.absLeft, newAbsLeft);
        minx.absRight = MasterKilominxRotateUtils.transfert(minx.absRight, newAbsRight);

        return minx;
    }

    moveYPrime(minx){
        for(let i=0;i<4;i++)
            minx = this.moveY(minx);
        return minx;
    }
}