const starsObj = {
  title: 'Stars',
  content: [
    {
      title: 'Sun',
      Type: 'G2 V',
      Mass: '333,000 Earths',
      Volume: '1,300,000 Earths',
      Radius: '109 Earth radii',
      Density: '1.408 g/cm^3',
      'Core density': '162.2 g/cm^3',
      Age: '~4.6 billion years',
      Luminosity: '3.828×10^26 W',
      'Visual brightness': '-26.74',
      'Temperature (photosphere/center)': '9930/28,300,000 °F',
      'Surface gravity': '27.94 g',
      'Escape velocity': '617.7 km/s',
      'Distance from Milky Way core': '27,200 ly',
      'Rotation period': '25.05 days',
      Planets: 8,
    },
    {
      title: 'Alpha Centauri',
      Type: 'G2 V',
      Constellation: 'Centaurus',
      Mass: '1.100 M☉',
      Radius: '1.2234 R☉',
      Age: '4.4 billion years',
      Luminosity: '1.519 L☉',
      'Visual brightness': '0.01',
      Temperature: '9960 °F',
      'Distance from Earth': '4.37 ly',
      'Companion stars': 2,
    },
    {
      title: 'Altair',
      Type: 'A7 V',
      Constellation: 'Aquila',
      Mass: '1.79 M☉',
      Radius: '1.63-2.03 R☉',
      Age: '1.2 billion years',
      Luminosity: '10.6 L☉',
      'Visual brightness': '0.76',
      Temperature: '12,000-15,000 °F',
      'Distance from Earth': '16.73 ly',
      'Companion stars': 0,
    },
    {
      title: 'Arcturus',
      Type: 'K0 III',
      Constellation: 'Boötes',
      Mass: '1.08 M☉',
      Radius: '25.4 R☉',
      Age: '7.1 billion years',
      Luminosity: '170 L☉',
      'Visual brightness': '-0.05',
      Temperature: '7255 °F',
      'Distance from Earth': '36.7 ly',
      'Companion stars': 0,
    },
    {
      title: 'Betelgeuse',
      Type: 'M1–M2 Ia–ab',
      Constellation: 'Orion',
      Mass: '11.6 M☉',
      Radius: '684-1172 R☉',
      Age: '8.0–8.5 million years',
      Luminosity: '90000–150000 L☉',
      'Visual brightness': '0.2-1.2',
      Temperature: '6000 °F',
      'Distance from Earth': '640 ly',
      'Companion stars': 0,
    },
    {
      title: 'Capella',
      Type: 'K0III',
      Constellation: 'Auriga',
      Mass: '2.5687 M☉',
      Radius: '11.98 R☉',
      Age: '590–650 million years',
      Luminosity: '78.7 L☉',
      'Visual brightness': '0.03-0.16',
      Temperature: '8480 °F',
      'Distance from Earth': '43 ly',
      'Companion stars': 3,
    },
    {
      title: 'Polaris',
      Type: 'F7Ib',
      Constellation: 'Ursa Minor',
      Mass: '5.4 M☉',
      Radius: '37.5 R☉',
      Age: '70 million years',
      Luminosity: '1,260 L☉',
      'Visual brightness': '1.86-2.13',
      Temperature: '10,370 °F',
      'Distance from Earth': '323–433 ly',
      'Companion stars': 2,
    },
    {
      title: 'Procyon',
      Type: 'F5 IV–V',
      Constellation: 'Canis Minor',
      Mass: '1.499 M☉',
      Radius: '2.048 R☉',
      Age: '1.87 billion years',
      Luminosity: '6.93 L☉',
      'Visual brightness': '0.34',
      Temperature: '11,300 °F',
      'Distance from Earth': '11.46 ly',
      'Companion stars': 1,
    },
    {
      title: 'R136a1',
      Type: '	WN5h',
      Constellation: 'Dorado',
      Cluster: 'NGC 2070 open cluster',
      Location: 'Tarantula Nebula',
      Galaxy: 'Large Magellanic Cloud',
      Mass: '265-375 M☉',
      Radius: '28.8-35.4 R☉',
      Age: '0-0.8 million years',
      Luminosity: '8,710,000 L☉',
      'Visual brightness': '0.05-0.18',
      Temperature: '90,000-100,000 °F',
      'Distance from Earth': '163,000 ly',
    },
    {
      title: 'Rigel',
      Type: 'B8 Ia',
      Constellation: 'Orion',
      Mass: '23 M☉',
      Radius: '79-115 R☉',
      Age: '8 million years',
      Luminosity: '120,000-279,000 L☉',
      'Visual brightness': '0.05-0.18',
      Temperature: '21,300 °F',
      'Distance from Earth': '863 ly',
      'Companion stars': '2-4',
    },
    {
      title: 'Sirius',
      Type: 'A0mA1 Va',
      Constellation: 'Canis Major',
      Mass: '2.063 M☉',
      Radius: '1.711 R☉',
      Age: '237-247 million years',
      Luminosity: '25.4 L☉',
      'Visual brightness': '-1.46',
      Temperature: '44,900 °F',
      'Distance from Earth': '8.60 ly',
      'Companion stars': 1,
    },
    {
      title: 'UY Scuti',
      Type: 'M4Ia',
      Constellation: 'Scutum',
      Mass: '7-10 M☉',
      Radius: '1516-1900 R☉',
      Luminosity: '340,000 L☉',
      'Visual brightness': '8.9-11.20',
      Temperature: '5597 °F',
      'Distance from Earth': '9500 ly',
    },
    {
      title: 'Vega',
      Type: 'A0 Va',
      Constellation: 'Lyra',
      Mass: '2.135 M☉',
      Radius: '2.362 R☉',
      Age: '455 million years',
      Luminosity: '40.12 L☉',
      'Visual brightness': '−0.02-0.07',
      Temperature: '16,820 °F',
      'Distance from Earth': '25 ly',
      'Companion stars': 0,
    },
    {
      title: 'VY Canis Majoris',
      Type: 'M2.5I',
      Constellation: 'Canis Major',
      Mass: '9-25 M☉',
      Radius: '1300-1540 R☉',
      Luminosity: '270,000 L☉',
      'Visual brightness': '6.5-9.6',
      Temperature: '5820 °F',
      'Distance from Earth': '3816 ly',
    },
  ]
}

export default starsObj
