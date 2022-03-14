import React from 'react';
import { useState } from 'react';

export default function Constants(props) {
    localStorage.setItem(props.set);
    localStorage.getItem(props.get);
}
