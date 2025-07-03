
class CrownScanner {

    scanCrown(cube){
        let crown = [];
        crown.push(this._scanBackOfCrown(cube));
        for(let i=0;i<cube.up.length; i++)
            crown.push(this._scanUpOfCrown(cube, i));
        crown.push(this._scanFrontOfCrown(cube));
        return crown;
    }

    _scanBackOfCrown(cube){
        let len = cube.up.length;
        let last = len-1;
        let row = [];
        for(let i=last;i>=0;i--)
            row.push(cube.back[0][i]);
        return row;
    }

    _scanFrontOfCrown(cube){
        let len = cube.up.length;
        let row = [];
        for(let i=0;i<len;i++)
            row.push(cube.front[0][i]);
        return row;
    }

    _scanUpOfCrown(cube, index){
        let len = cube.up.length;
        let row = [];
        row.push(cube.left[0][index]);
        for(let i=0;i<len;i++)
            row.push(cube.up[index][i]);
        row.push(cube.right[0][last-index]);
        return row;
    }

}
