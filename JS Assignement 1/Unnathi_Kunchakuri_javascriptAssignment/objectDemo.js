person={
    id:1,
    name:'sdfg',
    age:12,
    work:function(){
        console.log('hi');
    },
    display:function(){
        console.log(`id:${this.id} name:${this.name} age:${this.age}`);
    },
    disp:()=>{
        console.log(`id:${person.id} name:${person.name} age:${person.age}`);
    }
}
console.log(person.id);
console.log(person['id']);
person.work();
person.display();
naruto={
    sensei:['kakashi','iruka'],
    dreamgirl:'sakura',
    lover:'hinata',
    jutsu:'shadow-clone',
    friends:['shikamaru','sasuke'],
    appearance:'fox',
    shadowClone:function(){
       console.log("multiple clones generated");
    }
}
console.log(naruto);
naruto.shadowClone();
a1=['df',1,'sdffg',12.3,true];
a2=['sdfghjk','dfghj'];
for(let i=0;i<a1.length;i++){
    console.log(a1[i]);
}
a2.forEach(a=>{if(a.startsWith('s'))console.log(a)})
