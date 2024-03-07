export function FirstFit(program, partitions) {
  // console.log(program);
  let resultBool = true;
  let numberPartitionsT = partitions.length;
  let prMemorysz = program.size;
  for (var i = 0; i < numberPartitionsT; i++) {
    if (partitions[i].lo == false && partitions[i].size > prMemorysz) {
      partitions[i].pid = program.PID;
      partitions[i].lo = true;
      break;
    }
    if (i == numberPartitionsT - 1)
      if (i == numberPartitionsT - 1) resultBool = false;
  }

  return { result: resultBool, memory: partitions };
}

export function WorstFit(program, partitions) {
  // console.log(program);
  // console.log(partitions);
  let resultBool = true;
  let numberPartitionsT = partitions.length;
  let prMemorysz = program.size;
  let rPartitions = partitions.reverse();
  for (var i = 0; i < numberPartitionsT; i++) {
    if (rPartitions[i].lo == false && partitions[i].size > prMemorysz) {
      rPartitions[i].pid = program.PID;
      rPartitions[i].lo = true;
      break;
    }
    if (i == numberPartitionsT - 1) resultBool = false;
  }
  partitions = rPartitions.reverse();
  // console.log(partitions);
  return { result: resultBool, memory: partitions };
}

export function BestFit(program, partitions) {
  // console.log(partitions);
  let resultBool = true;
  partitions.sort(function (a, b) {
    return a.size - b.size;
  });
  // console.log(program);
  let numberPartitionsT = partitions.length;
  let prMemorysz = program.size;
  for (var i = 0; i < numberPartitionsT; i++) {
    if (partitions[i].lo == false && partitions[i].size > prMemorysz) {
      partitions[i].pid = program.PID;
      partitions[i].lo = true;
      break;
    }
    if (i == numberPartitionsT - 1) resultBool = false;
  }
  var indSO = partitions.findIndex(function (obj) {
    return obj.pid === "SO";
  });

  // Mueve el objeto encontrado al principio del array
  if (indSO !== -1) {
    var objSO = partitions.splice(indSO, 1)[0];
    partitions.unshift(objSO);
  }
  // console.log(partitions);
  return { result: resultBool, memory: partitions };
}

export function DinamicFit(program, partitions) {
  // let tamPartition = program.size * 1024;

  // let position = 1048577;
  // let positionI = position;
  // let positionF = 0;

  // var objPartitions = [];
  // positionF = positionI + tamPartition - 1;
  // objPartitions = {
  //   name: "",
  //   pid: "",
  //   lo: false,
  //   initial_position: positionI,
  //   final_position: positionF,
  //   size: tamPartition,
  // };
  // positionI = positionF + 1;

  // partitions.partition_dinamic.initial_position = positionF + 1;
  // partitions.partition_dinamic.size -= tamPartition;
  // console.log(memory);
  console.log("A");
}