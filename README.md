# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

const memory =
{
    "size": 16777216,
    "partitions": {
        "partition_so": {
            "name": "Sistema operativo",
            "pid": "SO",
            "lo": true,
            "initial_position": 0,
            "final_position": 1048576,
            "size": 1048576
        }
    }
};

// ¿de qué tamaño quiere sus particiones en kib?
const tamPartitionsKib = 1024;
const tamPartitions= tamPartitionsKib*1024;

const userMemory = memory.size - memory.partitions.partition_so.size;

const partitions = (Math.floor(userMemory / tamPartitions));
console.log(Math.floor(userMemory / tamPartitions));
var objPartitions = {};

var position = 1048577;
var positionI = position;
var positionF = 0;

var objPartitions2 = [];
for (var i = 0; i < partitions; i++) {
    var partitionName = "Particion_" + (i+1);
    positionF = positionI + tamPartitions;
    objPartitions2[partitionName] = {
        "name": "",
        "pid": "",
        "lo": false,
        "initial_position": positionI,
        "final_position": positionF,
        "size": 3145728
    };
    positionI = positionF +1;
}

// Concatenar jsonObj2 en la propiedad "partitions" de jsonObj1
memory.partitions = Object.assign({}, memory.partitions, objPartitions2);

// Mostrar el resultado
console.log(memory);
