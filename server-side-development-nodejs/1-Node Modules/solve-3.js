var argv = require('yargs')
  .usage('Usage: node $0 --l=[num] --b=[num]')
  .demand(['l', 'b'])
  .argv
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
solveRect(argv.l,argv.b);