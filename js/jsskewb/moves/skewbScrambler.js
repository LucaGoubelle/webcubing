
class SkewbScrambler {
    scrambleSkewb(skewb){
        let scrambles = [
            "B' R' F R' F' R' L' F B' R L' B' F' R F L' R' L F' R F R B' R L",
            "B' F R' B' R' L R' B F' R' L B F' B F B L B' L R L' F L B L",
            "F' B' L' B R B R' B' F R' F' L B' R B L' B R' F' B R' L F L' B",
            "B' R' L R' B F L B' L' R B' L B R B' R' F' B L' R' L R F L R",
            "L B' L R L R' F R F' L' R B F L R' B' F' L' R' B' R L R' L R"
        ];
        let randint = Math.floor(Math.random() * (scrambles.length-1 - 0 + 1) + 0);
        let scrambling = scrambles[randint];
        skewb = moves.multiMoves(skewb, scrambling);
        return skewb;
    }
}