import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function Plus (props) {
	return (
		<Svg width={19} height={19} viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<Path d='M18.542 8.208h-7.75V.458H8.208v7.75H.458v2.584h7.75v7.75h2.584v-7.75h7.75V8.208z' fill='#F9F9F9' />
		</Svg>
	)
}

export default Plus
