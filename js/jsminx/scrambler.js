
class MinxScrambler {

    _genRandint(max){
        return Math.floor(Math.random() * (max - 0 + 1) + 0);
    }

    scrambleKilominx(minx){
        let scrambles = [
            "DL' U' R U2 DL' y B' F' L2 B' F y U DL' R L' F2 y R U F R2 U y DL F2 L2 B2 DL",
            "L' DL F2 L2 B' y F U2 B F' U2 y F2 DL F' B2 R' y B F2 R' U D y L U' B' R' F'",
            "B' U R2 B L2 R' F' R' L' U2 DL2 R F' L' U' R B DL U B2 U' F' DL B2 L2"
        ];
        let randint = this._genRandint(scrambles.length-1);
        let scrambling = scrambles[randint];
        minx = new KilominxMover().multiMoves(minx, scrambling);
        return minx;
    }

    scrambleMegaminx(minx){
        let scrambles = [
            "DL' U' R U2 DL' y B' F' L2 B' F y U DL' R L' F2 y R U F R2 U y DL F2 L2 B2 DL",
            "L' DL F2 L2 B' y F U2 B F' U2 y F2 DL F' B2 R' y B F2 R' U D y L U' B' R' F'",
            "B' U R2 B L2 R' F' R' L' U2 DL2 R F' L' U' R B DL U B2 U' F' DL B2 L2"
        ];
        let randint = this._genRandint(scrambles.length-1);
        let scrambling = scrambles[randint];
        minx = new MegaminxMover().multiMoves(minx, scrambling);
        return minx;
    }
}
