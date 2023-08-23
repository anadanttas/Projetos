import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <li>
        <div data-testid="planet-card" >
          <p data-testid="planet-name">{planetName}</p>
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        </div>
      </li>
    );
  }
}
PlanetCard.propTypes = {
  planetImage: PropTypes.string,
  planetName: PropTypes.string,
};
PlanetCard.defaultProps = {
  planetName: 'Nome de planeta não achado',
  planetImage: 'Imagem não encontrada',
};
export default PlanetCard;