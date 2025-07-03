
class SkewbBuilder {
    build(){
        let back = ["green","green","green","green","green"];
        let up = ["yellow","yellow","yellow","yellow","yellow"];
        let front = ["blue","blue","blue","blue","blue"];
        let left = ["orange","orange","orange","orange","orange"];
        let right = ["red","red","red","red","red"];
        let down = ["white","white","white","white","white"];
        return new Skewb(back, up, front, left, right, down);
    }
}
