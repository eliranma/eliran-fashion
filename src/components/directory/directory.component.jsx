import React from 'react';
import MenuItem from '../../components/menu-item/menu-item.component';
import DirectoryMenu from './directory.styles'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selector';



const Directory = ({sections}) => (
            <DirectoryMenu>
                {
                      sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </DirectoryMenu>
        );
  
        const mapStateToProps = createStructuredSelector({
          sections: selectDirectorySections
        });

export default connect(mapStateToProps) (Directory);