module.exports = () => {
  // ...
};
new Promise((resolve, reject) => {
  
})

const calculadora = (pathRuta) => {
  return new Promise((resolve, reject) => {
    const reuslt = sumar(5,6)
    const restado = restar(result, 2)
    const dividido = dividir(restado, 3)
    resolve(dividido)
    resolve(isAbsolute(pathRuta))
  })
}

calculadora('./readme.md')
.then((res)=>console.log('aquí', res))