import React from 'react';
import { Button } from '@material-ui/core';
import {action, actions} from '@storybook/addon-actions';


export default {
    title: 'Material UI/Button',
    component: Button,
    args: {
        variant: 'contained'
    },
    argTypes: {
        // color: {control: 'text'},
        // children: {control: 'text'}
        onClick: {action: 'clicked'},
        onMouseOver: {action: 'mouse over'}
    }
}

// export const Primary = () => <Button variant="contained" color ='primary'>Primary</Button>
// export const Secondary = () => <Button variant="contained" color ='secondary'>Secondary</Button>

// Using args

const Template = args => <Button {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    // variant: 'contained',
    color: 'primary',
    children: 'Primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
    // variant: 'contained',
    color: 'secondary',
    children: 'Secondary'
}

