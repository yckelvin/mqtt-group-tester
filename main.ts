function VariableInit () {
    topic = [
    "e7NioMy4g",
    "y0vioGy4R",
    "6DFiTGs4R",
    "c9cmTGs4R",
    "nMKLS7yVg",
    "EcbnHnsVg",
    "3ozVH7s4R",
    "CXw4iV-SR",
    "RLS84pPIg",
    "wmA84pPIg"
    ]
}
input.onButtonPressed(Button.A, function () {
    microIoT.microIoT_SendMessage(convertToText(pins.analogReadPin(AnalogPin.P0)), microIoT.TOPIC.topic_0)
    microIoT.microIoT_initDisplay()
    microIoT.microIoT_showUserText(0, "Light value:" + convertToText(pins.analogReadPin(AnalogPin.P0)))
})
function publish (num: number, text: string) {
    microIoT.microIoT_SendMessage(text, microIoT.TOPIC.topic_0)
    microIoT.microIoT_showUserText(num, "Send... " + text)
}
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
let topic: string[] = []
let list: string[] = []
let GroupID = 1
VariableInit()
basic.showNumber(0)
let wifi_name = "izowifi"
let password = "izo1234@"
let iot_id = "UxrkoGs4R"
let iot_pwd = "Ux9koGy4Rz"
let topic_0 = list[GroupID - 1]
basic.showNumber(1)
microIoT.microIoT_initDisplay()
microIoT.microIoT_showUserText(0, "Group ID: " + GroupID)
microIoT.microIoT_showUserText(1, "INIT DEVICE")
microIoT.microIoT_showUserText(2, "SETUP WIFI")
microIoT.microIoT_WIFI(wifi_name, password)
basic.showNumber(2)
microIoT.microIoT_showUserText(3, "DEFINE MQTT")
microIoT.microIoT_MQTT(
iot_id,
iot_pwd,
topic_0,
microIoT.SERVERS.English
)
basic.showNumber(3)
publish(4, convertToText(randint(0, 20)))
publish(5, convertToText(randint(0, 20)))
publish(6, convertToText(randint(0, 20)))
basic.showNumber(4)
