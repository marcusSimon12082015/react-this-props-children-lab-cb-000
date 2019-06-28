// Code ThemedDecoration Component Here
import React from 'react';

export default class ThemedDecoration extends React.Component
{
  render(){
    const childrenWithClass = React.children.map(this.props.children, child =>{
      return React.clone(child,{className: this.props.theme})
    })
    return(<div className={this.props.theme}>
        <div>{childrenWithClass}</div>
      </div>);
  }
}
