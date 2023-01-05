export const BACKEND_DATA = {
  DEVELOPMENT:'http://localhost:3001',
  PRODUCTION: '',
  HEALTH: '/api/user/health',
  LOGIN: '/api/user/login',
  REGISTER: '/api/user/register',
  NEWZONE: '/api/zone/newzone',
  ZONES: '/api/zone',
  NEWUSER: '/api/user/new'
}

export const EXAMPLE_DATA = {
  cargos: ['Técnico, Supervisor', 'Administrador'],
  optionsReq: ['Baja', 'Media', 'Alta'],
  userHeaders: ['Nombre', 'Cargo', 'Status', 'Acción'],
  users:[
    {nombre: 'admin', email:'admin@admin.admin', cargo:'admin', estado:true},
    {nombre: 'Burro', email:'burro@email.com', cargo:'React Developer', estado:true},
    {nombre: 'Gato con botas', email:'gato@email.com', cargo:'React Developer', estado:true},
    {nombre: 'Fiona', email:'Fiona@email.com', cargo:'UI/UX', estado:true},
    {nombre: 'Shrek', email:'shrek@email.com', cargo:'Backend Developer', estado:true},
    {nombre: 'Pinocho', email:'pinocho@email.com', cargo:'Backend Developer', estado:false}
  ],
  reqHeadersUser: ['Nombre', 'Descripción', 'Solicitante', 'Status', 'Acción'],
  reqHeaders: ['Nombre', 'Solicitante', 'Asignado', 'Status', 'Acción'],
  requerimientos: [
    {nombre: 'Ordenar Mesas', descripcion:'Ordenar mesas ubicadas en salon.', estado:true, asignado: 'admin', solicitante: 'Shrek'},
    {nombre: 'Limpiar el patio', descripcion:'Quitar ramas y basura del patio.', estado:false, asignado: 'Gato con botas', solicitante: 'Fiona'}
  ],
  zonasHeaders: ['Nombre', 'Descripción', 'Acción'],
  zonas: [
    {nombre: 'Pantano', descripcion:'Casa de Shrek'},
    {nombre: 'Castillo', descripcion:'Castillo muy muy lejano'}
  ]

}
