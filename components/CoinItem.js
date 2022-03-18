import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const CoinItem = ({ coin }) => {
	return (
		<View style={styles.containerItem}>
			<View style={styles.coinName}>
				<Image style={styles.image} source={{ uri: coin.image }} />
				<Text style={styles.text}>{coin.name}</Text>
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
	coinName: {
		flexDirection: 'row',
	},
	text: {
		color: '#ECEFF4',
	},
	image: {
		width: 30,
		height: 30,
	},
});
export default CoinItem;
