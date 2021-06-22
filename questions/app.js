const questions = document.querySelectorAll('.questions');
const btns = document.querySelectorAll('#icons');

/*iterate between each div question element*/
questions.forEach(function( question ){
    const btn = question.querySelector('#icons');
    btn.addEventListener('click', function(){
        const para = question.querySelector('.para');
        /* remove show class for the non-selected paragraphs */
        questions.forEach(function( otherQ ){
            const paraAux = otherQ.querySelector('.para');
            if( para !== paraAux ){
                paraAux.classList.remove('show');
                /* All i buttons will have plus icon*/
                btns.forEach(function(b){
                    b.classList.remove('hide-item');
                });
            }
        });
        /*Change icon button for the current selected button*/
        para.classList.toggle('show');
        if ( btn.classList.contains('hide-item') ){
            btn.classList.remove('hide-item');
        }
        else{
            btn.classList.add('hide-item');
        }
        console.log(btn);
    });
});