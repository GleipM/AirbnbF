import { StyleSheet, Text, View, FlatList } from "react-native";
import React, {useEffect, useState} from "react";
import CardListHouses from "../../../kernel/components/CardListHouses";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../kernel/utils/FirebaseConnection";
import { navigation } from "@react-navigation/native";

export default function Home(props){
    const {navigation} = props;
    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        (async()=>{
            const arrayHouses = [];
            const querySnapshot = await getDocs(collection(db, "Houses"));
            querySnapshot.forEach((doc) => { 
            const data = doc.data();
            data.id = doc.id;
            arrayHouses.push(data);
            });
            setHouses(arrayHouses);
            setLoading(false);
        })();
    },[]);
    return(
        <View style={styles.container}>
            <FlatList
            data={houses}
            renderItem={({item})=>(
                <CardListHouses
                images={item.images}
                title={item.name}
                description={item.description}
                price={item.price}
                rating={item.rating}
                count={item.count}
                navigation={navigation}
                view="HouseDetail"
                />
            )}
            keyExtractor={(item)=>item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    }
})