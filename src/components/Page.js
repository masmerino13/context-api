import React, { Component } from 'react'
import Header from './Header'
import { PageProvider, PageConsumer } from './PageContext'

class Page extends Component {
    setNavState = navActive => {
        this.setState({
            navActive
        })
    }

    state = {
        navActive: false,
        setNavState: this.setNavState
    }

    render() {
        return (
            <div id="main">
                <PageProvider value={this.state}>
                    <Header />
                    {this.props.children}
                </PageProvider>
            </div>
        )
    }
}

export default Page
