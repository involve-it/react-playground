export const findDeadlock = (graph) => {
  let ret = false;
  const used = new Array(graph.length);
  const dfs = (i, p = -1) => {
    used[i] = true;
    const graphCur = graph[i];
    let ret = true;
    for (let j = 0; j < graphCur.length; j ++) {
      const u = graphCur[j];
      if (!used[u]) {
        ret = dfs(u, i);
      } else if (graph[u].length > 0 && u !== p && p !== -1) {
        ret = false;
        // graph has cycle
        break;
      }
    }
    return ret;
  }

  for (let i = 0; i < graph.length; i++) {
    if (!used[i]) {
      const res = dfs(i);
      if (!res) {
        ret = true;
      }
    }
  }

  return ret;
}
