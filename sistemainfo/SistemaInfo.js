const os = require('os');
const fs = require('fs');

// Obtener informacion de la computadora 
const numCPUs = os.cpus().length;
const totalMemoria = os.totalmem();
const memoriaLibre = os.freemem();
const MemoriaUtilizada = totalMemoria - memoriaLibre;
const cpuArchitectura = os.arch();
const osVersion = os.version();

// Ordena la informacion 
const SistemaInfo = `
Número de procesadores: ${numCPUs}
Memoria total: ${(totalMemoria / 1024 / 1024).toFixed(2)} MB
Memoria ocupada: ${(MemoriaUtilizada / 1024 / 1024).toFixed(2)} MB
Arquitectura del CPU: ${cpuArchitectura}
Versión del SO: ${osVersion}
`;

// Escribe la informacion de tu computadora en un archio de texto
fs.writeFile('InformacionSistema.txt', SistemaInfo, (err) => {
  if (err) throw err;
  console.log('La información del sistema ha sido guardada en InformacionSistema.txt');
});
