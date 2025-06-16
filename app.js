function app(abc){

    let a = abc
    function foo(abc) {
        console.log(abc-a);
    }
    return foo;
}
const abc=app(`rrr`);
abc(2); // Output: 3
let show=document.querySelector('#show')
show.addEventListener('click',()=>{
   let a= document.createElement('h2')
    a.innerText="Hello World"
   let b=document.createElement('div')
   show.className="box"
   b.className="box1"
   b.append(a)
   show.append(b)

})