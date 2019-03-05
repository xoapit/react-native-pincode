/// <reference types="react" />
import * as React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { PinStatus } from './PinCode';
import { PinResultStatus } from '../index';
/**
 * Pin Code Enter PIN Page
 */
export declare type IProps = {
    buttonDeleteComponent: any;
    buttonDeleteText?: string;
    buttonNumberComponent: any;
    callbackErrorTouchId?: (e: Error) => void;
    changeInternalStatus: (status: PinResultStatus) => void;
    colorCircleButtons?: string;
    colorPassword?: string;
    colorPasswordError?: string;
    disableLockScreen: boolean;
    emptyColumnComponent: any;
    endProcessFunction?: (pinCode: string) => void;
    finishProcess?: (pinCode: string) => void;
    getCurrentLength?: (length: number) => void;
    handleResult: any;
    iconButtonDeleteDisabled?: boolean;
    maxAttempts: number;
    numbersButtonOverlayColor?: string;
    onFail?: any;
    passwordComponent: any;
    passwordLength?: number;
    pinAttemptsAsyncStorageName: string;
    pinCodeKeychainName: string;
    pinCodeVisible?: boolean;
    pinStatusExternal: PinResultStatus;
    status: PinStatus;
    storedPin: string | null;
    styleButtonCircle?: StyleProp<ViewStyle>;
    styleCircleHiddenPassword?: StyleProp<ViewStyle>;
    styleCircleSizeEmpty?: number;
    styleCircleSizeFull?: number;
    styleColorButtonTitle?: string;
    styleColorButtonTitleSelected?: string;
    styleColorSubtitle?: string;
    styleColorSubtitleError?: string;
    styleColorTitle?: string;
    styleColorTitleError?: string;
    styleColumnButtons?: StyleProp<ViewStyle>;
    styleColumnDeleteButton?: StyleProp<ViewStyle>;
    styleContainer?: StyleProp<ViewStyle>;
    styleContainerPinCode?: StyleProp<ViewStyle>;
    styleDeleteButtonColorHideUnderlay?: string;
    styleDeleteButtonColorShowUnderlay?: string;
    styleDeleteButtonIcon?: string;
    styleDeleteButtonSize?: number;
    styleDeleteButtonText?: StyleProp<TextStyle>;
    styleEmptyColumn?: StyleProp<ViewStyle>;
    styleRowButtons?: StyleProp<ViewStyle>;
    styleTextButton?: StyleProp<TextStyle>;
    styleTextSubtitle?: StyleProp<TextStyle>;
    styleTextTitle?: StyleProp<TextStyle>;
    styleViewTitle?: StyleProp<ViewStyle>;
    subtitle: string;
    subtitleComponent: any;
    subtitleError?: string;
    textPasswordVisibleFamily?: string;
    textPasswordVisibleSize?: number;
    timePinLockedAsyncStorageName: string;
    title: string;
    titleAttemptFailed?: string;
    titleComponent: any;
    titleConfirmFailed?: string;
    touchIDDisabled: boolean;
    touchIDSentence: string;
    touchIDTitle?: string;
};
export declare type IState = {
    pinCodeStatus: PinResultStatus;
    locked: boolean;
};
declare class PinCodeEnter extends React.PureComponent<IProps, IState> {
    keyChainResult: string | undefined;
    constructor(props: IProps);
    componentWillMount(): Promise<void>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, prevContext: any): void;
    triggerTouchID(): void;
    endProcess: (pinCode?: string | undefined) => Promise<void>;
    launchTouchID(): Promise<void>;
    render(): JSX.Element;
}
export default PinCodeEnter;
