
class MinxRotateUtils {

    static rotateArr(arr, k){
        for(let i=0;i<k;i++) 
            arr.unshift(arr.pop());
        return arr;
    }

    static copyFace(face){
        return JSON.parse(JSON.stringify(face));
    }
}
