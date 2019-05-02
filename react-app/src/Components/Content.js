import React, {Component} from 'react';

class Content extends Component {
    render(title, desc){
      return(
        <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </article>
      );
    }
  }

export default Content;