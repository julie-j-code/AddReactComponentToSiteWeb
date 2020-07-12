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

         // this.handleClick : this.handleClick.bind(this);
    }

    handleClick(){
        const isLiked = this.state.isLiked;
        const likes = this.state.likes + (isLiked ? - 1 : 1);
        // this.setState({likes: likes})
        // quand le nom de la propriété est le même que la valeur de la propriété, ES6 permet 
        this.setState({likes, isLiked : !isLiked});
    }

    render() { 
        // on utilise une zero fonction
        return React.createElement('button' , {className : 'btn btn-link', onClick : ()=> this.handleClick()},
        this.state.likes, 
        " ",
        React.createElement("i", {className : this.state.isLiked ?'fas fa-thumbs-up' : 'far fa-thumbs-up' }),
        " ",
        this.state.isLiked ? "je n'aime plus" : "j'aime" );

    };
}
 
document.querySelectorAll('span.react-like').forEach(function(span){
    ReactDOM.render(React.createElement(LikeButton), span);
});