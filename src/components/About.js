import React, { Component } from 'react'
import Link from 'next/link'
import { PageConsumer } from './PageContext'

export class About extends Component {
  render() {
    return (
        <div>About page
            <Link href="/"><a>Back to home</a></Link>
        </div>
    )
  }
}

export default About
