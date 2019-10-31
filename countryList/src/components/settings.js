import React from 'react'
import CountryList from '@koterion/country_list'

export default function Settings (props) {
  return (
    <div>
      <pre>
        <code className="javascript">
          {props.options}
        </code>
      </pre>
    </div>
  )
}
