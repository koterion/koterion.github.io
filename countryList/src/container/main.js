import React from 'react'
import Block from '../components/block'

function Main () {
  return (
    <div className='main'>
      <h1>Country List</h1>
      <div className="list">
        <Block text='Default setting' />
        <Block text='Default current country' current='ua' />
        <Block text='Check by geo service' enableGeoCheck />
        <Block text='Input with flags in list' flagInSelect />
        <Block text='Input with flag' flagInInput />
        <Block text='Select with country & phone' hasPhone select />
        <Block text='Select with custom countries' select list countryAll={['ua', 'gb', 'us', 'de']} />
        <Block text='Remove countries from select' select remove countryAll={['ua', 'gb', 'us', 'de']} />
        <Block text='Input with search' search />
      </div>
    </div>
  )
}

export default Main
