// Code ThemedDecoration Component Here
import React from 'react';

export default class ThemedDecoration extends React.Component
{
  render(){
    const childrenWithClass = React.Children.map(this.props.children, child =>{
      return(<p className={this.props.theme}>{child}</p>);
    });

    return(<div theme={this.props.theme}>
        {childrenWithClass}
      </div>);
  }
}
