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
import { GOOGLE_MAPS_APIKEY } from "@env";

//Components
import { Btn } from "../../components/Btn";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { DatePickerModal, TimePickerModal } from "react-native-paper-dates";
import DropDownPicker from "react-native-dropdown-picker";
import MaskInput from "react-native-mask-input";
import { phoneMask } from "../../helpers/phoneMask";

import { Color, FontFamily, FontSize } from "../../../GlobalStyles";
//SVG
import Calendar from "../../../assets/svg/calendar";
import Arrow from "../../../assets/svg/arrow";

export const OrderTransFirst = ({ navigation }) => {
  const [countryLoad, setCountryLoad] = useState("");
  const [regionLoad, setRegionLoad] = useState("");
  const [cityLoad, setCityLoad] = useState("");
  const [countryUnload, setCountryUnload] = useState("");
  const [regionUnload, setRegionUnload] = useState("");
  const [cityUnload, setCityUnload] = useState("");
  const [locations, setLocations] = useState({});
  const [searchAddress, setSearchAddress] = useState("");
  const [forwarder, setForwarder] = useState(false);
  const [needLoader, setNeedLoader] = useState(false);
  const [qtyLoaders, setQtyLoaders] = useState(null);
  const [phone, setPhone] = useState();
  const [selectedPayMetod, setSelectedPayMetod] = useState();

  //Date Picker attributes
  //Load
  const [rangeLoad, setRangeLoad] = useState({
    startDate: null,
    endDate: null,
  });
  const [isOpenLoadDate, setIsOpenLoadDate] = useState(false);

  const onDismissLoadDate = useCallback(() => {
    setIsOpenLoadDate(false);
  }, [setIsOpenLoadDate]);

  const onConfirmLoadDate = useCallback(
    ({ startDate, endDate }) => {
      setIsOpenLoadDate(false);
      setRangeLoad({ startDate, endDate });
    },
    [setIsOpenLoadDate, setRangeLoad]
  );
  //Unload
  const [rangeUnload, setRangeUnload] = useState({
    startDate: null,
    endDate: null,
  });
  const [isOpenUnloadDate, setIsOpenUnloadDate] = useState(false);

  const onDismissUnloadDate = useCallback(() => {
    setIsOpenUnloadDate(false);
  }, [setIsOpenUnloadDate]);

  const onConfirmUnloadDate = useCallback(
    ({ startDate, endDate }) => {
      setIsOpenUnloadDate(false);
      setRangeUnload({ startDate, endDate });
    },
    [setIsOpenUnloadDate, setRangeUnload]
  );
  //End of Date Picker attributes
  //Time Picker
  const [isOpenLoadTime, setIsOpenLoadTime] = useState(false);
  const [timeLoad, setTimeLoad] = useState({ hours: "12", minutes: "00" });
  const onDismissLoadTime = useCallback(() => {
    setIsOpenLoadTime(false);
  }, [setIsOpenLoadTime]);

  const onConfirmLoadTime = useCallback(
    ({ hours, minutes }) => {
      setIsOpenLoadTime(false);
      setTimeLoad({ hours, minutes });
    },
    [setIsOpenLoadTime]
  );
  //Unload
  const [isOpenUnloadTime, setIsOpenUnloadTime] = useState(false);
  const [timeUnload, setTimeUnload] = useState({ hours: "12", minutes: "00" });
  const onDismissUnloadTime = useCallback(() => {
    setIsOpenUnloadTime(false);
  }, [setIsOpenUnloadTime]);

  const onConfirmUnloadTime = useCallback(
    ({ hours, minutes }) => {
      setIsOpenUnloadTime(false);
      setTimeUnload({ hours, minutes });
    },
    [setIsOpenUnloadTime]
  );
  //End of Time Picker attributes

  //Loaders Dropdown attributes
  const [openLoadersInput, setOpenLoadersInput] = useState(false);
  const [valueLoadersInput, setValueLoadersInput] = useState(2);
  const [itemsLoadersInput, setItemsLoadersInput] = useState([
    { label: "2 год", value: 2 },
    { label: "4 год", value: 4 },
    { label: "6 год", value: 6 },
  ]);

  const handleLoadersInput = (value) => {
    const onlyNumeric = value.replace(/[^0-9]/g, "");
    setQtyLoaders(onlyNumeric);
  };

  const handlePaymentSelect = (option) => {
    setSelectedPayMetod(option);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <DatePickerModal
          locale="uk"
          mode="range"
          visible={isOpenLoadDate}
          onDismiss={onDismissLoadDate}
          startDate={rangeLoad.startDate}
          endDate={rangeLoad.endDate}
          onConfirm={onConfirmLoadDate}
          startLabel={"Від"}
          endLabel={"До"}
        />
        <DatePickerModal
          locale="uk"
          mode="range"
          visible={isOpenUnloadDate}
          onDismiss={onDismissUnloadDate}
          startDate={rangeUnload.startDate}
          endDate={rangeUnload.endDate}
          onConfirm={onConfirmUnloadDate}
          startLabel={"Від"}
          endLabel={"До"}
        />
        <TimePickerModal
          locale="uk"
          visible={isOpenLoadTime}
          onDismiss={onDismissLoadTime}
          onConfirm={onConfirmLoadTime}
          label="Оберіть час"
          cancelLabel="Закрити"
          confirmLabel="Зберегти"
          hours={12}
          minutes={0}
        />
        <TimePickerModal
          locale="uk"
          visible={isOpenUnloadTime}
          onDismiss={onDismissUnloadTime}
          onConfirm={onConfirmUnloadTime}
          label="Оберіть час"
          cancelLabel="Закрити"
          confirmLabel="Зберегти"
          hours={12}
          minutes={0}
        />
        <View>
          <Text style={styles.titleH1}>Загрузка</Text>
        </View>
        <Text style={styles.titleH2}>Місце</Text>
        <View style={styles.inputWrap}>
          <Text style={styles.lable}>Країна</Text>
          <View style={styles.inputFlex}>
            <TextInput
              style={styles.input}
              placeholder="Україна"
              onChangeText={setCountryLoad}
              value={countryLoad}
            />
            <Arrow />
          </View>
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.lable}>Область</Text>
          <View style={styles.inputFlex}>
            <TextInput
              style={styles.input}
              placeholder="Київська"
              onChangeText={setRegionLoad}
              value={regionLoad}
            />
            <Arrow />
          </View>
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.lable}>Місто</Text>
          <View style={styles.inputFlex}>
            <TextInput
              style={styles.input}
              placeholder="Київ"
              onChangeText={setCityLoad}
              value={cityLoad}
            />
            <Arrow />
          </View>
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.lable}>Адреса</Text>
          <View style={styles.googleInputWrap}>
            <View style={styles.inputFlex}>
              <GooglePlacesAutocomplete
                placeholder="Антоновича, 176"
                returnKeyType={"default"}
                fetchDetails={true}
                currentLocation={false}
                isRowScrollable={true}
                keepResultsAfterBlur={false}
                enablePoweredByContainer={true}
                debounce={200}
                styles={styles.googlePlaces}
                onPress={(data, details) => {
                  console.log(data);
                  console.log(details);
                }}
                query={{
                  key: GOOGLE_MAPS_APIKEY,
                  language: "uk",
                  components: "country:ua",
                }}
              />
              <Arrow />
            </View>
          </View>
        </View>
        <View style={styles.dateBlock}>
          <Text style={styles.titleH2}>Дата і час прибуття</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={styles.lable}>Дата</Text>
              <TouchableWithoutFeedback onPress={() => setIsOpenLoadDate(true)}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.dateInput}>{`${
                    rangeLoad.startDate
                      ? rangeLoad.startDate
                          .toJSON()
                          .slice(0, 10)
                          .split("-")
                          .reverse()
                          .join(".")
                      : "Оберіть"
                  } - ${
                    rangeLoad.endDate
                      ? rangeLoad.endDate
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
              <TouchableWithoutFeedback onPress={() => setIsOpenLoadTime(true)}>
                <Text style={styles.timeInput}>{`${timeLoad.hours
                  .toString()
                  .padStart(2, "0")}:${timeLoad.minutes
                  .toString()
                  .padStart(2, "0")}`}</Text>
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
          <View style={styles.inputFlex}>
            <TextInput
              style={styles.input}
              placeholder="Україна"
              onChangeText={setCountryUnload}
              value={countryUnload}
            />
            <Arrow />
          </View>
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.lable}>Область</Text>
          <View style={styles.inputFlex}>
            <TextInput
              style={styles.input}
              placeholder="Київ"
              onChangeText={setCityUnload}
              value={cityUnload}
            />
            <Arrow />
          </View>
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.lable}>Місто</Text>
          <View style={styles.inputFlex}>
            <TextInput
              style={styles.input}
              placeholder="Київ"
              onChangeText={setCityUnload}
              value={cityUnload}
            />
            <Arrow />
          </View>
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.lable}>Адреса</Text>
          <View style={styles.googleInputWrap}>
            <View style={styles.inputFlex}>
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
                  key: GOOGLE_MAPS_APIKEY,
                  language: "uk",
                  components: "country:ua",
                }}
              />
              <Arrow />
            </View>
          </View>
        </View>
        <View style={styles.dateBlock}>
          <Text style={styles.titleH2}>Дата і час прибуття</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={styles.lable}>Дата</Text>
              <TouchableWithoutFeedback
                onPress={() => setIsOpenUnloadDate(true)}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.dateInput}>{`${
                    rangeUnload.startDate
                      ? rangeUnload.startDate
                          .toJSON()
                          .slice(0, 10)
                          .split("-")
                          .reverse()
                          .join(".")
                      : "Оберіть"
                  } - ${
                    rangeUnload.endDate
                      ? rangeUnload.endDate
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
              <TouchableWithoutFeedback
                onPress={() => setIsOpenUnloadTime(true)}
              >
                <Text style={styles.timeInput}>{`${timeUnload.hours
                  .toString()
                  .padStart(2, "0")}:${timeUnload.minutes
                  .toString()
                  .padStart(2, "0")}`}</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        <View style={styles.separator}></View>
        <View>
          <TouchableOpacity
            onPress={() => setForwarder(!forwarder)}
            style={[styles.checkbox, { marginBottom: 25 }]}
          >
            <View style={styles.checkboxContainer}>
              {forwarder && <View style={styles.checkedFill} />}
            </View>
            <Text style={styles.titleH1}>Послуга експедитора</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setNeedLoader(!needLoader)}
            style={[styles.checkbox, { marginBottom: 12 }]}
          >
            <View style={styles.checkboxContainer}>
              {needLoader && <View style={styles.checkedFill} />}
            </View>
            <Text style={styles.titleH1}>Послуга грузчиків</Text>
          </TouchableOpacity>
        </View>
        {needLoader && (
          <View style={styles.loadersInputWrap}>
            <View style={{ marginRight: 20 }}>
              <Text style={styles.lable}>Кількість грузчиків</Text>
              <TextInput
                keyboardType="numeric"
                style={styles.input}
                onChangeText={handleLoadersInput}
                value={qtyLoaders}
              ></TextInput>
            </View>
            <View>
              <Text style={styles.lable}>Зайнятість</Text>
              <DropDownPicker
                dropDownDirection="TOP"
                style={styles.loaderPicker}
                textStyle={styles.loaderPickerText}
                containerStyle={styles.loaderPickerContainer}
                open={openLoadersInput}
                value={valueLoadersInput}
                items={itemsLoadersInput}
                setOpen={setOpenLoadersInput}
                setValue={setValueLoadersInput}
                setItems={setItemsLoadersInput}
              />
            </View>
          </View>
        )}
        <View style={styles.separator}></View>
        <View style={{ marginBottom: 20 }}>
          <View style={{ marginBottom: 15 }}>
            <Text style={styles.titleH1}>Контактні дані</Text>
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.lable}>Прізвище</Text>
            <TextInput
              style={styles.input}
              placeholder="Валунов"
              onChangeText={setCountryUnload}
              value={countryUnload}
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.lable}>Ім’я</Text>
            <TextInput
              style={styles.input}
              placeholder="Валентин"
              onChangeText={setCountryUnload}
              value={countryUnload}
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.lable}>По-батькові</Text>
            <TextInput
              style={styles.input}
              placeholder="Валерійович"
              onChangeText={setRegionUnload}
              value={regionUnload}
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.lable}>Номер телефону</Text>
            <MaskInput
              style={styles.input}
              keyboardType="phone-pad"
              placeholder="+38 (097) 333 3333"
              value={phone}
              onChangeText={(masked, unmasked) => {
                setPhone(masked);
              }}
              mask={phoneMask}
            />
          </View>
        </View>
        <View style={{ marginBottom: 15 }}>
          <Text style={styles.titleH1}>Оплата</Text>
        </View>
        <View style={styles.payChoiceThumb}>
          <TouchableOpacity
            onPress={() => handlePaymentSelect("full")}
            style={[styles.payChoiceCheckbox]}
          >
            <View style={styles.PayChoiceCheckboxContainer}>
              {selectedPayMetod === "full" && (
                <View style={styles.payChoiceCheckedFill} />
              )}
            </View>
            <Text style={styles.payChoiceText}>Повна</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.payChoiceThumb}>
          <TouchableOpacity
            onPress={() => handlePaymentSelect("parts")}
            style={[styles.payChoiceCheckbox]}
          >
            <View style={styles.PayChoiceCheckboxContainer}>
              {selectedPayMetod === "parts" && (
                <View style={styles.payChoiceCheckedFill} />
              )}
            </View>
            <Text style={styles.payChoiceText}>Частинами</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.payChoiceThumb, styles.payChoiceThumbPassive]}>
          <TouchableOpacity
            disabled={true}
            onPress={() => handlePaymentSelect("moow")}
            style={[
              styles.payChoiceCheckbox,
              { justifyContent: "space-between" },
            ]}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.PayChoiceCheckboxContainer}>
                {selectedPayMetod === "moow" && (
                  <View style={styles.payChoiceCheckedFill} />
                )}
              </View>
              <Text style={styles.payChoiceText}>Через MOOW</Text>
            </View>
            <Text style={styles.soonText}>скоро</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", marginBottom: 35 }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate("OrderTransSecond", {
                qtyLoaders,
                timeForLoaders: valueLoadersInput,
              })
            }
          >
            <Btn>Далі</Btn>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 20,
  },
  titleH1: {
    fontFamily: FontFamily.bold,
    color: Color.purple,
    fontSize: FontSize.H1_size,
    lineHeight: 25,
  },
  titleH2: {
    fontFamily: FontFamily.bold,
    color: Color.mainBlack,
    fontSize: FontSize.H3_size,
    lineHeight: 20,
    margin: 10,
  },
  lable: {
    fontFamily: FontFamily.medium,
    color: Color.mainBlack,
    fontSize: FontSize.H4_size,
    lineHeight: 18,
    marginBottom: 3,
  },
  inputWrap: {
    marginBottom: 15,
  },
  inputFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: Color.purple,
    fontFamily: FontFamily.regular,
    fontSize: FontSize.H3_size,
    lineHeight: 20,
    marginRight: 6,
    width: "95%",
  },
  googlePlaces: {
    textInputContainer: {
      marginTop: 0,
    },
    textInput: {
      height: 30,
      fontFamily: FontFamily.regular,
      color: Color.mainBlack,
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
    minWidth: 185,
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
    marginTop: 20,
    marginBottom: 20,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxContainer: {
    width: 22,
    height: 22,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: Color.grey,
  },
  checkedFill: {
    width: 16.5,
    height: 16.5,
    backgroundColor: Color.purple,
    borderRadius: 2,
  },
  loadersInputWrap: {
    flexDirection: "row",
  },
  loaderPicker: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: Color.purple,
    backgroundColor: "#ffffff",
  },
  loaderPickerText: {
    fontSize: 16,
    fontFamily: FontFamily.regular,
  },
  loaderPickerContainer: {
    width: 100,
    borderColor: Color.purple,
  },
  payChoiceThumb: {
    paddingHorizontal: 15,
    justifyContent: "center",
    marginBottom: 15,
    height: 50,
    borderRadius: 5,
    backgroundColor: Color.bgPurple,
  },
  payChoiceThumbPassive: {
    backgroundColor: Color.bgGrey,
    marginBottom: 20,
  },
  payChoiceCheckbox: { flexDirection: "row", alignItems: "center" },
  PayChoiceCheckboxContainer: {
    width: 24,
    height: 24,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 100,
    borderStyle: "solid",
    borderColor: Color.grey,
  },
  payChoiceCheckedFill: {
    width: 18,
    height: 18,
    backgroundColor: Color.purple,
    borderRadius: 100,
  },
  payChoiceText: {
    color: Color.secondBlack,
    fontFamily: FontFamily.bold,
    fontSize: 16,
  },
  soonText: {
    fontFamily: FontFamily.regular,
    color: Color.purple,
  },
});
