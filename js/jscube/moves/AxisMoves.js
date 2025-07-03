// TODO: Implement axis moves (x, z)

class AxisMoves {

    moveY(cube){
        cube.up = rotate(cube.up);
        cube.down = rotateAsync(cube.down);
    
        let newFront = JSON.parse(JSON.stringify(cube.right));
        let newRight = JSON.parse(JSON.stringify(cube.back));
        let newLeft = JSON.parse(JSON.stringify(cube.front));
        let newBack = JSON.parse(JSON.stringify(cube.left));
    
        cube.front = transfert(cube.front, newFront);
        cube.right = transfert(cube.right, newRight);
        cube.left = transfert(cube.left, newLeft);
        cube.back = transfert(cube.back, newBack);
    
        return cube;
    }
    
    moveYPrime(cube){
        for(let i=0;i<3;i++) 
            cube = this.moveY(cube);
        return cube;
    }
}
