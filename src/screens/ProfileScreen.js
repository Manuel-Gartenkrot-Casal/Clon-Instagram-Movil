import { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { currentUser } from '../constants/data';
import { fetchCatImages } from '../services/api';

const SIZE = (Dimensions.get('window').width - 4) / 3;

export default function ProfileScreen({ navigation }) {
  const [grid, setGrid] = useState([]);

  useEffect(() => { loadGrid(); }, []);

  const loadGrid = async () => {
    const images = await fetchCatImages(12);
    setGrid(images);
  };

  const openDetail = (item) => {
    navigation.navigate('PostDetail', {
      post: {
        id: item.id,
        image: item.url,
        username: currentUser.username,
        userAvatar: currentUser.avatar,
        location: 'Mi ubicación',
        caption: 'Foto de perfil 📸',
        likes: Math.floor(Math.random() * 100) + 10,
        comments: Math.floor(Math.random() * 10) + 1,
        timeAgo: 'HACE UNOS MINUTOS',
      },
    });
  };

  const Header = () => (
    <View>
      <View style={styles.profileHeader}>
        <Image source={{ uri: currentUser.avatar }} style={styles.avatar} />
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statNum}>{currentUser.posts}</Text>
            <Text style={styles.statLabel}>Publicaciones</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNum}>{currentUser.followers.toLocaleString()}</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNum}>{currentUser.following}</Text>
            <Text style={styles.statLabel}>Seguidos</Text>
          </View>
        </View>
      </View>
      <View style={styles.bio}>
        <Text style={styles.name}>{currentUser.fullName}</Text>
        <Text style={styles.bioText}>{currentUser.bio}</Text>
      </View>
      <TouchableOpacity style={styles.editBtn}>
        <Text style={styles.editText}>Editar perfil</Text>
      </TouchableOpacity>
      <View style={styles.tabs}>
        <Ionicons name="grid" size={22} color={COLORS.darkGray} />
        <Ionicons name="person-outline" size={22} color={COLORS.textGray} />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topTitle}>{currentUser.username}</Text>
        <View style={styles.topIcons}>
          <TouchableOpacity><Ionicons name="add-square-outline" size={24} color={COLORS.darkGray} /></TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 16 }}><Ionicons name="menu" size={24} color={COLORS.darkGray} /></TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={grid}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openDetail(item)} style={styles.gridItem}>
            <Image source={{ uri: item.url }} style={styles.gridImage} />
          </TouchableOpacity>
        )}
        ListHeaderComponent={Header}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  topBar: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 14, paddingVertical: 8,
    borderBottomWidth: 0.5, borderBottomColor: COLORS.borderGray,
  },
  topTitle: { fontSize: 18, fontWeight: '700', color: COLORS.darkGray },
  topIcons: { flexDirection: 'row', alignItems: 'center' },
  profileHeader: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 14, paddingTop: 16, paddingBottom: 12,
  },
  avatar: { width: 80, height: 80, borderRadius: 40, borderWidth: 2, borderColor: '#E03F5E' },
  stats: { flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: 20 },
  stat: { alignItems: 'center' },
  statNum: { fontSize: 16, fontWeight: '700', color: COLORS.darkGray },
  statLabel: { fontSize: 12, color: COLORS.textGray, marginTop: 2 },
  bio: { paddingHorizontal: 14, marginBottom: 12 },
  name: { fontWeight: '600', fontSize: 13, color: COLORS.darkGray },
  bioText: { fontSize: 13, color: COLORS.darkGray, marginTop: 2 },
  editBtn: {
    marginHorizontal: 14, marginBottom: 12, paddingVertical: 7,
    borderRadius: 4, borderWidth: 1, borderColor: COLORS.borderGray, alignItems: 'center',
  },
  editText: { fontWeight: '600', fontSize: 13, color: COLORS.darkGray },
  tabs: {
    flexDirection: 'row', justifyContent: 'space-around',
    paddingVertical: 10, borderTopWidth: 0.5, borderTopColor: COLORS.borderGray,
  },
  gridItem: { width: SIZE, height: SIZE, marginBottom: 2 },
  gridImage: { width: '100%', height: '100%' },
});
