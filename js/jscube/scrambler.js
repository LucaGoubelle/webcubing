
class CubeScrambler {
    scrambleCube(cube){
        try {
            let scrambles = [
                "F' L2 R2 D2 L2 D R' F' U B L R2 U' L U L' R D' L F2 B' D' L' D U2",
                "B2 D2 U' F L2 R' F L R F2 D2 L B' U2 D' R U' B U2 R U2 D' L F' B",
                "B L D L2 B2 L2 U' F2 D' U' L' B D' F2 D U R' F L F2 R' L' D F U",
                "R2 L' U2 R2 B2 R' B' D R2 L2 U D' B' D F2 L' F' D' F' U' F U2 R2 U R2",
                "L' B F U' F L B2 U2 D R' D L2 U F' D U2 L' D B2 U R' L D2 F R2"
            ];
            let randint = Math.floor(Math.random() * (scrambles.length-1 - 0 + 1) + 0);
            let scrambling = scrambles[randint];
            cube = moves.multiMoves(cube, scrambling);
            return cube;
        } catch (error) {
            console.error(error, "Invalid Cube data");
            throw new CubeScramblerException();
        }
    }

    scrambleBigCube(cube){
        try {
            let scrambles = [
                "U' F2 U' Fw' U' Dw R F2 U B2 R' B Fw U L' Uw Lw Dw2 U Fw2 Lw Uw' F U' Bw' D Fw Lw2",
                "F Lw2 F' Uw' Fw B' Lw2 Fw Lw2 D Fw2 D' U' R U2 B' D' F' Rw Lw2 U Dw2 Bw' L' Fw L",
                "Fw' Lw' Uw' F' U' L F' Dw' B2 Rw D F2 Lw2 Dw U R L2 F2 U2 L' Fw' U2 F2 R Fw2"
            ];
            let randint = Math.floor(Math.random() * (scrambles.length-1 - 0 + 1) + 0);
            let scrambling = scrambles[randint];
            cube = moves.multiMoves(cube, scrambling);
            return cube;
        } catch (error) {
            console.error(error, "Invalid Cube data");
            throw new CubeScramblerException();
        }
    }

    scrambleHugeCube(cube){
        try{
            let scramble = "R Dw2 L' Fw2 Bww' Lww Dww' F Bw Dww F Dww2 Rww Lw2 Fw' Rw D2 B D2 Bww2 Fw Dww "
            scramble += "Fw' Lww' Bww2 F' Lw Dww Uww' Rw F' U Rww' Fw2 D' Bww D2 Lw Bw Lw Bww' U' F Rww Bw2 "
            scramble += "Dww2 Fw Bw2 Lww' B2 Uww' Fw B2 Dw' Uww Lw' Uw2 Bw2 D' L' Uw' Lw2 U2 Dw' L Fww R2 Bw2 Lww2 F2 U Lww2 Bw2 Rw' F2 Uw2 Dw F2 Lww' Rw2 "
            cube = moves.multiMoves(cube, scramble);
            return cube;
        } catch(error){
            console.error(error, "Invalid Cube data");
            throw new CubeScramblerException();
        }
    }
}
