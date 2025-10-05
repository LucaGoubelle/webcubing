
class MegaminxDMoves extends MegaminxMoves {
    // ########################
    // ######## DL  ###########
    // ########################

    moveDL(minx){
        minx.downLeft = this.rh.rotate(minx.downLeft);

        let newFront = [
            ["","","","","","",minx.left[0][4], minx.left[0][5], minx.left[0][6], ""],
            [""]
        ];
        let newDownRight = [
            ["","","","","","", minx.front[0][6], minx.front[0][7], minx.front[0][8], ""],
            [""]
        ];
        let newLeft = [
            ["","","","",minx.absLeft[0][2], minx.absLeft[0][3], minx.absLeft[0][4], "","",""],
            [""]
        ];
        let newDown = [
            [minx.downRight[0][8], "", "", "", "", "", "", "", minx.downRight[0][6],minx.downRight[0][7]],
            [""]
        ];
        let newAbsLeft = [
            ["","", minx.down[0][8], minx.down[0][9], minx.down[0][0], "","","","",""],
            [""]
        ];

        minx.front = this.rh.transfert(minx.front, newFront);
        minx.downRight = this.rh.transfert(minx.downRight, newDownRight);
        minx.left = this.rh.transfert(minx.left, newLeft);
        minx.down = this.rh.transfert(minx.down, newDown);
        minx.absLeft = this.rh.transfert(minx.absLeft, newAbsLeft);
        
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
        minx.downRight = this.rh.rotate(minx.downRight);

        let newFront = [
            ["","","","",minx.downLeft[0][2], minx.downLeft[0][3], minx.downLeft[0][4], "","",""],
            [""]
        ];
        let newRight = [
            ["","","","","","", minx.front[0][4], minx.front[0][5], minx.front[0][6],""],
            [""]
        ];
        let newDownLeft = [
            ["","", minx.down[0][0], minx.down[0][1], minx.down[0][2], "","","","",""],
            [""]
        ];
        let newDown = [
            [minx.absRight[0][6], minx.absRight[0][7], minx.absRight[0][8], "","","","","", "",""],
            [""]
        ];
        let newAbsRight = [
            ["","","", "","","", minx.right[0][6], minx.right[0][7], minx.right[0][8], ""],
            [""]
        ];

        minx.front = this.rh.transfert(minx.front, newFront);
        minx.right = this.rh.transfert(minx.right, newRight);
        minx.downLeft = this.rh.transfert(minx.downLeft, newDownLeft);
        minx.down = this.rh.transfert(minx.down, newDown);
        minx.absRight = this.rh.transfert(minx.absRight, newAbsRight);

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
        minx.down = this.rh.rotate(minx.down);

        let newDownLeft = [["","","","",minx.absLeft[0][4], minx.absLeft[0][5], minx.absLeft[0][6], "","",""],[""]];
        let newDownRight = [["","","","",minx.downLeft[0][4], minx.downLeft[0][5], minx.downLeft[0][6], "","",""],[""]];
        let newAbsLeft = [["","","","",minx.back[0][4], minx.back[0][5], minx.back[0][6], "","",""],[""]];
        let newAbsRight = [["","","","",minx.downRight[0][4], minx.downRight[0][5], minx.downRight[0][6], "","",""],[""]];
        let newBack = [["","","","",minx.absRight[0][4], minx.absRight[0][5], minx.absRight[0][6], "","",""],[""]];

        minx.downLeft = this.rh.transfert(minx.downLeft, newDownLeft);
        minx.downRight = this.rh.transfert(minx.downRight, newDownRight);
        minx.absLeft = this.rh.transfert(minx.absLeft, newAbsLeft);
        minx.absRight = this.rh.transfert(minx.absRight, newAbsRight);
        minx.back = this.rh.transfert(minx.back, newBack);

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
