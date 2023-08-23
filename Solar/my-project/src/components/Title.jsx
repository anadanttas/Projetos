import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return <h2 className="text-3xl font-bold flex justify-center">{headline}</h2>;
  }
}
Title.propTypes = {
  headline: PropTypes.string,
};
Title.defaultProps = {
  headline: 'Não foi encontrado HEADLINE',
};
export default Title;