import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectCollection} from '../../redux/shop/shop.selector'
import {connect} from 'react-redux';

const CollectionPage =({collection})=> { 
  const { title, items } = collection;
return(
  
    <div className='collection-page'>
      {items.map(item => (
    <CollectionItem title={title} key ={CollectionItem.id} item={item} />
    ))}
    </div>
);
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(
      ownProps.match.params.collectionId)(state)
});
  
export default connect(mapStateToProps)(CollectionPage);