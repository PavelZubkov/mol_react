declare namespace $ {
    function $lib_nodeenv(): void;
}

declare namespace $ {
    const $lib_schedule: any;
    const $lib_react: typeof React;
    const $lib_react_dom: typeof ReactDOM;
}

declare namespace $ { }
export = $;

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
}

/// <reference types="react" />
declare namespace $ {
    const react: typeof React;
    export class $react_counter extends react.Component<any, {
        count: number;
    }> {
        state: {
            count: number;
        };
        inc(): void;
        dec(): void;
        reset(): void;
        render(): JSX.Element;
    }
    export {};
}
