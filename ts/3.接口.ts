interface labelObject{
    label: string
}
function printInter(labelObject: labelObject){
    console.log(labelObject.label);
}
// 接口传入参数必须包含某一参数
let myObj = { label: "123", size: 10};
printInter(myObj);


// 添加可选属性
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare(config: SquareConfig): {color: string; area: number}{
    let newSquare = {color: "white", area: 100};
    if(config.color){
        newSquare.color = config.color;
    }
    if (config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color: "black"});
console.log(mySquare);
createSquare({colr: 'sad1'} as SquareConfig);

// 只读属性

interface Point{
    readonly x: number;
    readonly y: number;
}
let point: Point = {
    x: 10,
    y: 10
}
// point.x = 12;

// 只读数组

let a: number[] = [1,2,3,3];
let arr: ReadonlyArray<number> = a;
// arr[0] = 12;

interface SearchFunc{
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string){
    let result = source.search(subString);
    return result > -1
}
