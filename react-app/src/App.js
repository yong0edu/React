import React,{Component} from 'react';
import './App.css';
import TOC from './Components/TOC';
import Content from './Components/Content';
import Subject from './Components/Subject';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'World Wide Web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is ....'},
        {id:2, title:'CSS', desc:'CSS is ....'},
        {id:3, title:'JavaScript', desc:'JavaScript is ....'}
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is ...."></Content>
      </div>
    );
  }
}

export default App;
