var A = new Array(), B = new Array() 
var C = []

var m = prompt("m = ")
var n = prompt("n = ")

A.length = m
B.length = m

for (var i=0; i<A.length; i++)
{
  A[i] = new Array()
  A[i].length = n

  B[i] = new Array()
  B[i].length = n
}

var min = -10 
var max = 10 

for (var i=0; i<A.length; i++)
  for (var j=0; j<A[i].length; j++)
  {
    A[i][j] = parseInt(min + Math.random()*(max - min + 1))
    B[i][j] = parseInt(min + Math.random()*(max - min + 1))
  }

document.write("A:<br>")
for (var i=0; i<A.length; i++)
{
  for (var j=0; j<A[i].length; j++)
    document.write(A[i][j] + " ")
  document.write("<br>")
}
document.write("<br>")

document.write("B:<br>")
for (var i=0; i<B.length; i++)
{
  for (var j=0; j<B[i].length; j++)
    document.write(B[i][j] + "\t")
  document.write("<br>")
}
document.write("<br>")

C.length = A.length

for (var i=0; i<C.length; i++)
{
  C[i] = [] 
  C[i].length = n 
}

for (var i=0; i<C.length; i++)
  for (var j=0; j<C[i].length; j++)
    C[i][j] = A[i][j]*A[i][j] + B[i][j]

document.write("C:<br>")
for (var i=0; i<C.length; i++)
{
  for (var j=0; j<C[i].length; j++)
    document.write(C[i][j] + " ")
  document.write("<br>")
}
