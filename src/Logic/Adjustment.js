export function FirstFit(program, partitions) {
  console.log(program);
  let numberPartitionsT = partitions.length;
  let prMemorysz = program.size;
  for (var i = 0; i < numberPartitionsT; i++) {
    if (partitions[i].lo == false && partitions[i].size > prMemorysz) {
      partitions[i].pid = program.PID;
      partitions[i].lo = true;
      break;
    }
  }
  // console.log(partitions);
  return { result: true, memory: partitions };
}

export function WorstFit(program, partitions) {
  console.log(program);
  console.log(partitions);
  let numberPartitionsT = partitions.length;
  let prMemorysz = program.size;
  let rPartitions = partitions.reverse();
  for (var i = 0; i < numberPartitionsT; i++) {
    if (rPartitions[i].lo == false && partitions[i].size > prMemorysz) {
      rPartitions[i].pid = program.PID;
      rPartitions[i].lo = true;
      break;
    }
  }
  partitions = rPartitions.reverse();
  // console.log(partitions);
  return { result: true, memory: partitions };
}

export function BestFit(program, partitions) {
  console.log(partitions);
  partitions.sort(function (a, b) {
    return a.size - b.size;
  });
  console.log(program);
  let numberPartitionsT = partitions.length;
  let prMemorysz = program.size;
  for (var i = 0; i < numberPartitionsT; i++) {
    if (partitions[i].lo == false && partitions[i].size > prMemorysz) {
      partitions[i].pid = program.PID;
      partitions[i].lo = true;
      break;
    }
  }
  // console.log(partitions);
  return { result: true, memory: partitions };
}
