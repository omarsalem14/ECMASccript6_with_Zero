/*
Generators 4
--Delegating Generators
*/

function * generatNums(){
    yield 1;
    yield 2;
    yield 3;
};

function * generatNames(){
    yield "Omar"
    yield "Hassan"
};

function* deleGenerators(){
    yield * generatNums();
    yield * generatNames();
};

let genAll = deleGenerators();
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next()); 