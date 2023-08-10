import React from 'react'
import { Path, Svg } from 'react-native-svg'

const AboutIcon = ({ size, color = 'black' }) => 
  <Svg width={size || "48"} height={size || "48"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M16.7812 3H7.21875C6.09987 3 5.02681 3.44447 4.23564 4.23564C3.44447 5.02681 3 6.09987 3 7.21875L3 16.7812C3 17.9001 3.44447 18.9732 4.23564 19.7644C5.02681 20.5555 6.09987 21 7.21875 21H16.7812C17.9001 21 18.9732 20.5555 19.7644 19.7644C20.5555 18.9732 21 17.9001 21 16.7812V7.21875C21 6.09987 20.5555 5.02681 19.7644 4.23564C18.9732 3.44447 17.9001 3 16.7812 3ZM12 17.2734C10.957 17.2734 9.93745 16.9642 9.07023 16.3847C8.20302 15.8052 7.52711 14.9817 7.12798 14.0181C6.72884 13.0545 6.62441 11.9942 6.82789 10.9712C7.03137 9.94826 7.53361 9.00862 8.27112 8.27112C9.00862 7.53361 9.94826 7.03137 10.9712 6.82789C11.9942 6.62441 13.0545 6.72884 14.0181 7.12798C14.9817 7.52711 15.8052 8.20302 16.3847 9.07023C16.9642 9.93745 17.2734 10.957 17.2734 12C17.2731 13.3985 16.7174 14.7396 15.7285 15.7285C14.7396 16.7174 13.3985 17.2731 12 17.2734Z" fill={color}/>
    <Path d="M11.9992 7.31714C11.073 7.31714 10.1677 7.59178 9.39759 8.10633C8.62751 8.62089 8.0273 9.35224 7.67287 10.2079C7.31844 11.0636 7.2257 12.0051 7.40639 12.9135C7.58707 13.8219 8.03307 14.6563 8.68797 15.3112C9.34288 15.9661 10.1773 16.4121 11.0856 16.5928C11.994 16.7735 12.9356 16.6807 13.7913 16.3263C14.6469 15.9719 15.3783 15.3717 15.8928 14.6016C16.4074 13.8315 16.682 12.9261 16.682 12C16.6802 10.7586 16.1862 9.56855 15.3084 8.69076C14.4306 7.81296 13.2406 7.319 11.9992 7.31714ZM12.2945 14.8125C12.2917 14.8899 12.2597 14.9634 12.2049 15.0182C12.1502 15.073 12.0767 15.105 11.9992 15.1078C11.921 15.1074 11.8461 15.0762 11.7908 15.0209C11.7355 14.9656 11.7043 14.8907 11.7039 14.8125V11.0578C11.7043 10.9796 11.7355 10.9047 11.7908 10.8494C11.8461 10.7941 11.921 10.7628 11.9992 10.7625C12.0383 10.7615 12.0771 10.7685 12.1134 10.783C12.1496 10.7975 12.1826 10.8192 12.2102 10.8468C12.2378 10.8744 12.2595 10.9074 12.274 10.9436C12.2885 10.9799 12.2955 11.0187 12.2945 11.0578V14.8125ZM11.9992 10.1578C11.9158 10.1578 11.8342 10.133 11.7648 10.0867C11.6955 10.0403 11.6414 9.97442 11.6095 9.89733C11.5775 9.82025 11.5692 9.73542 11.5855 9.65358C11.6017 9.57175 11.6419 9.49658 11.7009 9.43758C11.7599 9.37858 11.8351 9.3384 11.9169 9.32212C11.9988 9.30584 12.0836 9.3142 12.1607 9.34613C12.2378 9.37806 12.3036 9.43213 12.35 9.50151C12.3964 9.57088 12.4211 9.65245 12.4211 9.73589C12.4211 9.84778 12.3766 9.95508 12.2975 10.0342C12.2184 10.1133 12.1111 10.1578 11.9992 10.1578Z" fill={color}/>
  </Svg>

export default AboutIcon;

