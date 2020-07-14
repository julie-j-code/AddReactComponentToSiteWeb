import React from 'react';
import ReactDOM from 'react-dom';
import LikeButton from'./components/LikeButton';


 
document.querySelectorAll('span.react-like').forEach(function(span){
    // Plus desoin de passer par React.createElement 
    // ReactDOM.render(React.createElement(LikeButton), span);
    const likes = +span.dataset.likes;
    const isLiked = +span.dataset.isLiked === 1;
    ReactDOM.render(<LikeButton likes={likes} isLiked={isLiked}/>, span)
});