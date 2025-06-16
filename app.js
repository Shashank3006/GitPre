function app(abc){

    let a = abc
    function foo(abc) {
        console.log(abc-a);
    }
    return foo;
}
const abc=app(`rrr`);
abc(2); // Output: 3
const abc1= document.querySelector('#show');
abc1.addEventListener('click', function() {
    abc(5); // Output: 2
});