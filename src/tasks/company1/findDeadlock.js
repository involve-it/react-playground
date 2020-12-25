export const findDeadlock = (graph) => {
  let ret = false;
  const dfs = (i, p = -1, used) => {
    used[i] = true;
    const graphCur = graph[i];
    let ret = true;
    if (graphCur.length === 0) {
    } else {
      for (let j = 0; j < graphCur.length; j++) {
        const u = graphCur[j];
        if (!used[u]) {
          ret = dfs(u, i, used);
        } else if (graph[u].length > 0 && /*u !== p && */p !== -1) {
          ret = false;
          // graph has cycle
          break;
        }
      }
    }
    if (ret === true) {
      used[i] = undefined;
    }
    return ret;
  }

  for (let i = 0; i < graph.length; i++) {
    const used = new Array(graph.length);
    const res = dfs(i, -1, used);
    if (!res) {
      ret = true;
      break;
    }
  }

  return ret;
}
