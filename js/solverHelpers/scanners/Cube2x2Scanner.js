
class Cube2x2Scanner {

    scanCorner(cube, orient){
        let lastIndex = cube.front.length-1;
        let hmap = {
            'up_front_right': cube.up[lastIndex][lastIndex]+"_"+cube.front[0][lastIndex]+"_"+cube.right[0][0],
            'up_front_left': cube.up[lastIndex][0]+"_"+cube.front[0][0]+"_"+cube.left[0][lastIndex]
        };
        return (orient in hmap) ? hmap[orient] : "";
    }

    scanCorners(cube){
        let hmap = {
            'up_front_right': this.scanCorner(cube, 'up_front_right'),
            'up_front_left': this.scanCorner(cube, 'up_front_left')
        };
        return hmap;
    }

}
