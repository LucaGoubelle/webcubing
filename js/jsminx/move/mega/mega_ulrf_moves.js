
class MegaminxULRFMoves {

    moveU(minx){
        minx.up = MegaminxRotateUtils.rotate(minx.up);
        // to implement
        let newFront = [[minx.right[0][0], minx.right[0][1], minx.right[0][2],
            "", "", "", "", "", "", ""], [""]
        ];
        let newLeft = [[minx.front[0][0], minx.front[0][1], minx.front[0][2],
            "", "", "", "", "", "", ""], [""]
        ];
        let newRight = [[minx.backRight[0][0], minx.backRight[0][1], minx.backRight[0][2],
            "", "", "", "", "", "", ""], [""]
        ];
        let newBackLeft = [[minx.left[0][0], minx.left[0][1], minx.left[0][2],
            "", "", "", "", "", "", ""], [""]
        ];
        let newBackRight = [[minx.backLeft[0][0], minx.backLeft[0][1], minx.backLeft[0][2],
            "", "", "", "", "", "", ""], [""]
        ];

        minx.front = MegaminxRotateUtils.transfert(minx.front, newFront);
        minx.left = MegaminxRotateUtils.transfert(minx.left, newLeft);
        minx.right = MegaminxRotateUtils.transfert(minx.right, newRight);
        minx.backLeft = MegaminxRotateUtils.transfert(minx.backLeft, newBackLeft);
        minx.backRight = MegaminxRotateUtils.transfert(minx.backRight, newBackRight);
    
        return minx;
    }
    
    moveUPrime(minx){
        for(let i=0;i<4;i++)
            minx = this.moveU(minx);
        return minx;
    }
    
    moveU2(minx){
        for(let i=0;i<2;i++)
            minx = this.moveU(minx);
        return minx;
    }

    // #################################
    // ###########     R    ############
    // #################################

    moveR(minx){
        minx.right = MegaminxRotateUtils.rotate(minx.right);

        let newUp = [
            ["", "", minx.front[0][2], minx.front[0][3], minx.front[0][4], "", "", "", "", ""],
            [""]
        ];
        let newFront = [
            ["", "", minx.downRight[0][0], minx.downRight[0][1], minx.downRight[0][2], "", "", "", "", ""],
            [""]
        ];
        let newDownRight = [
            [minx.absRight[0][8], minx.absRight[0][9], minx.absRight[0][0], "", "", "", "", "", "", ""],
            [""]
        ];
        let newAbsRight = [
            [minx.backRight[0][0], "", "", "", "", "", "", "", minx.backRight[0][8], minx.backRight[0][9]],
            [""]
        ];
        let newBackRight = [
            [minx.up[0][4], "", "", "", "", "", "", "", minx.up[0][2], minx.up[0][3]],
            [""]
        ];

        minx.up = MegaminxRotateUtils.transfert(minx.up, newUp);
        minx.front = MegaminxRotateUtils.transfert(minx.front, newFront);
        minx.downRight = MegaminxRotateUtils.transfert(minx.downRight, newDownRight);
        minx.absRight = MegaminxRotateUtils.transfert(minx.absRight, newAbsRight);
        minx.backRight = MegaminxRotateUtils.transfert(minx.backRight, newBackRight);

        return minx;
    }

    moveRPrime(minx){
        for(let i=0;i<4;i++)
            minx = this.moveR(minx);
        return minx;
    }

    moveR2(minx){
        for(let i=0;i<2;i++)
            minx = this.moveR(minx);
        return minx;
    }

    // #################################
    // #########     L     #############
    // #################################

    moveL(minx){
        minx.left = MegaminxRotateUtils.rotate(minx.left);

        let newUp = [
            ["", "", "", "", "", "", minx.backLeft[0][2],minx.backLeft[0][3],minx.backLeft[0][4], ""], 
            [""]
        ];
        let newFront = [
            [minx.up[0][8], "", "", "", "", "", "", "", minx.up[0][6], minx.up[0][7]], 
            [""]
        ];
        let newDownLeft = [
            [minx.front[0][0], "", "", "", "", "", "", "", minx.front[0][8], minx.front[0][9]], 
            [""]
        ];
        let newBackLeft = [
            ["", "", minx.absLeft[0][0], minx.absLeft[0][1], minx.absLeft[0][2], "", "", "", "", ""], 
            [""]
        ];
        let newAbsLeft = [
            [minx.downLeft[0][8], minx.downLeft[0][9], minx.downLeft[0][0], "", "", "", "", "", "", ""], 
            [""]
        ];

        minx.up = MegaminxRotateUtils.transfert(minx.up, newUp);
        minx.front = MegaminxRotateUtils.transfert(minx.front, newFront);
        minx.downLeft = MegaminxRotateUtils.transfert(minx.downLeft, newDownLeft);
        minx.backLeft = MegaminxRotateUtils.transfert(minx.backLeft, newBackLeft);
        minx.absLeft = MegaminxRotateUtils.transfert(minx.absLeft, newAbsLeft);

        return minx;
    }

    moveLPrime(minx){
        for(let i=0;i<4;i++)
            minx = this.moveL(minx);
        return minx;
    }

    moveL2(minx){
        for(let i=0;i<2;i++)
            minx = this.moveL(minx);
        return minx;
    }

    // #################################
    // ###########     F    ############
    // #################################

    moveF(minx){
        minx.front = MegaminxRotateUtils.rotate(minx.front);

        let newUp = [
            ["","","","", minx.left[0][2], minx.left[0][3], minx.left[0][4], "", "", ""],
            [""]
        ];
        let newLeft = [
            ["", "", minx.downLeft[0][0], minx.downLeft[0][1], minx.downLeft[0][2], "", "", "", "", ""],
            [""]
        ];
        let newRight = [
            [minx.up[0][6], "", "", "", "", "", "", "", minx.up[0][4], minx.up[0][5]],
            [""]
        ];
        let newDownLeft = [
            [minx.downRight[0][8], minx.downRight[0][9], minx.downRight[0][0], "", "", "", "", "", "", ""],
            [""]
        ];
        let newDownRight = [
            [minx.right[0][0], "", "", "", "", "", "", "", minx.right[0][8], minx.right[0][9]],
            [""]
        ];

        minx.up = MegaminxRotateUtils.transfert(minx.up, newUp);
        minx.left = MegaminxRotateUtils.transfert(minx.left, newLeft);
        minx.right = MegaminxRotateUtils.transfert(minx.right, newRight);
        minx.downLeft = MegaminxRotateUtils.transfert(minx.downLeft, newDownLeft);
        minx.downRight = MegaminxRotateUtils.transfert(minx.downRight, newDownRight);
        
        return minx;
    }

    moveFPrime(minx){
        for(let i=0;i<4;i++)
            minx = this.moveF(minx);
        return minx;
    }

    moveF2(minx){
        for(let i=0;i<2;i++)
            minx = this.moveF(minx);
        return minx;
    }
}
