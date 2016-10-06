var rect = require('./rectangle-2')

function solveRect (l, b) {
  console.log('\nsolve l=' + l + ' and b=' + b)
  rect(l, b, function (err, rectangle) {
    if (err) {
      console.log(err)
    }else {
      console.log('Area rectangle of dimensions lenght=' + l + ' and breadth=' + b + ' is ' + rectangle.area(l, b))
      console.log('Perimeter of rectangle of dimensions lenght=' + l + ' and breadth=' + b + ' is ' + rectangle.perimeter(l, b))
    }
  })
}

solveRect(2, 4)
solveRect(3, 5)
solveRect(-3, 5)
