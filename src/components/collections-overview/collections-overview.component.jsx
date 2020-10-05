import React from 'react';

import {connect} from 'react-redux';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'

import {createStructuredSelector} from 'reselect';
import PreviewCollection from '../preview-collection/preview-collection.component';
import './collections-overview.styles.scss';

const CollectionsOverview=({collections})=>(
    <div className='collections-overview'>
        {collections.map(({id,...otherCollectionprops})=>(
            <PreviewCollection key={id}{...otherCollectionprops}/>
        )
        )}

    </div>
)

const mapStateToProps=createStructuredSelector({
    collections:selectCollectionsForPreview

})

export default connect(mapStateToProps)(CollectionsOverview);