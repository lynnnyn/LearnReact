import React, { Component,Fragment } from 'react';

class TodoList extends Component {
    constructor(props){
      super(props);
      this.state = {
        inputValue:'',
          list:['Learn English','Learn React']
      }
   }

  render() {
      return (
          <Fragment>
              <div>
                  <input
                      value={this.state.inputValue}
                      onChange={this.handleInputsChange.bind(this)}
                  />
                  <button onClick={this.handleBtnClick.bind(this)}> Submit</button>
              </div>
              <ul>
                  {this.state.list.map((item, index) => {
                      return <li key={index} onClick={this.handleItemDelete.bind(this,index)}>{item}</li>
                  })}
              </ul>
          </Fragment>
      );
  }
    handleInputsChange(e) {
        this.setState({
            inputValue: e.target.value
        })
      }
      handleBtnClick(e){
        this.setState({
            list: [...this.state.list,this.state.inputValue],
            inputValue: ''
        })
      }
    handleItemDelete(index){
        // immutable
        // state不允许做任何改变（不要直接改state里边的内容）
        console.log(index)
        const list = [...this.state.list]
        list.splice(index,1)
        this.setState({
            list: list
        })
    }
}

export default TodoList;
