
class WBOProcessor {
    constructor(){
        this.data = {};
    }

    process(inputData){
        return (inputData in this.data) ? this.data[inputData] : "???";
    }
}
