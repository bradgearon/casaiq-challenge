import * as Screens from '../screens'

const Routes = {
  AboutUs: {
    screen: Screens.AboutUs,
    path: 'about-us'
  },
  Device: {
    screen: Screens.Device,
    path: 'device/:device_name'
  }
};

export default Routes;