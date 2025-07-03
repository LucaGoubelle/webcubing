
class SkewbDrawer {
    constructor(){
        this.up_polygons = [
            [[206,0], [299,27], [132,37]],
            [[299,27], [392,54], [324,96]],
            [[324,96], [255,137], [156,106]],
            [[156,106], [58,73], [132,37]],
            [[132,37], [299,27], [324,96], [156,106]]
        ];
        this.front_polygons = [
            [[58,73], [156,106], [62,179]],
            [[156,106], [255,137], [254,248]],
            [[254,248], [253,360], [160,322]],
            [[160,322], [66,284], [62,179]],
            [[62,179], [156,106], [254,248], [160,322]]
        ];
        this.right_polygons = [
            [[255,137], [324,96], [254,248]],
            [[324,96], [392,54], [388,157]],
            [[388,157], [385,260], [318,310]],
            [[318,310], [253,360], [254,248]],
            [[254,248], [324,96], [388,157], [318,310]]
        ];
    }

    draw(canvas, skewb){
        for(let i=0; i<this.up_polygons.length; i++)
            drawPolygon(canvas, this.up_polygons[i], skewb.up[i]);
        for(let i=0; i<this.front_polygons.length; i++)
            drawPolygon(canvas, this.front_polygons[i], skewb.front[i]);
        for(let i=0; i<this.right_polygons.length; i++)
            drawPolygon(canvas, this.right_polygons[i], skewb.right[i]);
    }
}
