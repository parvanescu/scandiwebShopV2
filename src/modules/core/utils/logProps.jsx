import React, {Component, forwardRef} from "react";

export function withRef(WrappedComponent) {
    class LogProps extends Component {
        render() {
            const {forwardedRef, ...rest} = this.props;

            return <WrappedComponent ref={forwardedRef} {...rest}/>
        }

    }

    return forwardRef((props, ref) => {
        return <LogProps {...props} forwardedRef={ref}/>
    })
}