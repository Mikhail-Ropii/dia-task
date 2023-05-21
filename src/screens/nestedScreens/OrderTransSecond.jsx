import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Color, FontFamily, FontSize } from "../../../GlobalStyles";
//Components
import { Btn } from "../../components/Btn";
import { Map } from "../../components/Map";

export const OrderTransSecond = ({ route }) => {
  const { qtyLoaders, timeForLoaders } = route.params;
  const oneKmPrice = 20;
  const oneLoadersPrice = 100;

  console.log(qtyLoaders, timeForLoaders);

  const sumLoaders = qtyLoaders * oneLoadersPrice;
  const costLoaders = oneLoadersPrice * qtyLoaders * timeForLoaders;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainDataWrap}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.img}
              source={require("../../../assets/img/angar.jpg")}
            />
            <View>
              <Text style={[styles.lable, { marginBottom: 0 }]}>Грузовоз</Text>
              <Text style={styles.accentText}>300 грн/кв.м.</Text>
              <Text style={styles.lightText}>min 200 грн/кг</Text>
            </View>
          </View>
          <View>
            <Text style={styles.dateText}>22.02.2022</Text>
            <Text style={styles.ratingText}>4.8</Text>
            <Text>12 тис.</Text>
          </View>
        </View>
        <View style={styles.contactsWrap}>
          <View>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.lable}>Прізвище</Text>
              <Text style={styles.contactsText}>Валунов</Text>
            </View>
            <Text style={styles.lable}>Ім’я</Text>
            <Text style={styles.contactsText}>Валентин</Text>
          </View>
          <View>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.lable}>По-батькові</Text>
              <Text style={styles.contactsText}>Валерійович</Text>
            </View>
            <Text style={styles.lable}>Номер телефону</Text>
            <Text style={styles.contactsText}>+38 (097) 333 3333</Text>
          </View>
        </View>
        <View style={styles.payChoiceThumb}>
          <Text style={styles.payMetodText}>Повна оплата</Text>
        </View>
        <View style={styles.mapThumb}>
          <Map />
        </View>
        <View style={styles.lineWrap}>
          <Text style={styles.dataText}>Подача транспотру</Text>
          <Text style={styles.dataPriceText}>2000 грн</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.lineWrap}>
          <Text style={styles.dataText}>Маршрут загрузка - вигрузка</Text>
          <Text style={styles.dataPriceText}>2000 грн</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.lineWrap}>
          <Text style={styles.dataText}>Послуги експедитора</Text>
          <Text style={styles.dataPriceText}>2000 грн</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.lineWrap}>
          <Text style={styles.dataText}>Послуги грузчиків</Text>
          <Text style={styles.dataPriceText}>{costLoaders} грн</Text>
        </View>
        <View style={styles.lineWrap}>
          <Text style={styles.dataText}>{qtyLoaders} грузчиків</Text>
          <Text style={styles.dataPriceText}>{sumLoaders} грн/год</Text>
        </View>
        <View style={[styles.lineWrap, { marginBottom: 15 }]}>
          <Text style={styles.dataText}>Зайнятість</Text>
          <Text style={styles.dataPriceText}>{timeForLoaders} години</Text>
        </View>
        <View style={{ marginBottom: 15 }}>
          <Text style={styles.boldText}>Повна ціна:</Text>
          <Text style={styles.titleH1}>32 000 грн</Text>
        </View>
        <View style={{ alignItems: "center", marginBottom: 35 }}>
          <TouchableOpacity activeOpacity={0.7}>
            <Btn>Оформити</Btn>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  separator: {
    backgroundColor: Color.separatorColor,
    height: 1,
    marginBottom: 10,
  },
  img: {
    width: 130,
    marginRight: 10,
  },
  mainDataWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  lable: {
    fontFamily: FontFamily.medium,
    color: Color.mainBlack,
    fontSize: FontSize.H4_size,
    lineHeight: 18,
    marginBottom: 3,
  },
  accentText: {
    fontFamily: FontFamily.medium,
    fontSize: FontSize.H3_size,
    lineHeight: 20,
    color: Color.purple,
  },
  lightText: {
    fontFamily: FontFamily.light,
    fontSize: FontSize.size_xs,
    color: Color.blackLight,
    lineHeight: 15,
  },
  dateText: {
    fontFamily: FontFamily.light,
    fontSize: FontSize.size_2xs,
    color: Color.blackLight,
    lineHeight: 14,
  },
  ratingText: {
    fontFamily: FontFamily.medium,
    fontSize: FontSize.H4_size,
    color: Color.blackLight,
    lineHeight: 18,
  },
  dataText: {
    fontFamily: FontFamily.light,
    fontSize: FontSize.H3_size,
    color: Color.mainBlack,
    lineHeight: 20,
  },
  dataPriceText: {
    fontFamily: FontFamily.medium,
    fontSize: FontSize.H3_size,
    color: Color.mainBlack,
    lineHeight: 20,
  },
  contactsWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  contactsText: {
    fontFamily: FontFamily.light,
    fontSize: FontSize.H3_size,
    color: Color.blackLight,
    lineHeight: 20,
  },
  payChoiceThumb: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    height: 50,
    borderRadius: 5,
    backgroundColor: Color.bgPurple,
  },
  payMetodText: {
    fontFamily: FontFamily.bold,
    fontSize: FontSize.H1_size,
    color: Color.secondBlack,
    lineHeight: 25,
  },
  mapThumb: {
    height: 350,
    borderWidth: 6,
    borderColor: Color.bgPurple,
    borderRadius: 12,
    marginBottom: 15,
  },
  lineWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  boldText: {
    fontFamily: FontFamily.bold,
    color: Color.secondBlack,
    fontSize: FontSize.H3_size,
    lineHeight: 20,
  },
  titleH1: {
    fontFamily: FontFamily.bold,
    color: Color.purple,
    fontSize: FontSize.H1_size,
    lineHeight: 25,
  },
});
