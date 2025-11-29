
class F2LScanner {

    scanPairsLeft(cube){
        let result = "";
        result += cube.up[2][1]+"_"+cube.front[0][1]+"::";
        result += cube.up[2][2]+"_"+cube.front[0][2]+"_"+cube.right[0][0];
        return result;
    }

    scanPairsRight(cube){
        let result = "";
        result += cube.up[1][2]+"_"+cube.right[0][1]+"::";
        result += cube.up[2][2]+"_"+cube.right[0][0]+"_"+cube.front[0][2];
        return result;
    }

    scanIn(cube){
        let result = cube.front[1][2]+"_"+cube.right[1][0]+"::";
        result += cube.down[0][2]+"_"+cube.front[2][2]+"_"+cube.right[2][0];
        return result;
    }

    scanHalfIn(cube){
        let result = cube.front[1][2]+"_"+cube.right[1][0]+"::";
        result += cube.up[2][2]+"_"+cube.front[0][2]+"_"+cube.right[0][0];
        return result;
    }

}
