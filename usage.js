var letters = ['A', 'B'];
var numbers = [1, 2];
var otherChars = ['@', '#'];

var output1 = combine([letters, numbers, otherChars], '-');
output1.join('\n');
/*
A-1-@
A-1-#
A-2-@
A-2-#
B-1-@
B-1-#
B-2-@
B-2-#
*/

var output2 = combine([letters, combine([numbers, otherChars], '-')], '... ');
output2.join('\n');
/*
A... 1-@
A... 1-#
A... 2-@
A... 2-#
B... 1-@
B... 1-#
B... 2-@
B... 2-#
*/
