import React from 'react'
import { Path, Svg } from 'react-native-svg'

const ContactIcon = ({ size, color = 'black' }) => 
  <Svg width={size || "48"} height={size || "48"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path  d="M20.1 3H6.6C6.12261 3 5.66477 3.18964 5.32721 3.52721C4.98964 3.86477 4.8 4.32261 4.8 4.8V7.5H3V9.3H4.8V11.1H3V12.9H4.8V14.7H3V16.5H4.8V19.2C4.8 19.6774 4.98964 20.1352 5.32721 20.4728C5.66477 20.8104 6.12261 21 6.6 21H20.1C20.3387 21 20.5676 20.9052 20.7364 20.7364C20.9052 20.5676 21 20.3387 21 20.1V3.9C21 3.66131 20.9052 3.43239 20.7364 3.2636C20.5676 3.09482 20.3387 3 20.1 3ZM12.9 5.6991C14.3832 5.6991 15.6 6.915 15.6 8.3991C15.5974 9.11447 15.3121 9.7998 14.8064 10.3057C14.3006 10.8117 13.6154 11.0972 12.9 11.1C11.4177 11.1 10.2 9.8823 10.2 8.3991C10.2 6.915 11.4177 5.6991 12.9 5.6991ZM18.3 17.4H7.5V16.725C7.5 14.7279 9.9345 12.675 12.9 12.675C15.8655 12.675 18.3 14.7279 18.3 16.725V17.4Z" fill={color}/>
  </Svg>

export default ContactIcon;

