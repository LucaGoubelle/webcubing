
class Solver2x2 {

    constructor(){
        this.startHandler = new StartHandler();
        this.firstCornersHandler = new FirstCornersHandler();
        this.lastFaceHandler = new LastFaceHandler();
    }

    solve(cube){
        console.log("[SOLVER]: start...");
        cube = this.startHandler.handle(cube);
        console.log("[SOLVER]: do first corners...");
        cube = this.firstCornersHandler.handle(cube);
        console.log("[SOLVER]: do last face...");
        cube = this.lastFaceHandler.handle(cube);
        console.log("[SOLVER]: done !");
        return cube;
    }
}
