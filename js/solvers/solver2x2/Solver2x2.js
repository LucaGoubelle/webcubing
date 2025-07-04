
class Solver2x2 {

    constructor(){
        this.startHandler = new StartHandler();
        this.firstCornersHandler = new FirstCornersHandler();
        this.lastFaceHandler = new LastFaceHandler();
    }

    solve(cube){
        cube = this.startHandler.handle(cube);
        cube = this.firstCornersHandler.handle(cube);
        cube = this.lastFaceHandler.handle(cube);
        return cube;
    }
}
