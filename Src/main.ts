//varuable

let a: number;
//error a="hello"
//error a=false
a = 200;

let b: number | string | Date;
b = 200;
//error b = false
b = "true";
b = new Date();

let c: any;
c = true;
c = "hello";
c = 145;
c = new Date;

let f;
f = "hello";
f = 250;


//---------------FUNCTION-----------------
function func(age: number, name: string) {
    console.log(name + " is " + age + " years old ")
}
func(28, "israel")