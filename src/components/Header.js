import React, { Component } from 'react'
import { PageConsumer } from './PageContext'

class Header extends Component {
    render() {
        return (
        <div>
            Header page!
            <PageConsumer>
                {
                    ({navState, setNavState}) => {
                        return <p onClick={() => setNavState(true)}>something</p>
                    }
                }
            </PageConsumer>
        </div>
        )
    }
}

export default Header

