import React from 'react'
import PropTypes from 'prop-types'
import CountryList from '@koterion/country_list'
import Settings from './settings'

export default function Block (props) {
  const { text, hasPhone, search, select, list, remove, flagInSelect, flagInInput, closestForm, countryAll, current, enableGeoCheck } = props
  let settings = ''

  if (hasPhone) {
    settings += ' hasPhone'
  }

  if (search) {
    settings += ' search'
  }

  if (select) {
    settings += ' select'
  }

  if (list) {
    settings += ' list'
  }

  if (remove) {
    settings += ' remove'
  }

  if (flagInSelect) {
    settings += ' flagInSelect'
  }

  if (flagInInput) {
    settings += ' flagInInput'
  }

  if (enableGeoCheck) {
    settings += ' enableGeoCheck'
  }

  if (countryAll.length > 0) {
    settings += ` countryAll={[${countryAll}]}`
  }

  if (current) {
    settings += ` current='${current}'`
  }

  const options = `
  import CountryList from '@koterion/country_list'
  
  <CountryList${settings}>
    ${search || select ? 'Country' : 'Phone Number'}
  </CountryList>
  `

  let className = 'block'
  if (hasPhone) {
    className += ' hasPhone'
  }

  return (
    <div className={className}>
      <p className="description">{text}</p>
      <CountryList
        className='input'
        hasPhone={hasPhone}
        flagInSelect={flagInSelect}
        flagInInput={flagInInput}
        list={list}
        remove={remove}
        search={search}
        select={select}
        closestForm={closestForm}
        countryAll={countryAll}
        current={current}
        enableGeoCheck={enableGeoCheck}
      >
        {search || select ? 'Country' : 'Phone Number'}
      </CountryList>
      {hasPhone && <input name="phone" type="text" className="input" placeholder="Phone Number" />}
      <Settings options={options} />
    </div>
  )
}

Block.defaultProps = {
  countryAll: [],
  remove: false,
  flagInInput: false,
  flagInSelect: false,
  enableGeoCheck: false,
  hasPhone: false,
  inputCountryName: 'country',
  inputPhoneName: 'phone',
  closestForm: '.hasPhone',
  list: false,
  search: false,
  select: false,
  current: ''
}

Block.propTypes = {
  countryAll: PropTypes.array,
  remove: PropTypes.bool,
  flagInInput: PropTypes.bool,
  flagInSelect: PropTypes.bool,
  hasPhone: PropTypes.bool,
  inputCountryName: PropTypes.string,
  inputPhoneName: PropTypes.string,
  closestForm: PropTypes.string,
  list: PropTypes.bool,
  search: PropTypes.bool,
  select: PropTypes.bool,
  current: PropTypes.string,
  enableGeoCheck: PropTypes.bool
}
