import './App.css';

import Name from './components/Name'
import City from './components/City'
import Days from '/components/Days'

function App() {

  let days = ['Monday','Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'
]

let dias = [
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
  'domingo'
]
let tag = [
  'Montag',
  'Dienstag',
  'Mittwoch',
  'Donnerstag',
  'Freitag',
  'Samstag',
  'Sonntag'
]
let dag = [
  'måndag',
  'tisdag',
  'onsdag',
  'torsdag',
  'fredag',
  'lördag',
  'söndag'
]
const daysInKorean = [
  'wollyoil',
  'hwayoil',
  'suyoil',
  'mongnyoil',
  'geumyoil',
  'toyoil',
  'illyoil'
]
const Tydzień = [
  'Poniedziałek',
  'Wtorek',
  'Środa',
  'Czwartek',
  'Piątek',
  'Sobota',
  'Niedziela'
]

  return (
  <>
    <Name name='Veronica' days={days} language={language} />
    <Name name='Shannon' days={dias} language={language} />
    <Name name='Kipp' days={tag} language={language} />
    <Name name='Christian' days={daysInKorean} language={language} />
    <Name name='Joy' days={Tydzien} language={language} />
  </>
   
  );
}

export default App;
