import { NativeModules } from 'react-native';

type WakeOnLanType = {
  multiply(a: number, b: number): Promise<number>;
};

const { WakeOnLan } = NativeModules;

export default WakeOnLan as WakeOnLanType;
