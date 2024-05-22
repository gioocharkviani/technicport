import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const animatedComponents = makeAnimated();


const ProductFilter =()=> {
    return(
        <Select 
            options={options} 
            isMulti
            name="colors"
            components={animatedComponents}
        />
    )
}

export default ProductFilter;
