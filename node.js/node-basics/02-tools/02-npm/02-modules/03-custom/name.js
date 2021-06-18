const name = {
  surname: 'zhang',
  sayName(){
    console.log(this.surname)
  }
}

const age = {
  age: 18,
  sayAge(){
    console.log(this.age)
  }
}
// module.exports = {
//   name,
//   age
// } 

exports.name = name
exports.age = age