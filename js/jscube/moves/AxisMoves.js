// TODO: Implement axis moves (x, z)

class AxisMoves {

    constructor(){
        this.rh = new RotateHelpers();
    }

    moveY(cube){
        cube.up = this.rh.rotate(cube.up);
        cube.down = this.rh.rotateAsync(cube.down);
    
        let newFront = JSON.parse(JSON.stringify(cube.right));
        let newRight = JSON.parse(JSON.stringify(cube.back));
        let newLeft = JSON.parse(JSON.stringify(cube.front));
        let newBack = JSON.parse(JSON.stringify(cube.left));
    
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
