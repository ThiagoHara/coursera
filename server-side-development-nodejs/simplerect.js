var rect = {
    perimeter: function(x,y){
        return (2*(x+y));
    },
    area: function(x, y){
        return (x*y);
    }
}
function solveRect(l,b){
    console.log("solve l="+l+" and b="+b);
    if(l<0 || b<0){
        console.log("l and b must be greater than 0");
    }else{
        console.log("Area of lenght="+l+" and breadth="+b+" is "+ rect.area(l,b));
        console.log("Perimeter of rectangle of dimensions lenght="+l+" and breadth="+b+" is "+  rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);