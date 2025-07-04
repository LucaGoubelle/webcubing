
class StartHandler {
    
    constructor(){
        this.wbrProcessor = new WBRProcessor();
        this.seeker = new Corner2Seeker();
        this.scanner = new Cube2x2Scanner();
    }

    handle(cube){
        let corner = this.scanner.scanCorner(cube, "down_front_right");
        if(corner == "white_blue_red")
            return cube; // nothing to do
        return this._handleFirstCorner(cube);
    }

    _handleFirstCorner(cube){
        let corner = this.seeker.seekCorner(cube, [
            "white_blue_red", "white_red_blue",
            "blue_white_red", "blue_red_white",
            "red_white_blue", "red_blue_white"
        ]);
        let sequence = this.wbrProcessor.process(corner);
        cube = moves.multiMoves(cube, sequence);
        return cube;
    }
}