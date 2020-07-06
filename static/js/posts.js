console.log("kikou youtube");

// React
//React DOM



class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            likes : this.props.likes || 0,
            isLiked : this.props.isLiked || false
         };
    }
    render() { 
        return React.createElement('button' , {className : 'btn btn-link'}, "j'aime" );
    };
}
 
document.querySelectorAll('span.react-like').forEach(function(span){
    ReactDOM.render(React.createElement(LikeButton), span);
});