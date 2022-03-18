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
			<View>
				<Text style={styles.textPrice}>R$ {coin.current_price}</Text>
				<Text
					style={[
						styles.pricePercentage,
						coin.price_change_percentage_24h > 0
							? styles.priceUp
							: styles.priceDown,
					]}
				>
					{coin.price_change_percentage_24h.toString().substring(0, 4)} %
				</Text>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	containerItem: {
		backgroundColor: '#4C566A',
		padding: 14,
		margin: 14,
		marginBottom: 7,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderRadius: 5,
	},
	containerNames: {
		marginLeft: 10,
	},
	coinName: {
		flexDirection: 'row',
	},
	text: {
		color: '#ECEFF4',
		fontWeight: 'bold',
		fontSize: 16,
	},
	image: {
		width: 32,
		height: 32,
	},
	textSymbol: {
		color: '#EBCB8B',
		textTransform: 'uppercase',
	},
	textPrice: {
		color: '#D8DEE9',
		textAlign: 'right',
	},
	pricePercentage: {
		color: '#D8DEE9',
		textAlign: 'right',
	},
	priceUp: {
		color: '#A3BE8C',
	},
	priceDown: {
		color: '#BF616A',
	},
});
export default CoinItem;
