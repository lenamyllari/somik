import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";


export default function Activity() {
  const activityList = [
    { id: "0", text: "Drawing", uri: "https://thedb.ru/upload/image/wallpapers_42184.jpg" },
    { id: "1", text: "Reading", uri: 'https://images.ua.prom.st/833370338_luchshie-detskie-knigi.jpg' },
    { id: "2", text: "Football", uri: 'https://5.imimg.com/data5/RF/TI/MY-34329942/sports-football-500x500.jpg' },
    { id: "3", text: "Dollhouse", uri: 'https://upload.wikimedia.org/wikipedia/en/4/43/Early60sPB.jpg' },
    { id: "4", text: "Cooking", uri: 'https://ae01.alicdn.com/kf/HTB13aPQX5zxK1RjSspjq6AS.pXaL/New-children-Japanese-style-wooden-kitchen-toys-simulation-kitchen-cooking-toy-kids-pretend-play-toys.jpg' },
    { id: "5", text: "Ticket to ride", uri: 'https://z1.adlibris.com/35/0408a044-ff16-4bf3-a220-622c77509e7b.jpg' },
    { id: "6", text: "King domino", uri: 'https://cogsthebrainshop.ie/wp-content/uploads/2018/03/kingdomino-contents.jpg' },
    { id: "7", text: "Bingo", uri: 'https://lh3.googleusercontent.com/proxy/8IKbghRF7S7HhiOa4VlEkkyQyf1f08cTiBqs67XMqUteZrdCPMqi6w825Bph7q95K-AGRn8oWQBibOdqON7i9vHk04i4umwBXfWsJ-yfZ6i_cHPfqzSjKx7y7SlrzZ0UrYDUMViLUoruLYUh96nz9fEx3JyvDGg' },
    { id: "8", text: "Yatzee", uri: 'https://images-na.ssl-images-amazon.com/images/I/61ov9uJv78L._AC_SY355_.jpg' },
    { id: "9", text: "Trains", uri: 'https://www.ketunleikki.fi/wp-content/uploads/2019/07/dj06389-junarata.jpg' },
    { id: "10", text: "Cars", uri: "https://d2mpxrrcad19ou.cloudfront.net/item_images/761855/9930885_fullsize.jpg" },
    { id: "11", text: "Play doh", uri: 'https://kariteam.fi/storage/product_images/7/tuotesivu_Muovailuvahasetti4-os.PlayDoh_153307_2.jpg' },
    { id: "12", text: "Bike", uri: 'https://image.made-in-china.com/43f34j00kpIGTRefIHcB/Compertitive-Price-Bicycle-Kids-Bike-Popular-Style.jpg' },
    { id: "13", text: "Guess who", uri: 'https://cdn.shopify.com/s/files/1/1929/4309/products/guess-who-kids-toys-board-game-original-3_600x.jpg?v=1552205559' },
    { id: "14", text: "Sea battle", uri: 'https://st2.depositphotos.com/2429035/6118/i/950/depositphotos_61186381-stock-photo-carton-box-of-the-sea.jpg' },
  ];

  var randomId = Math.floor(Math.random()*activityList.length);

  return (
    <View style={styles.container}>
      <Image style={styles.somik} source={require('../assets/somik.jpg')}/>
      <Text style={styles.text}>That's what we gonna do:</Text>
      <Text style={styles.text}>{activityList[randomId].text}</Text>
      <Image style={styles.tinyLogo} source={{uri:activityList[randomId].uri,}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    borderWidth: 1,
    alignItems: "center",
  },
  tinyLogo: {  
    width: 200, 
    height: 200, 
  },
  text:{
    fontSize:20,
    color: "blue",
  },
  somik:{
    width: 200, 
    height: 160, 
  }
});
