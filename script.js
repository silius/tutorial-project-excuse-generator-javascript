let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','baked','crushed','broke'];
let what = ['my homework','some apple pie' ,'the keys', 'the car'];
let when = ['before the class','during my lunch','when I finished','while I was praying'];

const myExcuse = () => {
  //let indice = Math.floor((Math.random() * 4));
  return document.getElementById('excuse').innerHTML=`${who[Math.floor((Math.random() * 4))]} ${action[Math.floor((Math.random() * 4))]} ${what[Math.floor((Math.random() * 4))]} ${when[Math.floor((Math.random() * 4))]} `  
}