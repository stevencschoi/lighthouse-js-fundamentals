const calculateRectangleArea = (length, width) => {
  let area = length * width;
  if (area > 0) {
    return area;
  } else {
    return undefined;
  }
}

const calculateTriangleArea = (base, height) => {
  let area = base * height / 2;
  if (area > 0) {
    return area;
  } else {
    return undefined;
  }
}

const calculateCircleArea = (radius) => {
  let area = Math.PI() * (radius^2);
  if (area > 0) {
    return area;
  } else {
    return undefined;
  }
}