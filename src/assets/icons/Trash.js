import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function Trash (props) {
	return (
		<Svg width={25} height={27} viewBox='0 0 25 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<Path
				d='M12.5.26a4.198 4.198 0 014.192 3.96l.006.238h6.781a.969.969 0 01.132 1.929l-.132.009h-1.028l-1.653 16.817a3.552 3.552 0 01-3.308 3.196l-.228.008H7.738a3.552 3.552 0 01-3.506-2.98l-.03-.225L2.548 6.396H1.52a.969.969 0 01-.96-.837l-.009-.132a.969.969 0 01.837-.96l.132-.009h6.781A4.198 4.198 0 0112.5.26zm8.005 6.136H4.494L6.13 23.022a1.614 1.614 0 001.443 1.45l.164.007h9.524c.775 0 1.433-.549 1.583-1.294l.026-.163 1.632-16.626h.002zM14.76 9.948a.969.969 0 01.96.837l.01.132v9.041a.969.969 0 01-1.93.132l-.008-.132v-9.041a.969.969 0 01.968-.97zm-4.52 0a.969.969 0 01.96.837l.008.132v9.041a.968.968 0 01-1.928.132l-.01-.132v-9.041a.969.969 0 01.97-.97zm2.26-7.75a2.26 2.26 0 00-2.253 2.074l-.007.186h4.52a2.26 2.26 0 00-2.26-2.26z'
				fill='#F9F9F9'
			/>
		</Svg>
	)
}

export default Trash
