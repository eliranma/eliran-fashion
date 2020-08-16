import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import {CollectionPreviewContainer, TitleContainer, PreveiwContainer} from  './collection-preview.styles';
import {withRouter} from 'react-router-dom';

const CollectionPreview = ({title, items, history, match, routeName}) =>   (
    <CollectionPreviewContainer>
        <TitleContainer onClick={() =>
        history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()}
            </TitleContainer>
        <PreveiwContainer>
            {items.filter((item, idx)=> idx < 4)
            .map(item => (
                <CollectionItem key={item.id}
                item={item} />
            ))}
        </PreveiwContainer>
    </CollectionPreviewContainer>
);
export default withRouter (CollectionPreview);