import React from 'react';

export default class LikeButton extends React.Component {

    // une fois que j'ai intégré babel, je n'ai plus besoin de mon contructor ?!?
    // LC explique que je peux utiliser la "fonctionnalité des classe property" qui n'existait pas dans le jS natif
/*     constructor(props) {
        super(props);
        this.state = { 
        
            likes : this.props.likes || 0,
            isLiked : this.props.isLiked || false
         }; */

    state = {
        likes: this.props.likes || 0,
        isLiked :this.props.isLiked || false
    };
    

    handleClick = () =>{
        const isLiked = this.state.isLiked;
        const likes = this.state.likes + (isLiked ? - 1 : 1);
        // this.setState({likes: likes})
        // quand le nom de la propriété est le même que la valeur de la propriété, ES6 permet 
        this.setState({likes, isLiked : !isLiked});
    }

render() { 
    // on utilise une zero fonction
    return(
        
        <button className="btn btn-link" onClick={()=> this.handleClick()}>
            {this.state.likes}
            &nbsp;
            <i className={
                    this.state.isLiked ?'fas fa-thumbs-up' : 'far fa-thumbs-up'
                }/>
            &nbsp;
            {this.state.isLiked ? "je n'aime plus" : "j'aime" }
        </button>    
    
    );

}

};