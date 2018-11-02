import React, { Component,Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {
    constructor(props){
      super(props);
      this.state = {
        inputValue:'',
          list:['Learn English','Learn React']
      }
      this.handleInputsChange = this.handleInputsChange.bind(this)
      this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
   }

  render() {
      return (
          <Fragment>
              <div>
                  <label htmlFor= "insertArea"> Input Content</label>
                  <input
                      id='insertArea'
                      className='input'
                      value={this.state.inputValue}
                      onChange={this.handleInputsChange}
                  />
                  <button onClick={this.handleBtnClick}> Submit</button>
              </div>
              <ul>
                  {this.getTodoItem()}
              </ul>
          </Fragment>
      );
  }
  getTodoItem(){
      return this.state.list.map((item, index) => {
          return (
              <TodoItem
                  key = {index}
                  content = {item}
                  index = {index}
                  handleItemDelete = {this.handleItemDelete.bind(this)}

              />
          )

      })
  }

    handleInputsChange(e) {
        const value = e.target.value
        this.setState( () =>({
                inputValue: value
            }))
      }
      handleBtnClick(e){
        this.setState((prevState) => ({
            list: [...prevState.list,prevState.inputValue],
            inputValue: ''
            }))
      }
    handleItemDelete(index){
        // immutable
        // state不允许做任何改变（不要直接改state里边的内容）
        // console.log(index)
        const list = [...this.state.list]
        list.splice(index,1)
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index,1);
            return {list}
            }
        )
    }
}

export default TodoList;
