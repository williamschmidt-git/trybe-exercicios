import React from "react";
import PropTypes from 'prop-types'

class Card extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { pokemon: { name, id, image, type, averageWeight: { value, measurementUnit } } } = this.props

        return (
            <div>
                <div key={`${id}`} className="Pokedex">
                    <div className={`${name}`}>
                        <p>{name}</p>
                        <p>{type}</p>
                        <p>{`Weigth: ${value}${measurementUnit}`}</p>
                        <img src={image} alt={name}></img>
                    </div>
                </div >
            </div>

        )
    }
}

Card.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        image: PropTypes.string
    })
}

Card.defaultProps = {
    pokemon: {
        name: '',
        type: '',
        image: ''
    }
}

export default Card