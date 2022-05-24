import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import SmokeText from './SmokeText';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


//В данном тесте, мы не должны обнаружить текста в нашем контейнере, с отрисованным компонентом

it("testing SmokeText", () => {
    act(() => {
        render(<SmokeText transform={null} nameOfClass={null}>Москва</SmokeText>, container);
    });
    expect(container.textContent.includes('Москва')).toBe(false);

    act(() => {
        render(<SmokeText transform={null} nameOfClass={null}>18+</SmokeText>, container);
    });
    expect(container.textContent.includes('18+')).toBe(false);

    act(() => {
        render(<SmokeText transform={null} nameOfClass={null}>test</SmokeText>, container);
    });
    expect(container.textContent.includes('test')).toBe(false);
});