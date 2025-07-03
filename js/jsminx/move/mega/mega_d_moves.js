
class MegaminxDMoves {
    // ########################
    // ######## DL  ###########
    // ########################

    moveDL(minx){
        //todo: implement this
        return minx;
    }

    moveDLPrime(minx){
        for(let i=0;i<4;i++)
            minx = this.moveDL(minx);
        return minx;
    }

    moveDL2(minx){
        for(let i=0;i<2;i++)
            minx = this.moveDL(minx);
        return minx;
    }

    // ########################
    // ######## DR  ###########
    // ########################

    moveDR(minx){
        //todo: implement this
        return minx;
    }

    moveDRPrime(minx){
        for(let i=0;i<4;i++)
            minx = this.moveDR(minx);
        return minx;
    }

    moveDR2(minx){
        for(let i=0;i<2;i++)
            minx = this.moveDR(minx);
        return minx;
    }

    // ########################
    // ######## D   ###########
    // ########################

    moveD(minx){
        minx.down = MegaminxRotateUtils.rotate(minx.down);

        let newDownLeft = [["","","","",minx.absLeft[0][4], minx.absLeft[0][5], minx.absLeft[0][6], "","",""],[""]];
        let newDownRight = [["","","","",minx.downLeft[0][4], minx.downLeft[0][5], minx.downLeft[0][6], "","",""],[""]];
        let newAbsLeft = [["","","","",minx.back[0][4], minx.back[0][5], minx.back[0][6], "","",""],[""]];
        let newAbsRight = [["","","","",minx.downRight[0][4], minx.downRight[0][5], minx.downRight[0][6], "","",""],[""]];
        let newBack = [["","","","",minx.absRight[0][4], minx.absRight[0][5], minx.absRight[0][6], "","",""],[""]];

        minx.downLeft = MegaminxRotateUtils.transfert(minx.downLeft, newDownLeft);
        minx.downRight = MegaminxRotateUtils.transfert(minx.downRight, newDownRight);
        minx.absLeft = MegaminxRotateUtils.transfert(minx.absLeft, newAbsLeft);
        minx.absRight = MegaminxRotateUtils.transfert(minx.absRight, newAbsRight);
        minx.back = MegaminxRotateUtils.transfert(minx.back, newBack);

        return minx;
    }

    moveDPrime(minx){
        for(let i=0;i<4;i++)
            minx = this.moveD(minx);
        return minx;
    }

    moveD2(minx){
        for(let i=0;i<2;i++)
            minx = this.moveD(minx);
        return minx;
    }
}
