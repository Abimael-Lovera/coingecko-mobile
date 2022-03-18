import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TextInput,
	StatusBar,
} from 'react-native';

import { useEffect, useState } from 'react';
import CoinItem from './components/CoinItem';

const App = () => {
	const [coins, setCoins] = useState([]);

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
			<StatusBar backgroundColor='#434C5E' />
			<View>
				<Text style={styles.title}>Coingecko Crypto</Text>
				<TextInput />
			</View>
			<FlatList
				style={styles.list}
				data={coins}
				renderItem={({ item }) => {
					console.log(item.name);
					return <CoinItem coin={item} />;
				}}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#3B4252',
		alignItems: 'center',
		flex: 1,
	},
	title: {
		color: '#FFFFFF',
		marginTop: 16,
		fontSize: 20,
	},
	list: {
		width: '90%',
	},
});

export default App;
