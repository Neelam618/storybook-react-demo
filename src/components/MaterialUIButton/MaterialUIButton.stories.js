import React from 'react';
import { Button } from '@material-ui/core';

// function App() {
//   return <Button color="primary">Hello World</Button>;
// }

export default {
    title: 'Material UI/Button',
    component: Button
}

export const Primary = () => <Button variant="contained" color ='primary'>Primary</Button>
export const Secondary = () => <Button variant="contained" color ='secondary'>Secondary</Button>
