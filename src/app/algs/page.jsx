import React from 'react'
import styles from './algorithms.module.css'
import FrostedContainer from './components/CubeCard/FrostedContainer'
import CardTitle from './components/CubeCard/CardTitle'
import CardImage from './components/CubeCard/CardImage'
import CardMethods from './components/CubeCard/CardMethods'

import { cardsInfo } from '../../utils/cardsInfo'

function algorithms () {
  return (
    <>
      <div className={styles.algorithms}>
        {cardsInfo.map((card, index) => (
          <FrostedContainer
            path={card.title}
            disabled={card.disabled}
            key={index}
          >

            <CardTitle title={card.title} />
            <CardImage img={`/images/cubes/${card.path}.png`} />
            {card.disabled || <CardMethods methods={card.methods} />}

          </FrostedContainer>

        ))}
      </div>
    </>
  )
}

export default algorithms
