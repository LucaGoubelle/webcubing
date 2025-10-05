// TODO: Implement axis moves (x, z)

class AxisMoves extends Moves {

    moveY(cube){
        cube.up = this.rh.rotate(cube.up);
        cube.down = this.rh.rotateAsync(cube.down);
    
        let newFront = this.rh.copyFace(cube.right);
        let newRight = this.rh.copyFace(cube.back);
        let newLeft = this.rh.copyFace(cube.front);
        let newBack = this.rh.copyFace(cube.left);
    
        cube.front = this.rh.transfert(cube.front, newFront);
        cube.right = this.rh.transfert(cube.right, newRight);
        cube.left = this.rh.transfert(cube.left, newLeft);
        cube.back = this.rh.transfert(cube.back, newBack);
    
        return cube;
    }
    
    moveYPrime(cube){
        for(let i=0;i<3;i++) 
            cube = this.moveY(cube);
        return cube;
    }
    
}
