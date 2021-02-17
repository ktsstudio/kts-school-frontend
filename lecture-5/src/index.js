import * as React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';

import Button from 'components/Button';

import './styles.modules.scss';
import image from './img/exit.svg';

import './global.scss';

render(<div styleName="app" style={{
  backgroundImage: `url(${image})`
}}><Button title="Кнопка" />с глоабльным стилем</div>, document.getElementById('root'));
