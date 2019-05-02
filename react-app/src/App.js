import React,{Component} from 'react';
import './App.css';
import TOC from './Components/TOC';
import Content from './Components/Content';
import Subject from './Components/Subject';








class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject title="HTML" sub="World Wide Web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is ...."></Content>
      </div>
    );
  }
}

export default App;
