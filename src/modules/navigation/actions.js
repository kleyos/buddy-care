import { NavigationActions } from 'react-navigation';

export const navigate = (routeName, params = {}) => {
  console.log(`navigate ${routeName}`)
 return NavigationActions.navigate(routeName, params);
}
export const navigateWithReset = (routeName, params = {}, routes = []) => {
  const actions = [...routes, routeName];

  return NavigationActions.reset({
    index: actions.length - 1,
    actions: actions.map(route => navigate(route, params))
  });
};

export const navigateBack = () => NavigationActions.back();
