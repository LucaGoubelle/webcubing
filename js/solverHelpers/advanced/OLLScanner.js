
class OLLScanner {

    constructor(){
        this.scanner = new CrownScanner();
        this.caster = new CrownCaster();
    }

    scanOLL(cube){
        let crown = this.scanner.scanCrown(cube);
        let result = this.caster.cast(crown);
        return result;
    }
}
