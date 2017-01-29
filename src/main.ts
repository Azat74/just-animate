/// <reference path="just-animate.d.ts" />
import * as animations from './animations';
import { animate } from './animate';

animate.register.apply(
    undefined,
    Object.keys(animations).map((k: string) => animations[k])
);

export { animations };