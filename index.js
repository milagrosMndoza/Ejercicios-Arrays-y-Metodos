var assert = require('assert');



//Ejercicio 1
 var arr = [4,4,5,12];
 var num = 9;
 function ejercicio1(arreglo, num){
    var resultado = arreglo.reduce(function(x,y){
    return x*y;
  });
  if(!isNaN(num)){
    return resultado * num;
  }
  return  resultado;

 }
 describe('Ejercicio 1', function (){
  it('debe ser el resultado 8640', function(){
          assert.equal(8640, ejercicio1([4,4,5,12], 9));
   });
   it('debe ser el resultado 6', function(){
           assert.equal(6, ejercicio1([2,3], "hola"));
       });
    });

//Ejercicio 2
var validarNum = 784;
var celular = [784123123, 355676784, 342354354];

function ejercicio2 (celular, num){
var resultado = celular.filter(function(celu){
 celu= celu.toString();
  num= num.toString();
  if (celu.substr(0,3) == num||celu.substr(-3) == num){
    return true;
      }
   else{
     return false;
      }

});
  return resultado;
}

 describe('Ejercicio 2', function (){
 it('debe ser el resultado 784123123, 355676784 ', function(){
         assert.deepEqual([784123123, 355676784],ejercicio2([784123123, 355676784, 342354354],784));

     });
  });

  //Ejercicio 3
  var numeroAleatorio = [7, 21, 44, 60, 77, 35];
  var numeroX= 7;
  function ejercicio3(numeroAleatorio, numeroX){
  var array = [];
  numeroAleatorio.forEach(function(parametro){
    if(parametro%numeroX === 0){
    array.push(parametro);
  }

});
  return array;
}
describe('Ejercicio 3', function (){
it('debe ser el resultado 7, 21, 77, 35 ', function(){
        assert.deepEqual([7, 21, 77, 35],ejercicio3([7, 21, 44, 60, 77, 35],7));

    });
 });

//Ejercicio 4
var arreglo = [2, 5, 7, 2, 3, 8, 10];
function ejercicio4(arreglo){
 var posicionX2 = arreglo.map(function(miNumeroArreglo){
                 return ((miNumeroArreglo*2)+1);
                    });
        return posicionX2;
                  }

describe('Ejercicio 4', function (){
it('debe ser el resultado 5, 11, 15, 5, 7, 17, 21 ', function(){
        assert.deepEqual([5, 11, 15, 5, 7, 17, 21],ejercicio4([2, 5, 7, 2, 3, 8, 10]));

    });
 });

 //Ejercicio 5
 function ejercicio5(arreglo){
 var celsius= [10, 20, 30, 40 , 50 , 60];
var convertir = arreglo.map(function(c){
  return ((9*c + (32 *5))/5);
});
return convertir;
}
describe('Ejercicio 5', function (){
it('debe ser el resultado 50, 68, 86, 104, 122, 140 ', function(){
        assert.deepEqual([50, 68, 86, 104, 122, 140],ejercicio5([10, 20, 30, 40 , 50 , 60]));
    });
 });

 //Ejercicio 6
 var miArray = [1,2,3,4];
function ejercicio6(miArray){
  var resultado= miArray.reduce(function(x,y){
    return x*y
  });
  return resultado;
  }
  describe('Ejercicio 6', function (){
  it('debe ser el resultado 24 ', function(){
          assert.deepEqual(24,ejercicio6([1,2,3,4]));
      });
   });
 //Ejercicio 7
var edad =[20,16,89,6];
function ejercicio7(arreglo){
  var calcEdad = arreglo.filter(function(x){
    return x>18;
  });
  var resultado= calcEdad.map(function(e){
    return new Date().getFullYear() - e;
  });
  return resultado;
}
describe('Ejercicio 7', function (){
it('debe ser el resultado 1997, 1928 ', function(){
        assert.deepEqual([1997, 1928],ejercicio7([20,16,89,6]));
    });
 });
