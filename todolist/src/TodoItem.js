import React,{Component} from 'react'

class TodoItem extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render(){
        const {content} = this.props
        return <div onClick={this.handleClick.bind(this)}>{content}</div>
    }
    handleClick(){
        // console.log(this)
        const {handleItemDelete, index} = this.props;
        handleItemDelete(index);
        // alert(this.props.index)

    }
}

export default TodoItem;