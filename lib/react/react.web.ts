/// Install: 
///     npm install react @types/react react-dom @types/react-dom


namespace $ {
	$lib_nodeenv()
	export const $lib_schedule = require('schedule/umd/schedule.production.min.js')
	export const $lib_react = require('react/umd/react.production.min.js') as typeof import('react')
	// export const $lib_react = require('react') as typeof import('react')
	export const $lib_react_dom = require('react-dom/umd/react-dom.production.min.js') as typeof import('react-dom')
	// export const $lib_react_dom = require('react-dom') as typeof import('react-dom')
}
