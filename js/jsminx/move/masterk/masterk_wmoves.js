
class MasterKilominxWMoves {
    moveUw(minx){
        minx.up = MasterKilominxRotateUtils.rotate(minx.up);
        // todo: implement this method
        let newFront = [
            [
                minx.right[0][0], minx.right[0][1], minx.right[0][2], minx.right[0][3],
                minx.right[0][4],"","","","","",
                "","","","",minx.right[0][14]
            ], 
            [minx.right[1][0],minx.right[1][1],"","",""]
        ];
        let newLeft = [
            [
                minx.front[0][0], minx.front[0][1], minx.front[0][2], minx.front[0][3],
                minx.front[0][4],"","","","","",
                "","","","",minx.front[0][14]
            ], 
            [minx.front[1][0],minx.front[1][1],"","",""]
        ];
        let newRight = [
            [
                minx.backRight[0][0], minx.backRight[0][1], minx.backRight[0][2], minx.backRight[0][3],
                minx.backRight[0][4],"","","","","",
                "","","","",minx.backRight[0][14]
            ], 
            [minx.backRight[1][0],minx.backRight[1][1],"","",""]
        ];
        let newBackLeft = [
            [
                minx.left[0][0], minx.left[0][1], minx.left[0][2], minx.left[0][3],
                minx.left[0][4],"","","","","",
                "","","","",minx.left[0][14]
            ], 
            [minx.left[1][0],minx.left[1][1],"","",""]
        ];
        let newBackRight = [
            [
                minx.backLeft[0][0], minx.backLeft[0][1], minx.backLeft[0][2], minx.backLeft[0][3],
                minx.backLeft[0][4],"","","","","",
                "","","","",minx.backLeft[0][14]
            ], 
            [minx.backLeft[1][0],minx.backLeft[1][1],"","",""]
        ];
        
        minx.front = MasterKilominxRotateUtils.transfert(minx.front, newFront);
        minx.left = MasterKilominxRotateUtils.transfert(minx.left, newLeft);
        minx.right = MasterKilominxRotateUtils.transfert(minx.right, newRight);
        minx.backLeft = MasterKilominxRotateUtils.transfert(minx.backLeft, newBackLeft);
        minx.backRight = MasterKilominxRotateUtils.transfert(minx.backRight, newBackRight);

        return minx;
    }

    moveUwPrime(minx){
        for(let i=0;i<4;i++)
            minx = this.moveUw(minx);
        return minx;
    }

    moveRw(minx){
        //todo: implement this method
        return minx;
    }

    moveRwPrime(minx){
        for(let i=0; i<4; i++)
            minx = this.moveRw(minx);
        return minx;
    }

    moveLw(minx){
        //todo: implement this method
        return minx;
    }

    moveLwPrime(minx){
        for(let i=0; i<4; i++)
            minx = this.moveLw(minx);
        return minx;
    }

    moveFw(minx){
        //todo: implement this method
        return minx;
    }

    moveFwPrime(minx){
        for(let i=0; i<4; i++)
            minx = this.moveFw(minx);
        return minx;
    }
}