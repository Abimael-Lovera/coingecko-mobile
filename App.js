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
	const [search, setSearch] = useState('');
	const [refreshing, setRefreshing] = useState(false);

	const loadData = async () => {
		const res = await fetch(
			'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false'
		);
		const data = await res.json();
		setCoins(data);
	};

	useEffect(() => {
		console.log('loaded');
		loadData();
	}, []);

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='#434C5E' />
			<View style={styles.header}>
				<Text style={styles.title}>Coingecko Crypto</Text>
				<TextInput
					style={styles.searchInput}
					onChangeText={text => setSearch(text)}
					placeholder='Search Coin'
					placeholderTextColor='#858585'
				/>
			</View>
			<FlatList
				style={styles.list}
				data={coins.filter(
					coin =>
						coin.name.toLowerCase().includes(search.toLowerCase()) ||
						coin.symbol.toLowerCase().includes(search.toLowerCase())
				)}
				renderItem={({ item }) => {
					return <CoinItem coin={item} />;
				}}
				showsVerticalScrollIndicator={false}
				refreshing={refreshing}
				onRefresh={async () => {
					setRefreshing(true);
					await loadData();
					setRefreshing(false);
				}}
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
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '90%',
		marginTop: 16,
		marginBottom: 16,
	},
	title: {
		color: '#FFFFFF',

		fontSize: 24,
		fontWeight: 'bold',
	},
	searchInput: {
		color: '#E5E9F0',
		borderBottomColor: '#E5E9F0',
		borderBottomWidth: 2,
		width: '40%',
		textAlign: 'center',
	},
	list: {
		width: '95%',
	},
});

export default App;
