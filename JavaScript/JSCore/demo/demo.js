function isValid(s) {
    if (s == "") return true
    let len = s.length;
    if (len % 2 !== 0) return false;
    let items = [];
    for (let item of s) {
        let m = items[items.length - 1];
        if (item == '(') {
            items.push();
        } else if (item == ')') {
            if (m == '(') {
                items.pop();
            }
        }
    }
    return items.length === 0;
}

console.log('isValid(s): ', isValid('[ '(', ')', ')', '(' ]'));
