
class FirstCornersHandler {
    
    constructor(){
        this.seeker = new Corner3Seeker();
        //processors
        this.wgrProcessor = new WGRProcessor();
        this.wgoProcessor = new WGOProcessor();
        this.wboProcessor = new WBOProcessor();
    }

    handle(cube){
        cube = this._handleWGRCorner(cube);
        cube = this._handleWGOCorner(cube);
        cube = this._handleWBOCorner(cube);
        return cube;
    }

    _handleWGRCorner(cube){
        let corner = this.seeker.seekCorner(cube, [
            "white_green_red", "white_red_green",
            "green_white_red", "green_red_white",
            "red_white_green", "red_green_white"
        ]);
        let sequence = this.wgrProcessor.process(corner);
        cube = moves.multiMoves(cube, sequence);
        return cube;
    }

    _handleWGOCorner(cube){
        let corner = this.seeker.seekCorner(cube, [
            "white_green_orange", "white_orange_green",
            "green_white_orange", "green_orange_white",
            "orange_white_green", "orange_green_white"
        ]);
        let sequence = this.wgoProcessor.process(corner);
        cube = moves.multiMoves(cube, sequence);
        return cube;
    }

    _handleWBOCorner(cube){
        let corner = this.seeker.seekCorner(cube, [
            "white_blue_orange", "white_orange_blue",
            "blue_white_orange", "blue_orange_white",
            "orange_white_blue", "orange_blue_white"
        ]);
        let sequence = this.wboProcessor.process(corner);
        cube = moves.multiMoves(cube, sequence);
        return cube;
    }

}
