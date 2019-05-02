import React,{Component} from 'react';
import './App.css';
import TOC from './Components/TOC';
import Content from './Components/Content';
import Subject from './Components/Subject';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'welcome',
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
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
