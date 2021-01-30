import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function Left (props) {
	return (
		<Svg width={15} height={30} viewBox='0 0 15 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<Path
				d='M12.511 30a2.145 2.145 0 01-1.672-.793L.488 16.351a2.142 2.142 0 010-2.721L11.204.774a2.146 2.146 0 013.3 2.743L4.924 15l9.259 11.485A2.142 2.142 0 0112.51 30z'
				fill='#000'
			/>
		</Svg>
	)
}

export default Left
