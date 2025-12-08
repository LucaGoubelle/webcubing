
class CrownCaster {

    cast(crown){
        let result = "";
        for(let row of crown){
            for(let elem of row)
                result += (elem == "yellow") ? "1" : "0";
            result += "_";
        }
        return result;
    }
}
