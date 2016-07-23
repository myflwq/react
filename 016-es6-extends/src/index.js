
class Person {
  //consstructor构造函数固定名字实例化后可直接执行，不用调用
    constructor(name,weight){
    this.myName = name;
    this.myWeight = weight
      // console.log('my name is '+myName+' myWeight '+ myWeight);
    }
    sayName(){
        console.log('hello '+ this.myName +' myWeight '+ this.myWeight);
    }
}

//extends继承父类，拥有父类的属性方法
class Man extends Person{
  sayHaha(){
    console.log('hello');
  }
}

let people=new Man('liming','65kg');
//new是面向对象编程的关键字,类到对象的转换
people.sayHaha();
people.sayName();
