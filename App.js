import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

const App = () => {
	const loadData = async () => {
		const res = await fetch(
			'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false'
		);
		const data = await res.json();
		console.log(data);
		setCoins(data);
	};

	useEffect(() => {
		console.log('loaded');
		loadData();
	}, []);

	return (
		<View style={styles.container}>
			<Text>App</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#3B4252',
		alignItems: 'center',
		flex: 1,
	},
});

export default App;
