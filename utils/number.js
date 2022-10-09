// Number
const num = 15.765;
const nan = 5 / "a";
const infinity = 5 / 0;
const _infinity = -5 / 0;

num.valueOf();
num.toString();
num.toFixed(2);
num.toPrecision(2);
num.toExponential(2);
parseInt(num);
parseFloat(num);

isNaN(nan);
Number(num);
Number(true);
Number.isInteger(num);
Number.isFinite(infinity)
Number.NaN;
Number.EPSILON;
Number.MAX_VALUE;
Number.MIN_VALUE;
Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER;
Number.POSITIVE_INFINITY;
Number.NEGATIVE_INFINITY;

Math.PI;
Math.sqrt(16);
Math.sign(num);
Math.abs(-num);
Math.ceil(num);
Math.floor(num);
Math.round(num);
Math.trunc(num);
Math.pow(2, 3);
Math.min(4, 7, 9, 12, 15);
Math.max(4, 7, 9, 12, 15);
Math.floor(Math.random() * 100);