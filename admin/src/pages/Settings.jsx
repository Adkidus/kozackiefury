import React from 'react'
import { Card } from '../styles/Card'
import { Section } from '../styles/Section'


export default function Settings() {
    return <Section>
        <Card>
            <div className='header'>
                <div className="title">
                    <h2>Ustawienia</h2>
                </div>
            </div>
        </Card>

        <div className="grid">
            <div className='row__one'>
            <Card>1</Card>
            <Card>2</Card>
            </div>
        </div>

    </Section>
};