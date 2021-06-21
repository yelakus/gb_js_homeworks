(null == 0) ? console.log(1) : null;

(null === 0) ? console.log(2) : null;

(null > 0) ? console.log(3) : null;

(null < 0) ? console.log(4) : null;

(null >= 0) ? console.log(5) : null;

(null <= 0) ? console.log(6) : null;
 /*
Всю инфу я взял отсюда: https://habr.com/ru/company/ruvds/blog/337732/

Вкратце, как я понял, при сравнении, операторы сначала пытаются преобразовать свои операнды к элементарным типам, но null не производит преобразование, после чего его пытаются преобразовать к типу number, что дает результат +0. При сравнении +0 > или < 0 ответ будет false

При сравнении равенства есть условие, при котором, если сравниваются null и число, выдаётся ответ false. То есть, из-за этого оператора операторы >= и <= возвращают true, так как, цитирую,: "если у нас есть два числа, x и y, и если x не меньше, чем y, тогда x должно быть больше чем y или равно ему".
 */
