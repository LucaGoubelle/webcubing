
class WMoves {

    constructor(){
        this.rh = new RotateHelpers();
    }

    moveUw(cube, nbLayers=2){
        cube.up = this.rh.rotate(cube.up);
        let size = cube.up.length;

        let newFront = this.rh.genEmptyFace(size);
        let newLeft = this.rh.genEmptyFace(size);
        let newRight = this.rh.genEmptyFace(size);
        let newBack = this.rh.genEmptyFace(size);

        for(let j=0;j<nbLayers;j++){
            for (let i = 0; i<size; i++){
                newFront[j][i] = cube.right[j][i];
                newLeft[j][i] = cube.front[j][i];
                newRight[j][i] = cube.back[j][i];
                newBack[j][i] = cube.left[j][i];
            }
        }

        cube.front = this.rh.transfert(cube.front, newFront);
        cube.left = this.rh.transfert(cube.left, newLeft);
        cube.right = this.rh.transfert(cube.right, newRight);
        cube.back = this.rh.transfert(cube.back, newBack);
        return cube;
    }
    
    moveUwPrime(cube, nbLayers=2){
        for(let i = 0; i < 3; i++)
            cube = this.moveUw(cube, nbLayers);
        return cube;
    }

    moveUw2(cube, nbLayers=2){
        for(let i = 0; i < 2; i++) 
            cube = this.moveUw(cube, nbLayers);
        return cube;
    }

    moveDw(cube, nbLayers=2){
        cube.down = this.rh.rotate(cube.down);
        let size = cube.down.length;

        let newFront = this.rh.genEmptyFace(size);
        let newLeft = this.rh.genEmptyFace(size);
        let newRight = this.rh.genEmptyFace(size);
        let newBack = this.rh.genEmptyFace(size);

        for(let j = 0; j <nbLayers; j++){
            for(let i=0;i<size;i++){
                newFront[size-1-j][i] = cube.left[size-1-j][i];
                newLeft[size-1-j][i] = cube.back[size-1-j][i];
                newRight[size-1-j][i] = cube.front[size-1-j][i];
                newBack[size-1-j][i] = cube.right[size-1-j][i];
            }
        }

        cube.front = this.rh.transfert(cube.front, newFront);
        cube.left = this.rh.transfert(cube.left, newLeft);
        cube.right = this.rh.transfert(cube.right, newRight);
        cube.back = this.rh.transfert(cube.back, newBack);
        return cube;
    }

    moveDwPrime(cube, nbLayers=2){
        for(let i = 0; i < 3; i++)
            cube = this.moveDw(cube, nbLayers);
        return cube;
    }

    moveDw2(cube, nbLayers=2){
        for(let i = 0; i < 2; i++)
            cube = this.moveDw(cube, nbLayers);
        return cube;
    }

    moveLw(cube, nbLayers=2){
        cube.left = this.rh.rotate(cube.left);
        let size = cube.left.length;

        let newUp = this.rh.genEmptyFace(size);
        let newFront = this.rh.genEmptyFace(size);
        let newDown = this.rh.genEmptyFace(size);
        let newBack = this.rh.genEmptyFace(size);

        for(let j=0;j<nbLayers;j++){
            for(let i=0;i<size;i++){
                newFront[i][j] = cube.up[i][j];
                newDown[i][j] = cube.front[i][j];
                newBack[i][j] = cube.down[i][j];
                newUp[i][size-(1+j)] = cube.back[i][size-(1+j)];
            }
        }
        cube.front = this.rh.transfert(cube.front, newFront);
        cube.up = this.rh.transfert(cube.up, this.rh.rotateTwice(newUp));
        cube.down = this.rh.transfert(cube.down, newDown);
        cube.back = this.rh.transfert(cube.back, this.rh.rotateTwice(newBack));
        return cube;
    }
    
    moveLwPrime(cube, nbLayers=2){
        for(let i=0;i<3;i++) 
            cube = this.moveLw(cube, nbLayers);
        return cube;
    }
    
    moveLw2(cube, nbLayers=2){
        for(let i = 0; i < 2; i++) 
            cube = this.moveLw(cube, nbLayers);
        return this.moveLw(newCube);
    }
    
    moveRw(cube, nbLayers=2){
        cube.right = this.rh.rotate(cube.right);
        let size = cube.right.length;

        let newFront = this.rh.genEmptyFace(size);
        let newUp = this.rh.genEmptyFace(size);
        let newBack = this.rh.genEmptyFace(size);
        let newDown = this.rh.genEmptyFace(size);

        for(let j=0;j<nbLayers;j++){
            for(let i=0;i<size;i++){
                newFront[i][size-(1+j)] = cube.down[i][size-(1+j)];
                newUp[i][size-(1+j)] = cube.front[i][size-(1+j)];
                newBack[i][size-(1+j)] = cube.up[i][size-(1+j)];
                newDown[i][0+j] = cube.back[i][0+j];
            }
        }
        cube.front = this.rh.transfert(cube.front, newFront);
        cube.up = this.rh.transfert(cube.up, newUp);
        cube.back = this.rh.transfert(cube.back, this.rh.rotateTwice(newBack));
        cube.down = this.rh.transfert(cube.down, this.rh.rotateTwice(newDown));
        return cube;
    }
    
    moveRwPrime(cube, nbLayers=2){
        for(let i = 0; i <3;i++) 
            cube = this.moveRw(cube, nbLayers);
        return cube;
    }
    
    moveRw2(cube, nbLayers=2){
        for(let i = 0; i < 2; i++) 
            cube = this.moveRw(cube, nbLayers);
        return this.moveRw(newCube);
    }

    moveFw(cube, nbLayers=2){
        cube.front = this.rh.rotate(cube.front);
        let size = cube.front.length;

        let newUp = this.rh.genEmptyFace(size);
        let newLeft = this.rh.genEmptyFace(size);
        let newRight = this.rh.genEmptyFace(size);
        let newDown = this.rh.genEmptyFace(size);

        for(let j=0;j<nbLayers;j++){
            for(let i=0;i<size;i++){
                newUp[i][size-1-j] = cube.left[i][size-1-j];
                newLeft[j][i] = cube.down[j][i];
                newRight[size-1-j][i] = cube.up[size-1-j][i];
                newDown[i][j] = cube.right[i][j];
            }
        }

        cube.up = this.rh.transfert(cube.up, this.rh.rotate(newUp));
        cube.left = this.rh.transfert(cube.left, this.rh.rotate(newLeft));
        cube.right = this.rh.transfert(cube.right, this.rh.rotate(newRight));
        cube.down = this.rh.transfert(cube.down, this.rh.rotate(newDown));
        return cube;
    }

    moveFwPrime(cube, nbLayers=2) {
        for(let i = 0; i < 3; i++)
            cube = this.moveFw(cube, nbLayers);
        return cube;
    }

    moveFw2(cube, nbLayers=2) {
        for(let i = 0; i < 2; i++)
            cube = this.moveFw(cube, nbLayers);
        return cube;
    }
}
