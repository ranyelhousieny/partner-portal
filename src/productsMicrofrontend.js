import React from 'react';

const ProductsMicrofrontend =
  React.lazy(() =>
    import(
      'ProductsMicrofrontend'
    )
  );

const template = (
  <div>
    <h1>Partner Portal</h1>
    <div>
      <React.Suspense>
        <ProductsMicrofrontend />
      </React.Suspense>
    </div>
  </div>
);

ReactDOM.render(
  template,
  document.querySelector(
    '#fromjs'
  )
);
