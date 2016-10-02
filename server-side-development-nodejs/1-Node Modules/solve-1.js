var rect = require('./rectangle-1')

function solveRect (l, b) {
  console.log('\nsolve l=' + l + ' and b=' + b)
  if (l < 0 || b < 0) {
    console.log('l and b must be greater than 0')
  }else {
    console.log('Area of lenght=' + l + ' and breadth=' + b + ' is ' + rect.area(l, b))
    console.log('Perimeter of rectangle of dimensions lenght=' + l + ' and breadth=' + b + ' is ' + rect.perimeter(l, b))
  }
}

solveRect(2, 4)
solveRect(3, 5)
solveRect(-3, 5)