import React, { useState, useRef, useEffect } from 'react'

import { 
  DropdownContainer,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '../styles/DropdownStyle'

const Dropdown = ({set, value, valueSetter}) => {

  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef()

  const handleToggle = (e) => {
    setIsOpen(prevState => !prevState)
  }

  const handleSelect = (el) => {
    valueSetter({...el})
    setIsOpen(false)
  }

  useEffect(() => {
    const handler = (e) => {
      if(!dropdownRef?.current?.contains(e.target)){
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
  }, [])

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownTrigger 
        onClick={handleToggle}
      >{(value?.category ?? set.name) ?? 'Select...'}</DropdownTrigger>

      <DropdownMenu $isOpen={isOpen}>
        {set.items.map((el) => {
          return (
            <DropdownItem 
              key={el.id}
              onClick={() => {handleSelect(el)}}
            >{el.category}
            </DropdownItem>
          )
        })}
      </DropdownMenu>

    </DropdownContainer>
  )
}

export default Dropdown


