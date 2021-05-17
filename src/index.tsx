import { NativeModules } from 'react-native';

const { WakeOnLan } = NativeModules;

interface Configuration {
  mac: string;
  address?: string;
}

function wake({
  mac,
  address = '255.255.255.255',
}: Configuration): Promise<string> {
  return WakeOnLan.wake(mac, address);
}

export default {
  wake,
};
