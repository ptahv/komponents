import React from 'react';
import css from '../../../../common-css-class/css';

export default class extends React.Component {
    preventClose = false;

    componentDidMount() {
        // If required, onBlur ja onFocus events can be used for keyboard actions.
        //
        window.addEventListener(
            "komponents_dropdown_click",
            this.closeDropdown,
            true
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
            "komponents_dropdown_click",
            this.closeDropdown,
            true
        );
    }

    closeDropdown = () => {
        if (!this.preventClose && this.props.onClose)
            setTimeout(this.props.onClose);

        this.preventClose = false;
    }

    render() {
        const {
            style = {},
            className = '',

            visibleAfterClick = false,
        } = this.props;

        return (
            <React.Fragment>
                <div 
                    className={className}
                    style={{
                        zIndex: 999,
                        ...css`
                            position-absolute 
                            background-color-white
                            shadow`,
                        ...style
                    }}
                    onMouseDown={visibleAfterClick ? () => { this.preventClose = true } : null}
                    >
                    {this.props.children}

                </div>

                {modal && (
                    <AppendToBody>
                        <div className='esc esc-dropdown-modalBackground' />
                    </AppendToBody>
                )}
            </React.Fragment>
        )
    }
}