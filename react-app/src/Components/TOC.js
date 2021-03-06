import React, { Component } from 'react';





class TOC extends Component {
    shouldComponentUpdate(newProps, newState){
        console.log('======>should');
        if(newProps.data === this.props.data){
            return false;
        }
        return true;
    }
    render(){
        console.log('=====>render');
        var _data = this.props.data;

        var lists = [];
        var i = 0;
        while (i < _data.length){
            lists.push(
                <li key={_data[i].id}>
                    <a 
                        href={"/content"+_data[i].id}
                        onClick={function(id, e){
                            e.preventDefault();
                            this.props.onChangePage(id);
                        }.bind(this, _data[i].id)}>
                        {_data[i].title}
                    </a>
                </li>
            )
            i = i + 1;
        }
      return (
        <nav>
          <ul>
              {lists}
          </ul>
        </nav>
      );
    }
}


export default TOC;