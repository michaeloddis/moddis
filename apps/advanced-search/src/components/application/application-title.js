import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rems } from '../utils';

const ApplicationTitleContainer = styled.div`
  color: #333333;
  font-size: ${rems('24')};
  padding-top: ${rems('32')};
  padding-bottom: ${rems('8')};
  width: 100%;
`;

const ApplicationTitle = (props) => {
    const { width, children } = props;
 
    return (
        <ApplicationTitleContainer width={width}>
            {children}
        </ApplicationTitleContainer>
    );
};

ApplicationTitle.propTypes = {
    width: PropTypes.string,
    children: PropTypes.any
};

ApplicationTitle.defaultProps = {
    width: 'auto'
};

export {
    ApplicationTitle
};
