const topics = document.querySelectorAll('#history, #vision, #goals');
const paragraphs = document.querySelectorAll('#history-para, #vision-para, #goals-para');

topics.forEach( function(topic){ /* Enable / Disable topic */
    topic.addEventListener('click', function(){
        if( !topic.classList.contains('bg-white') ){
            topic.classList.add('bg-white'); 
        }
        showParagraph(topic.textContent);
        topics.forEach( function(topic2change){
            if ( topic !== topic2change ){
                topic2change.classList.remove('bg-white');
            }
        } );
    });
});

function showParagraph(name){
    let hide = document.querySelector('#' + name + '-para');
    paragraphs.forEach( ( paragraph ) => {
        paragraph.classList.add('hidden');
    });
    hide.classList.remove('hidden');
}