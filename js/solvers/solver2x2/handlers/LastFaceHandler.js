
class LastFaceHandler {
    
    constructor(){
        this.ollScanner = new OLLScanner();
        this.pllScanner = new PLLScanner();
        this.ollProcessor = new OLLProcessor();
        this.pllProcessor = new PLLProcessor();
    }

    handle(cube){
        cube = this._handleOLL(cube);
        cube = this._handlePLL(cube);
        cube = this._handleAUF(cube);
        return cube;
    }

    _handleOLL(cube){
        let ollConfig = this.ollScanner.scanOLL(cube);
        let sequence = this.ollProcessor.process(ollConfig);
        cube = moves.multiMoves(cube, sequence);
        return cube;
    }

    _handlePLL(cube){
        let pllConfig = this.pllScanner.scanPLL(cube);
        let sequence = this.pllProcessor.process(pllConfig);
        cube = moves.multiMoves(cube, sequence);
        return cube;
    }

    _handleAUF(cube){
        let color = cube.front[0][0];
        let hmap = {
            "green": "U2",
            "orange": "U",
            "red": "U'"
        };
        let sequence = (color in hmap) ? hmap[color] : "???";
        cube = moves.multiMoves(cube, sequence);
        return cube;
    }
}
