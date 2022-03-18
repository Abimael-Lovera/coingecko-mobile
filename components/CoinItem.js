import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const CoinItem = ({ coin }) => {
	return (
		<View style={styles.containerItem}>
			<View style={styles.coinName}>
				<Image style={styles.image} source={{ uri: coin.image }} />
				<View style={styles.containerNames}>
					<Text style={styles.text}>{coin.name}</Text>
					<Text style={styles.textSymbol}>{coin.symbol}</Text>
				</View>
			</View>
			<Text style={styles.text}>10000</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	containerItem: {
		backgroundColor: '#4C566A',
		padding: 16,
		margin: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	containerNames: {
		marginLeft: 10,
	},
	coinName: {
		flexDirection: 'row',
	},
	text: {
		color: '#A3BE8C',
	},
	image: {
		width: 30,
		height: 30,
	},
	textSymbol: {
		color: '#B48EAD',
		textTransform: 'uppercase',
	},
});
export default CoinItem;
