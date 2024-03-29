var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { useState } from 'react';

var useModal = function useModal() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isShowing = _useState2[0],
      setIsShowing = _useState2[1];

  var reload = function reload() {
    return window.location.reload();
  };
  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing: isShowing,
    toggle: toggle,
    reload: reload
  };
};

export default useModal;