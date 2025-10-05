
class MasterKilominxULRFMoves extends MKMoves {
    moveU(minx){
        minx.up = this.rh.rotate(minx.up);
        let newFront = [
            [
                minx.right[0][0], minx.right[0][1], minx.right[0][2], minx.right[0][3],
                "","","","","","",
                "","","","",""
            ], 
            ["","","","",""]
        ];
        let newLeft = [
            [
                minx.front[0][0], minx.front[0][1], minx.front[0][2], minx.front[0][3],
                "","","","","","",
                "","","","",""
            ], 
            ["","","","",""]
        ];
        let newRight = [
            [
                minx.backRight[0][0], minx.backRight[0][1], minx.backRight[0][2], minx.backRight[0][3],
                "","","","","","",
                "","","","",""
            ], 
            ["","","","",""]
        ];
        let newBackLeft = [
            [
                minx.left[0][0], minx.left[0][1], minx.left[0][2], minx.left[0][3],
                "","","","","","",
                "","","","",""
            ], 
            ["","","","",""]
        ];
        let newBackRight = [
            [
                minx.backLeft[0][0], minx.backLeft[0][1], minx.backLeft[0][2], minx.backLeft[0][3],
                "","","","","","",
                "","","","",""
            ], 
            ["","","","",""]
        ];
        
        minx.front = this.rh.transfert(minx.front, newFront);
        minx.left = this.rh.transfert(minx.left, newLeft);
        minx.right = this.rh.transfert(minx.right, newRight);
        minx.backLeft = this.rh.transfert(minx.backLeft, newBackLeft);
        minx.backRight = this.rh.transfert(minx.backRight, newBackRight);

        return minx;
    }

    moveUPrime(minx){
        for(let i=0; i<4; i++)
            minx = this.moveU(minx);
        return minx;
    }

    moveR(minx){
        //todo: implement this method
        return minx;
    }

    moveRPrime(minx){
        for(let i=0; i<4; i++)
            minx = this.moveR(minx);
        return minx;
    }

    moveL(minx){
        //todo: implement this method
        return minx;
    }

    moveLPrime(minx){
        for(let i=0; i<4; i++)
            minx = this.moveL(minx);
        return minx;
    }

    moveF(minx){
        //todo: implement this method
        return minx;
    }

    moveFPrime(minx){
        for(let i=0; i<4; i++)
            minx = this.moveF(minx);
        return minx;
    }
}