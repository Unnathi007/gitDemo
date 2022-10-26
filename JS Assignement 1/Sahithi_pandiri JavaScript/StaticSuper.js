// class Base{
//     static id=100;
// }
// class Child extends Base{
//    static k=super.id;
//    display(){
//     console.log(k);
//    }

// }
//  let c=new Child();
//  c.display();

class Base {
    static baseStaticField = 90;
    baseMethod() {
      return 10;
    }
  }
  
  class Extended extends Base {
    extendedField = super.baseMethod(); // 10
    static extendedStaticField = super.baseStaticField; // 90
    display(){
        console.log(extendedStaticField)
    }
  }
  let e= new Extended()
  e.display()