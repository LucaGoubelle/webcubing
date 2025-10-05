
class MinxRotateUtils {

    rotateArr(arr, k){
        for(let i=0;i<k;i++) 
            arr.unshift(arr.pop());
        return arr;
    }

    copyFace(face){
        return JSON.parse(JSON.stringify(face));
    }
}
