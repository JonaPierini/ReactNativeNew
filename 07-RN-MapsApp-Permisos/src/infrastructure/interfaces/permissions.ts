//ACA esto son los estados del permiso. Los tipos de permisos
//Estos permisos estan creados por mi (bha por Fernando Herrera)

export type PermissionStatus =
  | 'granted'
  | 'denied'
  | 'blocked'
  | 'limited'
  | 'unavailable'
  | 'undetermined';
