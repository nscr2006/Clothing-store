import React from 'react';

import {SpinnerOverlay,SpinnerContainer} from './with-spinner.styles';

const WithSpinner=WrappedComponent=>({isloading,...otherProps})=>{
    return isloading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
         </SpinnerOverlay>
    ):(
        <WrappedComponent {...otherProps} />
    );
};

export default WithSpinner;