const store = Redux.createStore(moodReducer);

window.onload = function() {
    const emoji = document.querySelector('h2');

    document.querySelector('#happy')
        .addEventListener('click', function() {
            store.dispatch( {type: 'HAPPY', payload: 'ʘ‿ʘ'});
            const currentEmoji = store.getState().mood;
            emoji.innerText = currentEmoji;
        });

    document.querySelector('#stressed')
        .addEventListener('click', function() {
            store.dispatch( {type: 'STRESSED', payload: 'ಠ_ಠ'});
            const currentEmoji = store.getState().mood;
            emoji.innerText = currentEmoji;
        });

    document.querySelector('#frustrated')
        .addEventListener('click', function() {
            store.dispatch( {type: 'FRUSTRATED', payload: '(・谷・)' });
            const currentEmoji = store.getState().mood;
            emoji.innerText = currentEmoji;
        });

    document.querySelector('#surprised')
        .addEventListener('click', function() {
            store.dispatch( {type: 'SURPRISED', payload: '⊙▂⊙' });
            const currentEmoji = store.getState().mood;
            emoji.innerText = currentEmoji;
        });
}