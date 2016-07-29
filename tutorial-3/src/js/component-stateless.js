var TextAreaCounter = React.createClass({
  propTypes: {
    text: React.PropTypes.string
  },
  render: function() {
    return React.DOM.div(null,
      React.DOM.textarea({
        defaultValue: this.props.text
      }),
      React.DOM.h3(null, this.props.text.length)
    );
  }
});

ReactDOM.render(
  React.createElement(TextAreaCounter, {text:"bob"}), document.getElementById('state')
);
