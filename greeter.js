// from node.js sample
// https://nodejs.org/api/process.html#process_process_stdin
console.log('回声服务')
process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write('【后端添加这个了】' + chunk);
    }
});
