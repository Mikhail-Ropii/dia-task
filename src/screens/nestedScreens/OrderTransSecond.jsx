import { StyleSheet, Text, View, Image } from "react-native";

export const OrderTransSecond = () => {
  return (
    <View>
      <View>
        <Image source={require("../../../assets/img/angar.jpg")} />
      </View>
      <View>
        <Text>Грузовоз</Text>
        <Text>300 грн/кв.м.</Text>
        <Text>min 200 грн/кг</Text>
      </View>
      <View>
        <Text>22.02.2022</Text>
        <Text>4.8</Text>
        <Text>12 тис.</Text>
      </View>
      <View>
        <Text>Прізвище</Text>
        <Text>Ім’я</Text>
      </View>
      <View>
        <Text>По-батькові</Text>
        <Text>По-батькові</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
});
