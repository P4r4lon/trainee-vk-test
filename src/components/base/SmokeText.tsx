import * as React from "react";
import styled from "styled-components";

export default ({transform, nameOfClass, children}) => {
	const HiddenText = styled.div`
		display: inline-block;
		&:after{
			content: "${children}"	
		}
	`;

	return <HiddenText className = {transform && transform(nameOfClass)}/>
}
