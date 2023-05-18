import { Image } from "expo-image";
import { useState, useCallback } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { DatePickerModal, TimePickerModal } from "react-native-paper-dates";
import {
  Color,
  FontFamily,
  Padding,
  Border,
  FontSize,
} from "../../../GlobalStyles";
//SVG
import Calendar from "../../../assets/svg/calendar";

export const OrderTransFirst = () => {
  const [countryLoad, setCountryLoad] = useState("");
  const [regionLoad, setRegionLoad] = useState("");
  const [cityLoad, setCityLoad] = useState("");
  const [countryUnload, setCountryUnload] = useState("");
  const [regionUnload, setRegionUnload] = useState("");
  const [cityUnload, setCityUnload] = useState("");
  const [locations, setLocations] = useState({});
  const [forwarder, setForwarder] = useState(false);
  const [loader, setLoader] = useState(false);

  //Date Picker attributes
  const [range, setRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [isOpenDate, setIsOpenDate] = useState(false);

  const onDismissDate = useCallback(() => {
    setIsOpenDate(false);
  }, [setIsOpenDate]);

  const onConfirmDate = useCallback(
    ({ startDate, endDate }) => {
      setIsOpenDate(false);
      setRange({ startDate, endDate });
    },
    [setIsOpenDate, setRange]
  );
  //End of Date Picker
  //Time Picker
  const [isOpenTime, setIsOpenTime] = useState(false);
  const [time, setTime] = useState({ hours: "12", minutes: "00" });
  const onDismissTime = useCallback(() => {
    setIsOpenTime(false);
  }, [setIsOpenTime]);

  const onConfirmTime = useCallback(
    ({ hours, minutes }) => {
      setIsOpenTime(false);
      setTime({ hours, minutes });
    },
    [setIsOpenTime]
  );

  return (
    <SafeAreaView>
      <DatePickerModal
        locale="uk"
        mode="range"
        visible={isOpenDate}
        onDismiss={onDismissDate}
        startDate={range.startDate}
        endDate={range.endDate}
        onConfirm={onConfirmDate}
        startLabel={"Від"}
        endLabel={"До"}
      />
      <TimePickerModal
        locale="uk"
        visible={isOpenTime}
        onDismiss={onDismissTime}
        onConfirm={onConfirmTime}
        label="Оберіть час"
        cancelLabel="Закрити"
        confirmLabel="Зберегти"
        hours={12}
        minutes={0}
      />
      <View styles={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.titleH1}>Загрузка</Text>
          </View>
          <Text style={styles.titleH2}>Місце</Text>
          <View style={styles.inputWrap}>
            <Text style={styles.lable}>Країна</Text>
            <TextInput
              style={styles.adressInput}
              placeholder="Україна"
              onChangeText={setCountryLoad}
              value={countryLoad}
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.lable}>Область</Text>
            <TextInput
              style={styles.adressInput}
              placeholder="Київська"
              onChangeText={setRegionLoad}
              value={regionLoad}
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.lable}>Місто</Text>
            <TextInput
              style={styles.adressInput}
              placeholder="Київ"
              onChangeText={setCityLoad}
              value={cityLoad}
            />
          </View>

          <View style={styles.inputWrap}>
            <Text style={styles.lable}>Адреса</Text>
            <View style={styles.googleInputWrap}>
              <GooglePlacesAutocomplete
                placeholder="Антоновича, 176"
                returnKeyType={"default"}
                fetchDetails={true}
                currentLocation={false}
                isRowScrollable={true}
                keepResultsAfterBlur={false}
                enablePoweredByContainer={false}
                styles={styles.googlePlaces}
                onPress={(data, details) => {
                  console.log(data, details);
                }}
                query={{
                  key: "",
                  language: "en",
                  components: "country:ua",
                }}
              />
            </View>
          </View>

          <View style={styles.dateBlock}>
            <Text style={styles.titleH2}>Дата і час прибуття</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={styles.lable}>Дата</Text>
                <TouchableWithoutFeedback onPress={() => setIsOpenDate(true)}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.dateInput}>{`${
                      range.startDate
                        ? range.startDate
                            .toJSON()
                            .slice(0, 10)
                            .split("-")
                            .reverse()
                            .join(".")
                        : "Оберіть"
                    } - ${
                      range.endDate
                        ? range.endDate
                            .toJSON()
                            .slice(0, 10)
                            .split("-")
                            .reverse()
                            .join(".")
                        : "Оберіть"
                    }`}</Text>
                    <Calendar />
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <View>
                <Text style={styles.lable}>Час</Text>
                <TouchableWithoutFeedback onPress={() => setIsOpenTime(true)}>
                  <Text
                    style={styles.timeInput}
                  >{`${time.hours}:${time.minutes}`}</Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View>
            <Text style={styles.titleH1}>Вигрузка</Text>
          </View>
          <Text style={styles.titleH2}>Місце</Text>
          <View style={styles.inputWrap}>
            <Text style={styles.lable}>Країна</Text>
            <TextInput
              style={styles.adressInput}
              placeholder="Україна"
              onChangeText={setCountryUnload}
              value={countryUnload}
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.lable}>Область</Text>
            <TextInput
              style={styles.adressInput}
              placeholder="Київська"
              onChangeText={setRegionUnload}
              value={regionUnload}
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.lable}>Місто</Text>
            <TextInput
              style={styles.adressInput}
              placeholder="Київ"
              onChangeText={setCityUnload}
              value={cityUnload}
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.lable}>Адреса</Text>
            <View style={styles.googleInputWrap}>
              <GooglePlacesAutocomplete
                placeholder="Антоновича, 176"
                returnKeyType={"default"}
                fetchDetails={true}
                currentLocation={false}
                isRowScrollable={true}
                keepResultsAfterBlur={false}
                enablePoweredByContainer={false}
                styles={styles.googlePlaces}
                onPress={(data, details) => {
                  console.log(data, details);
                }}
                query={{
                  key: "",
                  language: "en",
                  components: "country:ua",
                }}
              />
            </View>
          </View>
          <View style={styles.separator}></View>
          <View>
            <TouchableOpacity
              onPress={() => setForwarder(!forwarder)}
              style={styles.checkbox}
            >
              <View
                style={[styles.checkboxContainer, forwarder && styles.checked]}
              >
                {forwarder && <View style={styles.checkboxFill} />}
              </View>
              <Text style={styles.label}>Check me!</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setLoader(!loader)}
              style={styles.checkbox}
            >
              <View
                style={[styles.checkboxContainer, loader && styles.checked]}
              >
                {loader && <View style={styles.checkboxFill} />}
              </View>
              <Text style={styles.label}>Check me!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  titleH1: {
    fontFamily: FontFamily.bold,
    color: Color.purple,
    fontSize: FontSize.H1_size,
    lineHeight: 25,
  },
  titleH2: {
    fontFamily: FontFamily.bold,
    color: Color.black500,
    fontSize: FontSize.boldH3_size,
    fontSize: 16,
    lineHeight: 20,
    margin: 10,
  },
  lable: {
    fontFamily: FontFamily.medium,
    color: Color.black500,
    fontWeight: "500",
    textAlign: "left",
    fontSize: 14,
    lineHeight: 18,
  },
  inputWrap: {
    marginBottom: 15,
  },
  textTypo1: {
    width: 280,
    textAlign: "left",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
  },
  adressInput: {
    borderBottomWidth: 1,
    borderColor: Color.purple,
    fontFamily: FontFamily.regular,
    fontSize: 16,
    lineHeight: 20,
  },
  googleInputWrap: {
    // marginBottom: 20,
  },
  googlePlaces: {
    textInputContainer: {
      marginTop: 0,
    },
    textInput: {
      height: 30,
      fontFamily: FontFamily.regular,
      color: Color.black500,
      fontSize: 16,
      borderBottomWidth: 1,
      borderColor: Color.purple,
      borderRadius: 0,
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
    textInputContainer: {
      backgroundColor: "transparent",
      borderTopWidth: 0,
      borderBottomWidth: 0,
    },
    poweredContainer: {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
  },
  dateInput: {
    borderBottomWidth: 1,
    borderColor: Color.purple,
    minWidth: 184,
    fontFamily: FontFamily.regular,
    fontSize: 16,
    lineHeight: 20,
  },
  timeInput: {
    borderBottomWidth: 1,
    borderColor: Color.purple,
    minWidth: 66,
    fontFamily: FontFamily.regular,
    fontSize: 16,
    lineHeight: 20,
  },
  separator: {
    backgroundColor: Color.separatorColor,
    height: 1,
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxContainer: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checked: {
    backgroundColor: "blue",
  },
  checkboxFill: {
    width: 12,
    height: 12,
    backgroundColor: "white",
  },
  label: {
    fontSize: 16,
    color: "black",
  },
});
