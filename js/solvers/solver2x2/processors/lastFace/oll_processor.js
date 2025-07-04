
class OLLProcessor {
    constructor(){
        this.data = {};
    }

    process(inputData){
        return (inputData in this.data) ? this.data[inputData] : "???";
    }
}
