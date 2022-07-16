import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

var Modal = function Modal(_ref) {
  var isShowing = _ref.isShowing,
      hide = _ref.hide;
  return isShowing ? ReactDOM.createPortal(React.createElement(
    'div',
    { className: 'modal-overlay' },
    React.createElement(
      'div',
      { className: 'modal-wrapper' },
      React.createElement(
        'div',
        { className: 'modale' },
        React.createElement(
          'div',
          { className: 'modal-header' },
          React.createElement(
            'button',
            {
              type: 'button',
              className: 'modal-close-button',
              onClick: hide
            },
            React.createElement(
              'span',
              null,
              '\xD7'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'modal-body' },
          React.createElement(
            'h4',
            null,
            'Button activated!'
          )
        )
      )
    )
  ), document.body) : null;
};

export default Modal;