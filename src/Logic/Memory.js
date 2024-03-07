export function MemoryFixed(tamPartitionsKib) {
  // ¿de qué tamaño quiere sus particiones en kib?
  // let tamPartitionsKib = localStorage.fixed_partitions_size;\
  const memory = {
    size: 16777216,
    partitions: {
      partition_so: {
        name: "Sistema operativo",
        pid: "SO",
        lo: true,
        initial_position: 0,
        final_position: 1048576,
        size: 1048576,
      },
    },
  };

  let tamPartitions = tamPartitionsKib * 1024;

  const userMemory = memory.size - memory.partitions.partition_so.size;

  const partitions = Math.floor(userMemory / tamPartitions);

  var position = 1048577;
  var positionI = position;
  var positionF = 0;

  var objPartitions2 = [];
  for (var i = 0; i < partitions; i++) {
    var partitionName = "Particion_" + (i + 1);
    positionF = positionI + tamPartitions - 1;
    objPartitions2[partitionName] = {
      name: "",
      pid: "",
      lo: false,
      initial_position: positionI,
      final_position: positionF,
      size: tamPartitions,
    };
    positionI = positionF + 1;
  }

  memory.partitions = Object.assign([], memory.partitions, objPartitions2);

  var arrayDeJson = Object.keys(memory.partitions).map(function (key) {
    return memory.partitions[key];
  });

  memory.partitions = arrayDeJson;
  console.log(memory);

  return memory;
}

export function MemoryVariable(partitionsRows) {
  const memory = {
    size: 16777216,
    partitions: {
      partition_so: {
        name: "Sistema operativo",
        pid: "SO",
        lo: true,
        initial_position: 0,
        final_position: 1048576,
        size: 1048576,
      },
    },
  };
  let numberPartitions = 0;
  let tamPartitions = 0;
  let position = 1048577;
  let positionI = position;
  let positionF = 0;
  let objPartitions = [];
  let objTempPartitions = [];

  partitionsRows.sort(function (a, b) {
    return b.size - a.size;
  });

  for (var i = 0; i < partitionsRows?.length; i++) {
    numberPartitions = partitionsRows[i].number;
    tamPartitions = partitionsRows[i].size * 1024;
    for (var j = 0; j < numberPartitions; j++) {
      positionF = positionI + tamPartitions;
      objPartitions.unshift({
        name: "",
        pid: "",
        lo: false,
        initial_position: positionI,
        final_position: positionF,
        size: tamPartitions,
      });
      positionI = positionF + 1;
    }
    objTempPartitions = objTempPartitions.concat(objPartitions);
    objPartitions = [];
  }

  memory.partitions = Object.assign([], objTempPartitions, memory.partitions);

  var arrayDeJson = Object.keys(memory.partitions).map(function (key) {
    return memory.partitions[key];
  });

  memory.partitions = arrayDeJson.reverse();

  console.log(memory.partitions);
  return memory;
}

export function MemoryDinamic() {}
