interface TreeHelperConfig {
  id: string;
  children: string;
  pid: string;
}
const DEFAULT_CONFIG: TreeHelperConfig = {
  id: 'id',
  children: 'children',
  pid: 'pid',
};

const getConfig = (config: Partial<TreeHelperConfig>) => Object.assign({}, DEFAULT_CONFIG, config);

export function filter<T = any>(tree: T[], func: (n: T) => boolean): T[] {
  const children = 'children';

  function listFilter(list: T[]) {
    return list
      .map((node: any) => ({ ...node }))
      .filter((node) => {
        node[children] = node[children] && listFilter(node[children]);
        return func(node) || (node[children] && node[children].length);
      });
  }

  return listFilter(tree);
}

export function forEach<T = any>(
  tree: T[],
  func: (n: T) => any,
  config: Partial<TreeHelperConfig> = {},
): void {
  config = getConfig(config);
  const list: any[] = [...tree];
  const { children } = config;
  for (let i = 0; i < list.length; i++) {
    //func 返回true就终止遍历，避免大量节点场景下无意义循环，引起浏览器卡顿
    if (func(list[i])) {
      return;
    }
    children && list[i][children] && list.splice(i + 1, 0, ...list[i][children]);
  }
}

/**
 * 获取 Tree 中 value
 * @param data 树形数据结构
 * @param key 树形中 key 字段
 **/
export function getTreeValues<T = any>(data: T[], key = 'key') {
  const keys: any[] = [];
  data.map((item: any) => {
    !keys.includes(item[key]) && keys.push(item[key]);
    if (item.children && item.children.length) {
      getTreeValues(item.children);
    }
  });
  return keys;
}
