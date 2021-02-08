import {v1} from "uuid";

export type DialogType = {
    _id: string,
    title: string,
    messages: Array<string>
}

export type stateDataType = {
    dialogs: Array<DialogType>
}

const stateData : stateDataType = {
    "dialogs": [
        {
            _id: v1(),
            title: "Title_1",
            messages: ["Text here1", "Text here2", "Text here3", "Text here4"]
        }, {
            _id: v1(),
            title: "Title_2",
            messages: ["Text here21", "Text here22", "Text here23", "Text here24"]
        }, {
            _id: v1(),
            title: "Title_3",
            messages: ["Text here31", "Text here32", "Text here33", "Text here34"]
        }, {
            _id: v1(),
            title: "Title_4",
            messages: ["Text here41", "Text here42", "Text here43", "Text here44"]
        }
    ],
}

export default stateData;