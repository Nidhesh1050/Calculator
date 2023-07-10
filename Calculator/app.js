(function () {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');


    buttons.forEach(function (button) {
        button.addEventListener('click', function (e){
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });


    equal.addEventListener('click', function(e){
        // when the user click the any button then use the addEventListener
        if(screen.value === ''){
            screen.value = "Please enter";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function(e){
        screen.value = "";
    })
})();