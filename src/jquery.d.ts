// 
// declare var $: (param: () => void) => void

declare module 'jquery' {
    interface jqueryInstance {
        html: (html: string) => jqueryInstance
    }
    
    // 函数重载
    function $(readyFunc: () => void) : void
    function $(selector: string) : jqueryInstance
    
    
    namespace $ {
        namespace fn {
            class init {
    
            }
        }
    }
    export = $
}
// 使用interface语法，函数重载
// interface Jquery {
//     (readyFunc: () => void) : void
//     (selector: string) : jqueryInstance
// }

// declare var $: Jquery