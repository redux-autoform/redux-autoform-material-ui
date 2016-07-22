import MaterialUIFactory from './factory/MaterialUIFactory';
import TypeConfig from './factory/constants/TypeConstants'

export const EditComponentFactory = new MaterialUIFactory(TypeConfig.edit);
export const DetailsComponentFactory = new MaterialUIFactory(TypeConfig.details);