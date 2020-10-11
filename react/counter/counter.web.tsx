/// <reference path="../../node_modules/@types/react/index.d.ts" />

// Нодовский билд падает, поэтому .web.tsx
namespace $ {
	// в билде $lib_react === undefined
	// Но в неймспейсе $ он есть
	const react = ($ as any).React as typeof $lib_react;
	const reactDOM = ($ as any).ReactDOM as typeof $lib_react_dom;

	export class $react_counter extends react.Component< any , { count : number } > {
		state = {
			count: 0,
		}
		
		inc() {
			console.log('1');
			this.setState(({ count }) => ({ count: count + 1 }))
		}
		
		dec() {
			console.log('2');
			this.setState(({ count }) => ({ count: count - 1 }))
		}

		reset() {
			this.setState({ count: 0 })
		}

		render() {
			return (
				<div>
					<span>{this.state.count}</span>
					<button type="button" onClick={() => this.inc()}>+</button>
					<button type="button" onClick={() => this.dec()}>-</button>
					<button type="button" onClick={() => this.reset()}>0</button>
				</div>
			)
		}
	}
	
	reactDOM.render(
		React.createElement($react_counter),
		$mol_dom_context.document.getElementById('root'),
	)
	
}
