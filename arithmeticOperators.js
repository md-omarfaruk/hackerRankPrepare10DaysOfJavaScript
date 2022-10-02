

/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let areaLength = parseFloat(length)
    let areaWidth = parseFloat(width)
    let area = areaLength * areaWidth;

    return parseFloat(area);
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let areaLength = parseFloat(length)
    let areaWidth = parseFloat(width)
    let sum = areaLength + areaWidth;
    let perimeter = 2 * parseFloat(sum);

    return parseFloat(perimeter);
}

