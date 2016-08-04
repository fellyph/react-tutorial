let ButtonComponent = React.createClass({
  getInitialState: function() {
    return {
      active: true,
    };
  },

  _toggle: function(event) {
    this.setState({
      active: (this.state.active)? false: true
    });
  },

  render: function() {
    return React.DOM.button({
        onClick: this._toggle
    }, "" + this.state.active)
  }
});

ReactDOM.render(
  React.createElement(ButtonComponent, {}),
  document.getElementById('events')
);
