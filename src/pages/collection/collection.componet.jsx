import React from 'react';
import {CollectionPageContainer , CollectionTitle, CollectionItemsContainer} from './collection.styles';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectCollection} from '../../redux/shop/shop.selector'
import {connect} from 'react-redux';

const CollectionPage =({collection})=> { 
  const { title, items } = collection;
return(
  
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
      {items.map(item => (
    <CollectionItem key ={CollectionItem.id} item={item} />
    ))}
    </CollectionItemsContainer>
    </CollectionPageContainer>
);
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(
      ownProps.match.params.collectionId)(state)
});
  
export default connect(mapStateToProps)(CollectionPage);