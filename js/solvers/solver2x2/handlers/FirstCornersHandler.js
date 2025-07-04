
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
        //todo: implement this
        return cube;
    }

    _handleWGOCorner(cube){
        //todo: implement this
        return cube;
    }

    _handleWBOCorner(cube){
        //todo: implement this
        return cube;
    }

}
