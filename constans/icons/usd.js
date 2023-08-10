import React from 'react'
import { Path, Svg } from 'react-native-svg'

const Usd = ({ size, color = 'red', stroke }) => 
  <Svg width={size || "48"} height={size || "48"} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path stroke={stroke || color} strokeWidth="1" d="M22.5 45V41.5856C15.0497 41.1562 10.5234 37.3181 10.5 31.5H17.25C17.4159 33.9694 19.4869 35.8547 22.5 36.1875V27L19.9903 26.3438C14.2716 25.0144 11.2116 21.7134 11.2116 16.7737C11.2116 10.9509 15.3825 7.1325 22.5 6.5625V3H25.5V6.5625C32.7553 7.15313 36.6562 11.0381 36.75 16.5H30C29.9288 14.2444 28.5159 12.4322 25.5 12.1875V20.8125L28.3894 21.495C34.4634 22.8244 37.5 25.9688 37.5 31.125C37.5 37.1569 33.3994 41.0513 25.5 41.5613V45H22.5ZM22.5 20.25V12.1875C19.9134 12.33 18.0684 13.9191 18.0684 16.1747C18.0684 18.2653 19.605 19.6322 22.5 20.25ZM25.5 27.5625V36.1875C29.0766 36.0431 30.7856 34.4138 30.7856 31.8966C30.7856 29.5922 29.0766 28.0406 25.5 27.5625Z" fill={color}/>
  </Svg>

export default Usd;
