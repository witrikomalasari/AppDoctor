import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {DataProfileDoctor, JSONCategoryDoctor} from '../../Assets';
import {DataNewsItem} from '../../Assets/JSON/Dummy/DataNewsItem';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctors,
} from '../../Components';
import {colors, fonts, showError} from '../../Constant';
import {Fire} from '../../Config';

export default function Doctors({navigation}) {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Fire.database()
      .ref('news/')
      .once('value')
      .then(res => {
        console.log('data', JSON.stringify(res.val(), null, 2));
        if (res.val()) {
          setNews(res.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });

    Fire.database()
      .ref('category_docter/')
      .once('value')
      .then(res => {
        console.log('DATA CATEGORY', JSON.stringify(res.val(), null, 2));
        if (res.val()) {
          setCategories(res.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });
  }, []);

  // console.log('STATE NEWS', JSON.stringify(news, null, 2));

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            {/* HomeProfile menggunakan metode ORGANISM membuat useState & useEffect di child/Component
                HomeProfile untuk Photo, name, pekerjaan */}
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScrollview}>
            <ScrollView horizontal shouldActivateOnStart={false}>
              <View style={styles.category}>
                {/* GAP u/ kamuflase jarak card dan tepi */}
                <Gap width={32} />
                {categories.map(item => {
                  return (
                    <DoctorCategory
                      key={item.id}
                      categoryDoctor={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor')}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>

            {DataProfileDoctor.map(item => {
              return (
                <RatedDoctors
                  key={item.id}
                  photoDoctor={item.image}
                  name={item.name}
                  dokterSpesialis={item.dokterSpesialis}
                  onPress={() => navigation.navigate('DoctorProfile')}
                />
              );
            })}
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>

          {news.map(item => {
            return (
              <NewsItem
                key={item.id}
                title={item.title}
                date={item.date}
                image={item.image}
              />
            );
          })}

          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  wrapperScrollview: {
    marginHorizontal: -16,
  },
  category: {
    flexDirection: 'row',
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
