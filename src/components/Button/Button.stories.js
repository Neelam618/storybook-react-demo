import React from 'react';
import Button from './Button';
import Center from '../Center/Center';

export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Button'
    }
}

// Stories: first approach
export const Primary = () => <Center><Button variant ='primary'>Primary</Button></Center>
export const Secondary = () => <Center><Button variant ='secondary'>Secondary</Button></Center>
export const Success = () => <Center><Button variant ='success'>Success</Button></Center>
export const Danger = () => <Center><Button variant ='danger'>Danger</Button></Center>

// Second approach: By passing arguments to button component

const Template = args => <Center><Button {...args} /></Center>

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    // children: 'Primary Args'
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,          //copied PrimaryA story
    // children: 'Long Primary Args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
    // children: 'Secondary Args'
}

