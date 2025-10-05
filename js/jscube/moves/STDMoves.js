
class STDMoves extends Moves {

    moveU(cube){
        cube.up = this.rh.rotate(cube.up);
        let size = cube.up.length;

        let newFront = this.rh.genEmptyFace(size);
        let newLeft = this.rh.genEmptyFace(size);
        let newRight = this.rh.genEmptyFace(size);
        let newBack = this.rh.genEmptyFace(size);

        for (let i = 0; i<cube.up.length; i++){
            newFront[0][i] = cube.right[0][i];
            newLeft[0][i] = cube.front[0][i];
            newRight[0][i] = cube.back[0][i];
            newBack[0][i] = cube.left[0][i];
        }
        cube.front = this.rh.transfert(cube.front, newFront);
        cube.left = this.rh.transfert(cube.left, newLeft);
        cube.right = this.rh.transfert(cube.right, newRight);
        cube.back = this.rh.transfert(cube.back, newBack);
        return cube;
    }

    moveUPrime(cube){
        for(let i = 0; i <3;i++) 
            cube = this.moveU(cube);
        return cube;
    }

    moveU2(cube){
        for(let i = 0; i <2;i++)
            cube = this.moveU(cube);
        return cube;
    }

    moveD(cube){
        cube.down = this.rh.rotate(cube.down);
        let size = cube.down.length;

        let newFront = this.rh.genEmptyFace(size);
        let newLeft = this.rh.genEmptyFace(size);
        let newRight = this.rh.genEmptyFace(size);
        let newBack = this.rh.genEmptyFace(size);

        for(let i=0;i<size;i++){
            newFront[size-1][i] = cube.left[size-1][i];
            newLeft[size-1][i] = cube.back[size-1][i];
            newRight[size-1][i] = cube.front[size-1][i];
            newBack[size-1][i] = cube.right[size-1][i];
        }
        cube.front = this.rh.transfert(cube.front, newFront);
        cube.left = this.rh.transfert(cube.left, newLeft);
        cube.right = this.rh.transfert(cube.right, newRight);
        cube.back = this.rh.transfert(cube.back, newBack);
        return cube;
    }
    
    moveDPrime(cube){
        for(let i=0;i<3;i++) 
            cube = this.moveD(cube);
        return cube;
    }

    moveD2(cube){
        for(let i=0;i<2;i++) 
            cube = this.moveD(cube);
        return cube;
    }

    moveL(cube){
        cube.left = this.rh.rotate(cube.left);
        let size = cube.left.length;

        let newUp = this.rh.genEmptyFace(size);
        let newFront = this.rh.genEmptyFace(size);
        let newDown = this.rh.genEmptyFace(size);
        let newBack = this.rh.genEmptyFace(size);

        for(let i=0;i<size;i++){
            newFront[i][0] = cube.up[i][0];
            newDown[i][0] = cube.front[i][0];
            newBack[i][0] = cube.down[i][0];
            newUp[i][size-1] = cube.back[i][size-1];
        }
        cube.front = this.rh.transfert(cube.front, newFront);
        cube.up = this.rh.transfert(cube.up, this.rh.rotateTwice(newUp));
        cube.down = this.rh.transfert(cube.down, newDown);
        cube.back = this.rh.transfert(cube.back, this.rh.rotateTwice(newBack));
        return cube;
    }

    moveLPrime(cube){
        for(let i=0;i<3;i++) 
            cube = this.moveL(cube);
        return cube;
    }

    moveL2(cube){
        for(let i = 0; i <2;i++) 
            cube = this.moveL(cube);
        return cube;
    }

    moveR(cube){
        cube.right = this.rh.rotate(cube.right);
        let size = cube.right.length;

        let newFront = this.rh.genEmptyFace(size);
        let newUp = this.rh.genEmptyFace(size);
        let newBack = this.rh.genEmptyFace(size);
        let newDown = this.rh.genEmptyFace(size);

        for(let i=0;i<cube.right.length;i++){
            newFront[i][size-1] = cube.down[i][size-1];
            newUp[i][size-1] = cube.front[i][size-1];
            newBack[i][size-1] = cube.up[i][size-1];
            newDown[i][0] = cube.back[i][0];
        }
        cube.front = this.rh.transfert(cube.front, newFront);
        cube.up = this.rh.transfert(cube.up, newUp);
        cube.back = this.rh.transfert(cube.back, this.rh.rotateTwice(newBack));
        cube.down = this.rh.transfert(cube.down, this.rh.rotateTwice(newDown));
        return cube;
    }
    
    moveRPrime(cube){
        for(let i=0;i<3;i++) 
            cube = this.moveR(cube);
        return cube;
    }
    
    moveR2(cube){
        for(let i=0;i<2;i++) 
            cube = this.moveR(cube);
        return cube;
    }

    moveF(cube){
        cube.front = this.rh.rotate(cube.front);
        let size = cube.front.length;

        let newUp = this.rh.genEmptyFace(size);
        let newLeft = this.rh.genEmptyFace(size);
        let newRight = this.rh.genEmptyFace(size);
        let newDown = this.rh.genEmptyFace(size);

        for(let i=0;i<size;i++){
            newUp[i][size-1] = cube.left[i][size-1];
            newLeft[0][i] = cube.down[0][i];
            newRight[size-1][i] = cube.up[size-1][i];
            newDown[i][0] = cube.right[i][0];
        }
        cube.up = this.rh.transfert(cube.up, this.rh.rotate(newUp));
        cube.left = this.rh.transfert(cube.left, this.rh.rotate(newLeft));
        cube.right = this.rh.transfert(cube.right, this.rh.rotate(newRight));
        cube.down = this.rh.transfert(cube.down, this.rh.rotate(newDown));
        return cube;
    }
    
    moveFPrime(cube){
        for(let i=0;i<3;i++) 
            cube = this.moveF(cube);
        return cube;
    }

    moveF2(cube){
        for(let i=0;i<2;i++) 
            cube = this.moveF(cube);
        return cube;
    }
}
