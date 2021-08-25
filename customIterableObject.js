/*
-  Custom Iterable Object
*/

const myObject = {
    name: "Omar",
    country: "Egypt",
    age: "23",
    favSkill: "JS",
    [Symbol.iterator](){
        let step = 0;
        let properties = Object.keys(this);
        // console.log(properties);
        return{
            next(){
                return{
                    value: myObject[properties[step]],   //myObject
                    done: step++ === properties.length
                }
            }
        }
    }
};

for (let prop of myObject){
    console.log(prop);
};