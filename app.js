function app(abc){

    let a = abc
    function foo(abc) {
        console.log(abc-a);
    }
    return foo;
}
const abc=app(`rrr`);
abc(2); // Output: 3