
(function (apiKey) {
  (function (p, e, n, d, o) {
    var v, w, x, y, z; o = p[d] = p[d] || {}; o._q = [];
    v = ['initialize', 'identify', 'updateOptions', 'pageLoad']; for (w = 0, x = v.length; w < x; ++w)(function (m) {
      o[m] = o[m] || function () { o._q[m === v[0] ? 'unshift' : 'push']([m].concat([].slice.call(arguments, 0))); };
    })(v[w]);
    y = e.createElement(n); y.async = !0; y.src = 'https://pendo-dev-static.storage.googleapis.com/agent/static/' + apiKey + '/pendo.js';
    z = e.getElementsByTagName(n)[0]; z.parentNode.insertBefore(y, z);
  })(window, document, 'script', 'pendo');

  // Call this whenever information about your visitors becomes available
  // Please use Strings, Numbers, or Bools for value types.
  pendo.initialize({
    visitor: {
      id: 'james'   // Required if user is logged in
      // email:        // Optional
      // role:         // Optional

      // You can add any additional visitor level key-values here,
      // as long as it's not one of the above reserved names.
    },

    account: {
      id: 'james-account' // Highly recommended
      // name:         // Optional
      // planLevel:    // Optional
      // planPrice:    // Optional
      // creationDate: // Optional

      // You can add any additional account level key-values here,
      // as long as it's not one of the above reserved names.
    },
    apiKey: apiKey
  });
})('7d18e1ea-d355-455c-49ee-4d99af90de4e');
