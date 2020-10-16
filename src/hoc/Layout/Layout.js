import React from 'react'
import styles from './Layout.module.css'
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import {connect} from "react-redux";

class Layout extends React.Component {

    state = {
        menu: false
    }

    toggleMenuhandled = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        return (
            <div className={styles.Layout}>

                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.menuCloseHandler}
                    isAuthenticated={this.props.isAuthenticated}
                />

                <MenuToggle
                    onToggle={this.toggleMenuhandled}
                    isOpen={this.state.menu}
                />

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProps)(Layout)