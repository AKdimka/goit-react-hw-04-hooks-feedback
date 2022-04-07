import styled from 'styled-components';

export const BtnsBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const Btn = styled.button`
  cursor: pointer;
  font: 18px/18px 'Trebuchet MS';
	border: 0;
  border-radius: 3px;
	background: #CEBF57;
	letter-spacing: 1px;
	padding: 13px 25px 10px;
	transition: all .4s;
	:hover{
		transform: scale(1.2)
	}
`