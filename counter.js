(function(){
    var counter = 0;
    var echo = function(){
        if (counter === 5){
            return;
        }

        setTimeout(function(){
            counter++;
            echo();
            process.stdout.write(counter.toString() + "\n");
        }, 1000);
    }

    echo();
})();
