import PropTypes from 'prop-types'
import React from 'react'
import Library from './Library'
import { Title } from 'bloomer'

class CategoryPage extends React.Component {
  render () {
    const { category } = this.props
    return (<div className='CategoryPage'>
      <Title>{category.title}</Title>
      {category.libraries && category.libraries.map(library => (
        <Library key={library.id} library={library} />
      ))}
    </div>
    )
  }
}

CategoryPage.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    libraries: PropTypes.array
  })
}

export default CategoryPage
