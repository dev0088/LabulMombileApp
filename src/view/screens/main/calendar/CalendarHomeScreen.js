import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em } from 'view/common/const';
import { LocaleConfig, Calendar, CalendarList, Agenda } from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';

const CalendarHomeScreen = () => {
  const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
  const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
  const workout = { key: 'workout', color: 'green' };
  const [calendarItems, setCalendarItems] = React.useState({});

  return (
    <View style={styles.container}>
      <TitleText text="Mon calendrier" />
      <Agenda
        items={calendarItems}
        selected={'2021-03-15'}
        style={{width: '100%'}}
        renderDay={(day, item) => {return (<View style={{backgroundColor: '#ff0000', width: 30 * em, height: 30 * em}}/>);}}
        // renderItem={this.renderItem.bind(this)}
        // loadItemsForMonth={this.loadItems.bind(this)}
        // renderEmptyDate={this.renderEmptyDate.bind(this)}
        // rowHasChanged={this.rowHasChanged.bind(this)}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#43515c'},
        //    '2017-05-09': {textColor: '#43515c'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        // hideExtraDays={false}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#78f3f3',
  },
};

export default CalendarHomeScreen;
