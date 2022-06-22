let num1 = +prompt('Введите первое число:', '')
let num2 = +prompt('Введите второе число:', '')

const gcd_two_numbers = () => {
  let x = Math.abs(num1);
  let y = Math.abs(num2);
  while(y) {
    let t = y;
    y = x % y;
    x = t;
  }
  return x;
}
console.log(gcd_two_numbers());