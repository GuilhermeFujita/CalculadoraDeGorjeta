import React, {useState} from 'react';
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
	margin-bottom: 30px;
	border-radius: 10px;
`;

const CalcButton = styled.Button`
	margin-top: 30px;
`;

const ResultArea = styled.View`
	width: 100%;
	margin-top: 30px;
	background-color: #eee;
	padding: 20px;
	align-items: center;
	justify-content: center;
`;

const ResultItemTitle = styled.Text`
	font-size: 18px;
	font-weight: bold;
`;

const ResultItem = styled.Text`
	font-size: 15px;
	margin-bottom: 30px;
`;

export default () => {
	const [bill, setBill] = useState('');
	const [tip, setTip] = useState(0);

	const calc = () => {
		let nBill = parseFloat(bill);

		if (nBill) {
			setTip(nBill * 0.1);
		} else {
			alert('Digite o valor da conta');
		}
	};

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
			<CalcButton title="Calcular" onPress={calc} />

			{tip > 0 && (
				<ResultArea>
					<ResultItemTitle>Valor da conta</ResultItemTitle>
					<ResultItem>{parseFloat(bill).toFixed(2)}</ResultItem>

					<ResultItemTitle>Valor da gorgeta</ResultItemTitle>
					<ResultItem>{tip.toFixed(2)}</ResultItem>

					<ResultItemTitle>Valor total</ResultItemTitle>
					<ResultItem>
						{(parseFloat(bill) + tip).toFixed(2)}
					</ResultItem>
				</ResultArea>
			)}
		</Page>
	);
};
