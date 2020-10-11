namespace $ {
	export function $lib_nodeenv() {
		if (typeof window !== 'undefined') {
			
			(window as any).process = { env : { NODE_ENV : 'development' } }
			
		}
	}
	$lib_nodeenv()
}
