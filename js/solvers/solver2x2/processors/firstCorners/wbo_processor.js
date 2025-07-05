
class WBOProcessor {
    constructor(){
        this.data = {
            "up_front_right::white_blue_orange" : "L' U2 L U' L' U L",
            "up_front_right::orange_white_blue" : "U L' U' L",
            "up_front_right::blue_orange_white" : "L' U L",
            
            "up_front_left::white_orange_blue" : "y' "+CubeAlgorithms.ELEVATOR+" y",
            "up_front_left::blue_white_orange" : "U' L' U L",
            "up_front_left::orange_blue_white" : "L' U' L",

            "up_back_left::white_blue_orange" : "U' y' "+CubeAlgorithms.ELEVATOR+" y",
            "up_back_left::orange_white_blue" : "U' L' U' L",
            "up_back_left::blue_orange_white" : "U2 L' U L",
            
            "up_back_right::white_orange_blue" : "U2 y' "+CubeAlgorithms.ELEVATOR+" y",
            "up_back_right::blue_white_orange" : "L' U2 L",
            "up_back_right::orange_blue_white" : "U2 L' U' L",

            "down_front_left::orange_white_blue" : "L' U L U' L' U L",
            "down_front_left::blue_orange_white" : "L' U' L U L' U' L"
        };
    }

    process(inputData){
        return (inputData in this.data) ? this.data[inputData] : "???";
    }
}
