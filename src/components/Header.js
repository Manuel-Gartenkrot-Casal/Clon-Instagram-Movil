import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Instagram</Text>
      <View style={styles.icons}>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="heart-outline" size={24} color={COLORS.black} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="send-outline" size={24} color={COLORS.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.borderGray,
  },
  logo: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.black,
    letterSpacing: -0.3,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBtn: {
    marginLeft: 18,
  },
});
