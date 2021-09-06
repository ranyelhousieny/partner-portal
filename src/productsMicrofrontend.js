import React from 'react';

const ProductsMicrofrontend =
  React.lazy(() =>
    import(
      'ProductsMicrofrontend'
    )
  );

function PartnerMicrofrontend() {
  return (
    <div>
      <h1>
        {' '}
        ProductsMicrofrontend
        in PartnerPortal
      </h1>
      <div>
        <React.Suspense>
          <ProductsMicrofrontend />
        </React.Suspense>
      </div>
    </div>
  );
}

export default PartnerMicrofrontend;
