import * as React from "react";
import styled from "styled-components";

//пришлось пробросить пропсы transform и nameOfClass, для того чтобы полностью
//повторить начальный функционал - стилизацию ссылки
//
//Псевдоэлементы появляются на этапе применения стилей - в DOM дереве их нет, значит XPath и регулярки наш текст не найдут

export default ({transform, nameOfClass, children}) => {
	const HiddenText = styled.div`
		display: inline-block;
		&:after{
			content: "${children}"	
		}
	`;

	return <HiddenText className = {transform && transform(nameOfClass)}/>
}

