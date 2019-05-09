import React,{Component} from 'react';
import './App.css';
import TOC from './Components/TOC';
import ReadContent from './Components/ReadContent';
import CreateContent from './Components/CreateContent';
import UpdateContent from './Components/UpdateContent';
import Subject from './Components/Subject';
import Control from './Components/Control';


class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3
    this.state = {
      mode: 'create',
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
  getReadContent(){
    var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(this.state.selected_id === data.id){
          return data;
          break;
        }
        i = i + 1;
      }
  }
  getContent(){
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read'){
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if (this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id + 1
        var add_contents = Array.from(this.state.contents)
        add_contents.push({id: this.max_content_id, title:_title, desc:_desc})
        this.setState({
          mode: 'read',
          selected_id: this.max_content_id,
          contents: add_contents
        })
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === 'update'){
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} 
                                onSubmit={function(_id, _title, _desc){   
                                  var contents = Array.from(this.state.contents)
                                  var i = 0;
                                  while (i < contents.length){
                                    if (_id === contents[i].id){
                                      contents[i] = {id: _id, title: _title, desc:_desc}
                                      break;
                                    }
                                    i = i + 1;
                                  }
                                  this.setState({
                                    mode: 'read',
                                    selected_id: _id,
                                    contents: contents
                                  })
                                }.bind(this)}></UpdateContent>
    } 
    return _article; 
  }
  render(){
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({
              mode:'welcome',
              selected_id: null
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
            if (mode === 'delete'){
              if (this.state.selected_id === null){
                return alert('삭제할 항목을 선택해 주세요');
              } else if (this.state.selected_id){
                if(window.confirm('정말로 삭제하시겠습니까?')){
                  var i = 0;
                  var content = Array.from(this.state.contents);
                  while(i < content.length){
                    if(content[i].id === this.state.selected_id){
                      content.splice(i, 1);
                      break;
                    }
                    i = i + 1;
                  }
                  this.setState({
                    mode:'welcome',
                    contents: content
                  });
                  alert('삭제되었습니다.');
                } 
              }
            } else {
              this.setState({
              mode: mode,
            });
          }    
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
