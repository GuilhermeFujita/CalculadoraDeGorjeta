import React, {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';
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

const PercentageArea = styled.View`
	flex-direction: row;
	margin: 20px;
`;

const PercentageItem = styled.Button``;

export default () => {
	const [bill, setBill] = useState('');
	const [tip, setTip] = useState(0);
	const [percentage, setPercentage] = useState(10);

	const handleCalc = () => {
		Keyboard.dismiss();
		let nBill = parseFloat(bill);
		if (nBill) {
			calc();
		} else {
			alert('Digite o valor da conta');
		}
	};

	const calc = () => {
		Keyboard.dismiss();
		let nBill = parseFloat(bill);

		setTip((percentage / 100) * nBill);
	};

	useEffect(() => {
		calc();
	}, [percentage]);

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

			<PercentageArea>
				<PercentageItem title="5%" onPress={() => setPercentage(5)} />
				<PercentageItem title="10%" onPress={() => setPercentage(10)} />
				<PercentageItem title="15%" onPress={() => setPercentage(15)} />
				<PercentageItem title="20%" onPress={() => setPercentage(20)} />
			</PercentageArea>

			<CalcButton
				title={`Calcular ${percentage}%`}
				onPress={handleCalc}
			/>

			{tip > 0 && (
				<ResultArea>
					<ResultItemTitle>Valor da conta</ResultItemTitle>
					<ResultItem>{parseFloat(bill).toFixed(2)}</ResultItem>

					<ResultItemTitle>Valor da gorgeta</ResultItemTitle>
					<ResultItem>
						{tip.toFixed(2)} ({percentage}%)
					</ResultItem>

					<ResultItemTitle>Valor total</ResultItemTitle>
					<ResultItem>
						{(parseFloat(bill) + tip).toFixed(2)}
					</ResultItem>
				</ResultArea>
			)}
		</Page>
	);
};
