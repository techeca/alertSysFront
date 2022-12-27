export const BACKEND_DATA = {
  DEVELOPMENT:'http://localhost:3001',
  PRODUCTION: '',
  HEALTH: '/api/user/health',
  LOGIN: '/api/user/login',
  REGISTER: '/api/user/register'
}

export const EXAMPLE_DATA = {
  cargos: ['Técnico, Supervisor', 'Administrador'],
  userHeaders: ['Nombre', 'Cargo', 'Status', 'Acción'],
  users:[
    {nombre: 'Burro', email:'burro@email.com', cargo:'React Developer', estado:true},
    {nombre: 'Gato con botas', email:'gato@email.com', cargo:'React Developer', estado:true},
    {nombre: 'Fiona', email:'Fiona@email.com', cargo:'UI/UX', estado:true},
    {nombre: 'Shrek', email:'shrek@email.com', cargo:'Backend Developer', estado:true},
    {nombre: 'Pinocho', email:'pinocho@email.com', cargo:'Backend Developer', estado:false}
  ],
  reqHeaders: ['Nombre', 'Description', 'Status', 'Acción'],
  requerimientos: [
    {nombre: 'Ordenar Mesas', email:'', descripcion:'Ordenas mesas ubiacadas en salon.', estado:true},
    {nombre: 'Limpiar el patio', email:'', descripcion:'Quitar ramas y basura del patio.', estado:false}
  ],
  zonasHeaders: ['Nombre', 'Descripción', 'Acción'],
  zonas: [
    {nombre: 'Pantano', descripcion:'Casa de Shrek'},
    {nombre: 'Castillo', descripcion:'Castillo muy muy lejano'}
  ]
}
