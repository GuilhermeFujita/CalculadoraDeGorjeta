import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
	flex: 1;
	align-items: center;
`;

const HeaderText = styled.Text`
	font-size: 25px;
`;

const Input = styled.TextInput`
	width: 90%;
	height: 50px;
	font-size: 18px;
	background: #eee;
	margin-top: 20px;
	border-radius: 10px;
`;

export default () => {
	const [bill, setBill] = useState('');

	return (
		<Page>
			<HeaderText>Calculadora de Gorjeta</HeaderText>
			<Input
				placeholder="Quanto deu a conta?"
				placeholderTextColor="#000"
				keyboardType="numeric"
				value={bill}
				onChangeText={(value) => setBill(value)}
			/>
		</Page>
	);
};
