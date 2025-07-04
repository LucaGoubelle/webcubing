
class Mover {

    constructor(){
        this.stdMoves = new STDMoves();
        this.axisMoves = new AxisMoves();
        this.wMoves = new WMoves();
    }

    /**
     * Move the cube with a specific move
     * 
     * @author: LucaGoubelle
     */
    simpleMove(cube, mv){
        try{
            switch(mv){
                case "U": return this.stdMoves.moveU(cube);
                case "U'": return this.stdMoves.moveUPrime(cube);
                case "U2": return this.stdMoves.moveU2(cube);
    
                case "R": return this.stdMoves.moveR(cube);
                case "R'": return this.stdMoves.moveRPrime(cube);
                case "R2": return this.stdMoves.moveR2(cube);
    
                case "L": return this.stdMoves.moveL(cube);
                case "L'": return this.stdMoves.moveLPrime(cube);
                case "L2": return this.stdMoves.moveL2(cube);
    
                case "F": return this.stdMoves.moveF(cube);
                case "F'": return this.stdMoves.moveFPrime(cube);
                case "F2": return this.stdMoves.moveF2(cube);
    
                case "D": return this.stdMoves.moveD(cube);
                case "D'": return this.stdMoves.moveDPrime(cube);
                case "D2": return this.stdMoves.moveD2(cube);
    
                case "y": return this.axisMoves.moveY(cube);
                case "y'": return this.axisMoves.moveYPrime(cube);
                
                case "Uw": return this.wMoves.moveUw(cube);
                case "Uw'": return this.wMoves.moveUwPrime(cube);
                case "Uww": return this.wMoves.moveUw(cube, 3);
                case "Uww'": return this.wMoves.moveUwPrime(cube, 3);
    
                case "Dw": return this.wMoves.moveDw(cube);
                case "Dw'": return this.wMoves.moveDwPrime(cube);
                case "Dww": return this.wMoves.moveDw(cube, 3);
                case "Dww'": return this.wMoves.moveDwPrime(cube, 3);
    
                case "Rw": return this.wMoves.moveRw(cube);
                case "Rw'": return this.wMoves.moveRwPrime(cube);
                case "Rww": return this.wMoves.moveRw(cube, 3);
                case "Rww'": return this.wMoves.moveRwPrime(cube, 3);
    
                case "Lw": return this.wMoves.moveLw(cube);
                case "Lw'": return this.wMoves.moveLwPrime(cube);
                case "Lww": return this.wMoves.moveLw(cube, 3);
                case "Lww'": return this.wMoves.moveLwPrime(cube, 3);
    
                case "Fw": return this.wMoves.moveFw(cube);
                case "Fw'": return this.wMoves.moveFwPrime(cube);
                case "Fww": return this.wMoves.moveFw(cube, 3);
                case "Fww'": return this.wMoves.moveFwPrime(cube, 3);
    
                default: return cube;
            }
        } catch(error){
            console.error(error, "Invalid cube data");
            throw new CubeMoverException();
        }
        
    }

    /**
     * Move the cube with a specific sequence of moves
     * Throw a CubeMoverException if wrong params
     * @author: LucaGoubelle
     */
    multiMoves(cube, mvs){
        try{
            let arrMv = mvs.split(" ");
            for(let mv of arrMv)
                cube = this.simpleMove(cube, mv);
            return cube;
        } catch(error){
            console.error(error, "Invalid cube data");
            throw new CubeMoverException();
        }
    }
}
