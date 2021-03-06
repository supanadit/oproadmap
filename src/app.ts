import { Roadmap } from './model/roadmap';

const oproadmap = document.getElementById('oproadmap');

oproadmap.innerHTML = '<table border="1"><tr><td>Hello World</td><td>Test</td><td>Hello World</td></tr></table>';

const r = new Roadmap();
r.hello();
