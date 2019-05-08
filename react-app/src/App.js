import React,{Component} from 'react';
import './App.css';
import TOC from './Components/TOC';
import Content from './Components/Content';
import Subject from './Components/Subject';
import Control from './Components/Control';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'read',
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'React!', desc:'Hello React!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is ....'},
        {id:2, title:'CSS', desc:'CSS is ....'},
        {id:3, title:'JavaScript', desc:'JavaScript is ....'}
      ],
      selected_id: 1,
    }
  }
  render(){
    var _title = '';
    var _desc = '';
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents
        if(this.state.selected_id === data[i].id){
          _title = data[i].title;
          _desc = data[i].desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({
              mode:'welcome'
            });
          }.bind(this)}>
        </Subject>

        <TOC 
          data={this.state.contents}
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_id: Number(id)
            });
          }.bind(this)}>
        </TOC>
        <Control 
          onChangeMode = {function(mode){
            this.setState({
              mode:mode
            })
        }.bind(this)}></Control>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
