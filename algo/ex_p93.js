function hypotenuse(segment1, segment2) {
    return Math.sqrt(segment1 * segment1 + segment2 * segment2);
}
console.log(hypotenuse(3, 4));


function equation(a, b, c) {
    let sol1,sol2;
    let discriminant = b * b - (4 * a * c);
    if(a !== 0) {
        if (discriminant > 0) {
            sol1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            sol2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            return [sol1, sol2];
        }
        else if (discriminant === 0) {
            sol1 = -(b / (2 * a));
            return sol1;
        }
        return "Solution complexe";
    }
    return "Erreur a = 0";
}
console.log(equation(-1, 6, -9));
